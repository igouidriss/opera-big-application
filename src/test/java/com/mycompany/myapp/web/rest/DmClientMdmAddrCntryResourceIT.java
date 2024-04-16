package com.mycompany.myapp.web.rest;

import static com.mycompany.myapp.domain.DmClientMdmAddrCntryAsserts.*;
import static com.mycompany.myapp.web.rest.TestUtil.createUpdateProxyForBean;
import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.mycompany.myapp.IntegrationTest;
import com.mycompany.myapp.domain.DmClientMdmAddrCntry;
import com.mycompany.myapp.repository.DmClientMdmAddrCntryRepository;
import com.mycompany.myapp.service.dto.DmClientMdmAddrCntryDTO;
import com.mycompany.myapp.service.mapper.DmClientMdmAddrCntryMapper;
import jakarta.persistence.EntityManager;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Random;
import java.util.concurrent.atomic.AtomicLong;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.transaction.annotation.Transactional;

/**
 * Integration tests for the {@link DmClientMdmAddrCntryResource} REST controller.
 */
@IntegrationTest
@AutoConfigureMockMvc
@WithMockUser
class DmClientMdmAddrCntryResourceIT {

    private static final String DEFAULT_PRTY_FK = "AAAAAAAAAA";
    private static final String UPDATED_PRTY_FK = "BBBBBBBBBB";

    private static final String DEFAULT_FRST_CNTRY_FRMT = "AAAAAAAAAA";
    private static final String UPDATED_FRST_CNTRY_FRMT = "BBBBBBBBBB";

    private static final String DEFAULT_FRST_CONTINENT = "AAAAAAAAAA";
    private static final String UPDATED_FRST_CONTINENT = "BBBBBBBBBB";

    private static final String DEFAULT_SCND_CNTRY_FRMT = "AAAAAAAAAA";
    private static final String UPDATED_SCND_CNTRY_FRMT = "BBBBBBBBBB";

    private static final String DEFAULT_SCND_CONTINENT = "AAAAAAAAAA";
    private static final String UPDATED_SCND_CONTINENT = "BBBBBBBBBB";

    private static final String DEFAULT_THRD_CNTRY_FRMT = "AAAAAAAAAA";
    private static final String UPDATED_THRD_CNTRY_FRMT = "BBBBBBBBBB";

    private static final String DEFAULT_THRD_CONTINENT = "AAAAAAAAAA";
    private static final String UPDATED_THRD_CONTINENT = "BBBBBBBBBB";

    private static final String DEFAULT_FRTH_CNTRY_FRMT = "AAAAAAAAAA";
    private static final String UPDATED_FRTH_CNTRY_FRMT = "BBBBBBBBBB";

    private static final String DEFAULT_FRTH_CONTINENT = "AAAAAAAAAA";
    private static final String UPDATED_FRTH_CONTINENT = "BBBBBBBBBB";

    private static final String DEFAULT_TECH_LINEAGE = "AAAAAAAAAA";
    private static final String UPDATED_TECH_LINEAGE = "BBBBBBBBBB";

    private static final LocalDate DEFAULT_TECH_CREATED_DATE = LocalDate.ofEpochDay(0L);
    private static final LocalDate UPDATED_TECH_CREATED_DATE = LocalDate.now(ZoneId.systemDefault());

    private static final LocalDate DEFAULT_TECH_UPDATED_DATE = LocalDate.ofEpochDay(0L);
    private static final LocalDate UPDATED_TECH_UPDATED_DATE = LocalDate.now(ZoneId.systemDefault());

    private static final String DEFAULT_TECH_MAPPING = "AAAAAAAAAA";
    private static final String UPDATED_TECH_MAPPING = "BBBBBBBBBB";

    private static final String DEFAULT_TECH_COMMENT = "AAAAAAAAAA";
    private static final String UPDATED_TECH_COMMENT = "BBBBBBBBBB";

    private static final String ENTITY_API_URL = "/api/dm-client-mdm-addr-cntries";
    private static final String ENTITY_API_URL_ID = ENTITY_API_URL + "/{id}";

    private static Random random = new Random();
    private static AtomicLong longCount = new AtomicLong(random.nextInt() + (2 * Integer.MAX_VALUE));

    @Autowired
    private ObjectMapper om;

    @Autowired
    private DmClientMdmAddrCntryRepository dmClientMdmAddrCntryRepository;

    @Autowired
    private DmClientMdmAddrCntryMapper dmClientMdmAddrCntryMapper;

    @Autowired
    private EntityManager em;

    @Autowired
    private MockMvc restDmClientMdmAddrCntryMockMvc;

    private DmClientMdmAddrCntry dmClientMdmAddrCntry;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static DmClientMdmAddrCntry createEntity(EntityManager em) {
        DmClientMdmAddrCntry dmClientMdmAddrCntry = new DmClientMdmAddrCntry()
            .prtyFk(DEFAULT_PRTY_FK)
            .frstCntryFrmt(DEFAULT_FRST_CNTRY_FRMT)
            .frstContinent(DEFAULT_FRST_CONTINENT)
            .scndCntryFrmt(DEFAULT_SCND_CNTRY_FRMT)
            .scndContinent(DEFAULT_SCND_CONTINENT)
            .thrdCntryFrmt(DEFAULT_THRD_CNTRY_FRMT)
            .thrdContinent(DEFAULT_THRD_CONTINENT)
            .frthCntryFrmt(DEFAULT_FRTH_CNTRY_FRMT)
            .frthContinent(DEFAULT_FRTH_CONTINENT)
            .techLineage(DEFAULT_TECH_LINEAGE)
            .techCreatedDate(DEFAULT_TECH_CREATED_DATE)
            .techUpdatedDate(DEFAULT_TECH_UPDATED_DATE)
            .techMapping(DEFAULT_TECH_MAPPING)
            .techComment(DEFAULT_TECH_COMMENT);
        return dmClientMdmAddrCntry;
    }

    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static DmClientMdmAddrCntry createUpdatedEntity(EntityManager em) {
        DmClientMdmAddrCntry dmClientMdmAddrCntry = new DmClientMdmAddrCntry()
            .prtyFk(UPDATED_PRTY_FK)
            .frstCntryFrmt(UPDATED_FRST_CNTRY_FRMT)
            .frstContinent(UPDATED_FRST_CONTINENT)
            .scndCntryFrmt(UPDATED_SCND_CNTRY_FRMT)
            .scndContinent(UPDATED_SCND_CONTINENT)
            .thrdCntryFrmt(UPDATED_THRD_CNTRY_FRMT)
            .thrdContinent(UPDATED_THRD_CONTINENT)
            .frthCntryFrmt(UPDATED_FRTH_CNTRY_FRMT)
            .frthContinent(UPDATED_FRTH_CONTINENT)
            .techLineage(UPDATED_TECH_LINEAGE)
            .techCreatedDate(UPDATED_TECH_CREATED_DATE)
            .techUpdatedDate(UPDATED_TECH_UPDATED_DATE)
            .techMapping(UPDATED_TECH_MAPPING)
            .techComment(UPDATED_TECH_COMMENT);
        return dmClientMdmAddrCntry;
    }

    @BeforeEach
    public void initTest() {
        dmClientMdmAddrCntry = createEntity(em);
    }

    @Test
    @Transactional
    void createDmClientMdmAddrCntry() throws Exception {
        long databaseSizeBeforeCreate = getRepositoryCount();
        // Create the DmClientMdmAddrCntry
        DmClientMdmAddrCntryDTO dmClientMdmAddrCntryDTO = dmClientMdmAddrCntryMapper.toDto(dmClientMdmAddrCntry);
        var returnedDmClientMdmAddrCntryDTO = om.readValue(
            restDmClientMdmAddrCntryMockMvc
                .perform(
                    post(ENTITY_API_URL).contentType(MediaType.APPLICATION_JSON).content(om.writeValueAsBytes(dmClientMdmAddrCntryDTO))
                )
                .andExpect(status().isCreated())
                .andReturn()
                .getResponse()
                .getContentAsString(),
            DmClientMdmAddrCntryDTO.class
        );

        // Validate the DmClientMdmAddrCntry in the database
        assertIncrementedRepositoryCount(databaseSizeBeforeCreate);
        var returnedDmClientMdmAddrCntry = dmClientMdmAddrCntryMapper.toEntity(returnedDmClientMdmAddrCntryDTO);
        assertDmClientMdmAddrCntryUpdatableFieldsEquals(
            returnedDmClientMdmAddrCntry,
            getPersistedDmClientMdmAddrCntry(returnedDmClientMdmAddrCntry)
        );
    }

    @Test
    @Transactional
    void createDmClientMdmAddrCntryWithExistingId() throws Exception {
        // Create the DmClientMdmAddrCntry with an existing ID
        dmClientMdmAddrCntry.setId(1L);
        DmClientMdmAddrCntryDTO dmClientMdmAddrCntryDTO = dmClientMdmAddrCntryMapper.toDto(dmClientMdmAddrCntry);

        long databaseSizeBeforeCreate = getRepositoryCount();

        // An entity with an existing ID cannot be created, so this API call must fail
        restDmClientMdmAddrCntryMockMvc
            .perform(post(ENTITY_API_URL).contentType(MediaType.APPLICATION_JSON).content(om.writeValueAsBytes(dmClientMdmAddrCntryDTO)))
            .andExpect(status().isBadRequest());

        // Validate the DmClientMdmAddrCntry in the database
        assertSameRepositoryCount(databaseSizeBeforeCreate);
    }

    @Test
    @Transactional
    void checkPrtyFkIsRequired() throws Exception {
        long databaseSizeBeforeTest = getRepositoryCount();
        // set the field null
        dmClientMdmAddrCntry.setPrtyFk(null);

        // Create the DmClientMdmAddrCntry, which fails.
        DmClientMdmAddrCntryDTO dmClientMdmAddrCntryDTO = dmClientMdmAddrCntryMapper.toDto(dmClientMdmAddrCntry);

        restDmClientMdmAddrCntryMockMvc
            .perform(post(ENTITY_API_URL).contentType(MediaType.APPLICATION_JSON).content(om.writeValueAsBytes(dmClientMdmAddrCntryDTO)))
            .andExpect(status().isBadRequest());

        assertSameRepositoryCount(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    void getAllDmClientMdmAddrCntries() throws Exception {
        // Initialize the database
        dmClientMdmAddrCntryRepository.saveAndFlush(dmClientMdmAddrCntry);

        // Get all the dmClientMdmAddrCntryList
        restDmClientMdmAddrCntryMockMvc
            .perform(get(ENTITY_API_URL + "?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(dmClientMdmAddrCntry.getId().intValue())))
            .andExpect(jsonPath("$.[*].prtyFk").value(hasItem(DEFAULT_PRTY_FK)))
            .andExpect(jsonPath("$.[*].frstCntryFrmt").value(hasItem(DEFAULT_FRST_CNTRY_FRMT)))
            .andExpect(jsonPath("$.[*].frstContinent").value(hasItem(DEFAULT_FRST_CONTINENT)))
            .andExpect(jsonPath("$.[*].scndCntryFrmt").value(hasItem(DEFAULT_SCND_CNTRY_FRMT)))
            .andExpect(jsonPath("$.[*].scndContinent").value(hasItem(DEFAULT_SCND_CONTINENT)))
            .andExpect(jsonPath("$.[*].thrdCntryFrmt").value(hasItem(DEFAULT_THRD_CNTRY_FRMT)))
            .andExpect(jsonPath("$.[*].thrdContinent").value(hasItem(DEFAULT_THRD_CONTINENT)))
            .andExpect(jsonPath("$.[*].frthCntryFrmt").value(hasItem(DEFAULT_FRTH_CNTRY_FRMT)))
            .andExpect(jsonPath("$.[*].frthContinent").value(hasItem(DEFAULT_FRTH_CONTINENT)))
            .andExpect(jsonPath("$.[*].techLineage").value(hasItem(DEFAULT_TECH_LINEAGE)))
            .andExpect(jsonPath("$.[*].techCreatedDate").value(hasItem(DEFAULT_TECH_CREATED_DATE.toString())))
            .andExpect(jsonPath("$.[*].techUpdatedDate").value(hasItem(DEFAULT_TECH_UPDATED_DATE.toString())))
            .andExpect(jsonPath("$.[*].techMapping").value(hasItem(DEFAULT_TECH_MAPPING)))
            .andExpect(jsonPath("$.[*].techComment").value(hasItem(DEFAULT_TECH_COMMENT)));
    }

    @Test
    @Transactional
    void getDmClientMdmAddrCntry() throws Exception {
        // Initialize the database
        dmClientMdmAddrCntryRepository.saveAndFlush(dmClientMdmAddrCntry);

        // Get the dmClientMdmAddrCntry
        restDmClientMdmAddrCntryMockMvc
            .perform(get(ENTITY_API_URL_ID, dmClientMdmAddrCntry.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.id").value(dmClientMdmAddrCntry.getId().intValue()))
            .andExpect(jsonPath("$.prtyFk").value(DEFAULT_PRTY_FK))
            .andExpect(jsonPath("$.frstCntryFrmt").value(DEFAULT_FRST_CNTRY_FRMT))
            .andExpect(jsonPath("$.frstContinent").value(DEFAULT_FRST_CONTINENT))
            .andExpect(jsonPath("$.scndCntryFrmt").value(DEFAULT_SCND_CNTRY_FRMT))
            .andExpect(jsonPath("$.scndContinent").value(DEFAULT_SCND_CONTINENT))
            .andExpect(jsonPath("$.thrdCntryFrmt").value(DEFAULT_THRD_CNTRY_FRMT))
            .andExpect(jsonPath("$.thrdContinent").value(DEFAULT_THRD_CONTINENT))
            .andExpect(jsonPath("$.frthCntryFrmt").value(DEFAULT_FRTH_CNTRY_FRMT))
            .andExpect(jsonPath("$.frthContinent").value(DEFAULT_FRTH_CONTINENT))
            .andExpect(jsonPath("$.techLineage").value(DEFAULT_TECH_LINEAGE))
            .andExpect(jsonPath("$.techCreatedDate").value(DEFAULT_TECH_CREATED_DATE.toString()))
            .andExpect(jsonPath("$.techUpdatedDate").value(DEFAULT_TECH_UPDATED_DATE.toString()))
            .andExpect(jsonPath("$.techMapping").value(DEFAULT_TECH_MAPPING))
            .andExpect(jsonPath("$.techComment").value(DEFAULT_TECH_COMMENT));
    }

    @Test
    @Transactional
    void getNonExistingDmClientMdmAddrCntry() throws Exception {
        // Get the dmClientMdmAddrCntry
        restDmClientMdmAddrCntryMockMvc.perform(get(ENTITY_API_URL_ID, Long.MAX_VALUE)).andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    void putExistingDmClientMdmAddrCntry() throws Exception {
        // Initialize the database
        dmClientMdmAddrCntryRepository.saveAndFlush(dmClientMdmAddrCntry);

        long databaseSizeBeforeUpdate = getRepositoryCount();

        // Update the dmClientMdmAddrCntry
        DmClientMdmAddrCntry updatedDmClientMdmAddrCntry = dmClientMdmAddrCntryRepository
            .findById(dmClientMdmAddrCntry.getId())
            .orElseThrow();
        // Disconnect from session so that the updates on updatedDmClientMdmAddrCntry are not directly saved in db
        em.detach(updatedDmClientMdmAddrCntry);
        updatedDmClientMdmAddrCntry
            .prtyFk(UPDATED_PRTY_FK)
            .frstCntryFrmt(UPDATED_FRST_CNTRY_FRMT)
            .frstContinent(UPDATED_FRST_CONTINENT)
            .scndCntryFrmt(UPDATED_SCND_CNTRY_FRMT)
            .scndContinent(UPDATED_SCND_CONTINENT)
            .thrdCntryFrmt(UPDATED_THRD_CNTRY_FRMT)
            .thrdContinent(UPDATED_THRD_CONTINENT)
            .frthCntryFrmt(UPDATED_FRTH_CNTRY_FRMT)
            .frthContinent(UPDATED_FRTH_CONTINENT)
            .techLineage(UPDATED_TECH_LINEAGE)
            .techCreatedDate(UPDATED_TECH_CREATED_DATE)
            .techUpdatedDate(UPDATED_TECH_UPDATED_DATE)
            .techMapping(UPDATED_TECH_MAPPING)
            .techComment(UPDATED_TECH_COMMENT);
        DmClientMdmAddrCntryDTO dmClientMdmAddrCntryDTO = dmClientMdmAddrCntryMapper.toDto(updatedDmClientMdmAddrCntry);

        restDmClientMdmAddrCntryMockMvc
            .perform(
                put(ENTITY_API_URL_ID, dmClientMdmAddrCntryDTO.getId())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(om.writeValueAsBytes(dmClientMdmAddrCntryDTO))
            )
            .andExpect(status().isOk());

        // Validate the DmClientMdmAddrCntry in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
        assertPersistedDmClientMdmAddrCntryToMatchAllProperties(updatedDmClientMdmAddrCntry);
    }

    @Test
    @Transactional
    void putNonExistingDmClientMdmAddrCntry() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        dmClientMdmAddrCntry.setId(longCount.incrementAndGet());

        // Create the DmClientMdmAddrCntry
        DmClientMdmAddrCntryDTO dmClientMdmAddrCntryDTO = dmClientMdmAddrCntryMapper.toDto(dmClientMdmAddrCntry);

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restDmClientMdmAddrCntryMockMvc
            .perform(
                put(ENTITY_API_URL_ID, dmClientMdmAddrCntryDTO.getId())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(om.writeValueAsBytes(dmClientMdmAddrCntryDTO))
            )
            .andExpect(status().isBadRequest());

        // Validate the DmClientMdmAddrCntry in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void putWithIdMismatchDmClientMdmAddrCntry() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        dmClientMdmAddrCntry.setId(longCount.incrementAndGet());

        // Create the DmClientMdmAddrCntry
        DmClientMdmAddrCntryDTO dmClientMdmAddrCntryDTO = dmClientMdmAddrCntryMapper.toDto(dmClientMdmAddrCntry);

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restDmClientMdmAddrCntryMockMvc
            .perform(
                put(ENTITY_API_URL_ID, longCount.incrementAndGet())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(om.writeValueAsBytes(dmClientMdmAddrCntryDTO))
            )
            .andExpect(status().isBadRequest());

        // Validate the DmClientMdmAddrCntry in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void putWithMissingIdPathParamDmClientMdmAddrCntry() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        dmClientMdmAddrCntry.setId(longCount.incrementAndGet());

        // Create the DmClientMdmAddrCntry
        DmClientMdmAddrCntryDTO dmClientMdmAddrCntryDTO = dmClientMdmAddrCntryMapper.toDto(dmClientMdmAddrCntry);

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restDmClientMdmAddrCntryMockMvc
            .perform(put(ENTITY_API_URL).contentType(MediaType.APPLICATION_JSON).content(om.writeValueAsBytes(dmClientMdmAddrCntryDTO)))
            .andExpect(status().isMethodNotAllowed());

        // Validate the DmClientMdmAddrCntry in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void partialUpdateDmClientMdmAddrCntryWithPatch() throws Exception {
        // Initialize the database
        dmClientMdmAddrCntryRepository.saveAndFlush(dmClientMdmAddrCntry);

        long databaseSizeBeforeUpdate = getRepositoryCount();

        // Update the dmClientMdmAddrCntry using partial update
        DmClientMdmAddrCntry partialUpdatedDmClientMdmAddrCntry = new DmClientMdmAddrCntry();
        partialUpdatedDmClientMdmAddrCntry.setId(dmClientMdmAddrCntry.getId());

        partialUpdatedDmClientMdmAddrCntry
            .prtyFk(UPDATED_PRTY_FK)
            .frstContinent(UPDATED_FRST_CONTINENT)
            .scndCntryFrmt(UPDATED_SCND_CNTRY_FRMT)
            .frthCntryFrmt(UPDATED_FRTH_CNTRY_FRMT)
            .techCreatedDate(UPDATED_TECH_CREATED_DATE)
            .techMapping(UPDATED_TECH_MAPPING)
            .techComment(UPDATED_TECH_COMMENT);

        restDmClientMdmAddrCntryMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, partialUpdatedDmClientMdmAddrCntry.getId())
                    .contentType("application/merge-patch+json")
                    .content(om.writeValueAsBytes(partialUpdatedDmClientMdmAddrCntry))
            )
            .andExpect(status().isOk());

        // Validate the DmClientMdmAddrCntry in the database

        assertSameRepositoryCount(databaseSizeBeforeUpdate);
        assertDmClientMdmAddrCntryUpdatableFieldsEquals(
            createUpdateProxyForBean(partialUpdatedDmClientMdmAddrCntry, dmClientMdmAddrCntry),
            getPersistedDmClientMdmAddrCntry(dmClientMdmAddrCntry)
        );
    }

    @Test
    @Transactional
    void fullUpdateDmClientMdmAddrCntryWithPatch() throws Exception {
        // Initialize the database
        dmClientMdmAddrCntryRepository.saveAndFlush(dmClientMdmAddrCntry);

        long databaseSizeBeforeUpdate = getRepositoryCount();

        // Update the dmClientMdmAddrCntry using partial update
        DmClientMdmAddrCntry partialUpdatedDmClientMdmAddrCntry = new DmClientMdmAddrCntry();
        partialUpdatedDmClientMdmAddrCntry.setId(dmClientMdmAddrCntry.getId());

        partialUpdatedDmClientMdmAddrCntry
            .prtyFk(UPDATED_PRTY_FK)
            .frstCntryFrmt(UPDATED_FRST_CNTRY_FRMT)
            .frstContinent(UPDATED_FRST_CONTINENT)
            .scndCntryFrmt(UPDATED_SCND_CNTRY_FRMT)
            .scndContinent(UPDATED_SCND_CONTINENT)
            .thrdCntryFrmt(UPDATED_THRD_CNTRY_FRMT)
            .thrdContinent(UPDATED_THRD_CONTINENT)
            .frthCntryFrmt(UPDATED_FRTH_CNTRY_FRMT)
            .frthContinent(UPDATED_FRTH_CONTINENT)
            .techLineage(UPDATED_TECH_LINEAGE)
            .techCreatedDate(UPDATED_TECH_CREATED_DATE)
            .techUpdatedDate(UPDATED_TECH_UPDATED_DATE)
            .techMapping(UPDATED_TECH_MAPPING)
            .techComment(UPDATED_TECH_COMMENT);

        restDmClientMdmAddrCntryMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, partialUpdatedDmClientMdmAddrCntry.getId())
                    .contentType("application/merge-patch+json")
                    .content(om.writeValueAsBytes(partialUpdatedDmClientMdmAddrCntry))
            )
            .andExpect(status().isOk());

        // Validate the DmClientMdmAddrCntry in the database

        assertSameRepositoryCount(databaseSizeBeforeUpdate);
        assertDmClientMdmAddrCntryUpdatableFieldsEquals(
            partialUpdatedDmClientMdmAddrCntry,
            getPersistedDmClientMdmAddrCntry(partialUpdatedDmClientMdmAddrCntry)
        );
    }

    @Test
    @Transactional
    void patchNonExistingDmClientMdmAddrCntry() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        dmClientMdmAddrCntry.setId(longCount.incrementAndGet());

        // Create the DmClientMdmAddrCntry
        DmClientMdmAddrCntryDTO dmClientMdmAddrCntryDTO = dmClientMdmAddrCntryMapper.toDto(dmClientMdmAddrCntry);

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restDmClientMdmAddrCntryMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, dmClientMdmAddrCntryDTO.getId())
                    .contentType("application/merge-patch+json")
                    .content(om.writeValueAsBytes(dmClientMdmAddrCntryDTO))
            )
            .andExpect(status().isBadRequest());

        // Validate the DmClientMdmAddrCntry in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void patchWithIdMismatchDmClientMdmAddrCntry() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        dmClientMdmAddrCntry.setId(longCount.incrementAndGet());

        // Create the DmClientMdmAddrCntry
        DmClientMdmAddrCntryDTO dmClientMdmAddrCntryDTO = dmClientMdmAddrCntryMapper.toDto(dmClientMdmAddrCntry);

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restDmClientMdmAddrCntryMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, longCount.incrementAndGet())
                    .contentType("application/merge-patch+json")
                    .content(om.writeValueAsBytes(dmClientMdmAddrCntryDTO))
            )
            .andExpect(status().isBadRequest());

        // Validate the DmClientMdmAddrCntry in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void patchWithMissingIdPathParamDmClientMdmAddrCntry() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        dmClientMdmAddrCntry.setId(longCount.incrementAndGet());

        // Create the DmClientMdmAddrCntry
        DmClientMdmAddrCntryDTO dmClientMdmAddrCntryDTO = dmClientMdmAddrCntryMapper.toDto(dmClientMdmAddrCntry);

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restDmClientMdmAddrCntryMockMvc
            .perform(
                patch(ENTITY_API_URL).contentType("application/merge-patch+json").content(om.writeValueAsBytes(dmClientMdmAddrCntryDTO))
            )
            .andExpect(status().isMethodNotAllowed());

        // Validate the DmClientMdmAddrCntry in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void deleteDmClientMdmAddrCntry() throws Exception {
        // Initialize the database
        dmClientMdmAddrCntryRepository.saveAndFlush(dmClientMdmAddrCntry);

        long databaseSizeBeforeDelete = getRepositoryCount();

        // Delete the dmClientMdmAddrCntry
        restDmClientMdmAddrCntryMockMvc
            .perform(delete(ENTITY_API_URL_ID, dmClientMdmAddrCntry.getId()).accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        assertDecrementedRepositoryCount(databaseSizeBeforeDelete);
    }

    protected long getRepositoryCount() {
        return dmClientMdmAddrCntryRepository.count();
    }

    protected void assertIncrementedRepositoryCount(long countBefore) {
        assertThat(countBefore + 1).isEqualTo(getRepositoryCount());
    }

    protected void assertDecrementedRepositoryCount(long countBefore) {
        assertThat(countBefore - 1).isEqualTo(getRepositoryCount());
    }

    protected void assertSameRepositoryCount(long countBefore) {
        assertThat(countBefore).isEqualTo(getRepositoryCount());
    }

    protected DmClientMdmAddrCntry getPersistedDmClientMdmAddrCntry(DmClientMdmAddrCntry dmClientMdmAddrCntry) {
        return dmClientMdmAddrCntryRepository.findById(dmClientMdmAddrCntry.getId()).orElseThrow();
    }

    protected void assertPersistedDmClientMdmAddrCntryToMatchAllProperties(DmClientMdmAddrCntry expectedDmClientMdmAddrCntry) {
        assertDmClientMdmAddrCntryAllPropertiesEquals(
            expectedDmClientMdmAddrCntry,
            getPersistedDmClientMdmAddrCntry(expectedDmClientMdmAddrCntry)
        );
    }

    protected void assertPersistedDmClientMdmAddrCntryToMatchUpdatableProperties(DmClientMdmAddrCntry expectedDmClientMdmAddrCntry) {
        assertDmClientMdmAddrCntryAllUpdatablePropertiesEquals(
            expectedDmClientMdmAddrCntry,
            getPersistedDmClientMdmAddrCntry(expectedDmClientMdmAddrCntry)
        );
    }
}
