package com.mycompany.myapp.web.rest;

import static com.mycompany.myapp.domain.FtOResvAsserts.*;
import static com.mycompany.myapp.web.rest.TestUtil.createUpdateProxyForBean;
import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.mycompany.myapp.IntegrationTest;
import com.mycompany.myapp.domain.FtOResv;
import com.mycompany.myapp.repository.FtOResvRepository;
import com.mycompany.myapp.service.dto.FtOResvDTO;
import com.mycompany.myapp.service.mapper.FtOResvMapper;
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
 * Integration tests for the {@link FtOResvResource} REST controller.
 */
@IntegrationTest
@AutoConfigureMockMvc
@WithMockUser
class FtOResvResourceIT {

    private static final Integer DEFAULT_NUM_LIGNE = 1;
    private static final Integer UPDATED_NUM_LIGNE = 2;

    private static final String DEFAULT_RESORT = "AAAAAAAAAA";
    private static final String UPDATED_RESORT = "BBBBBBBBBB";

    private static final Integer DEFAULT_RESV_NAME_ID = 1;
    private static final Integer UPDATED_RESV_NAME_ID = 2;

    private static final String DEFAULT_CLIENT_O_ID = "AAAAAAAAAA";
    private static final String UPDATED_CLIENT_O_ID = "BBBBBBBBBB";

    private static final String DEFAULT_TYPE_CHB = "AAAAAAAAAA";
    private static final String UPDATED_TYPE_CHB = "BBBBBBBBBB";

    private static final LocalDate DEFAULT_BUSINESS_DATE = LocalDate.ofEpochDay(0L);
    private static final LocalDate UPDATED_BUSINESS_DATE = LocalDate.now(ZoneId.systemDefault());

    private static final Integer DEFAULT_NUM_ORDRE = 1;
    private static final Integer UPDATED_NUM_ORDRE = 2;

    private static final String DEFAULT_CONFIRMATION_NO = "AAAAAAAAAA";
    private static final String UPDATED_CONFIRMATION_NO = "BBBBBBBBBB";

    private static final String DEFAULT_CLIENT_MDM_ID = "AAAAAAAAAA";
    private static final String UPDATED_CLIENT_MDM_ID = "BBBBBBBBBB";

    private static final Integer DEFAULT_NAME_ID = 1;
    private static final Integer UPDATED_NAME_ID = 2;

    private static final Integer DEFAULT_NAME_ID_LIGNE = 1;
    private static final Integer UPDATED_NAME_ID_LIGNE = 2;

    private static final Integer DEFAULT_CONTACT_ID = 1;
    private static final Integer UPDATED_CONTACT_ID = 2;

    private static final Integer DEFAULT_AGENCE_ID = 1;
    private static final Integer UPDATED_AGENCE_ID = 2;

    private static final String DEFAULT_AGENCE_NOM = "AAAAAAAAAA";
    private static final String UPDATED_AGENCE_NOM = "BBBBBBBBBB";

    private static final Integer DEFAULT_SOCIETE_ID = 1;
    private static final Integer UPDATED_SOCIETE_ID = 2;

    private static final Integer DEFAULT_GROUPE_ID = 1;
    private static final Integer UPDATED_GROUPE_ID = 2;

    private static final Integer DEFAULT_MEMBRE_ID = 1;
    private static final Integer UPDATED_MEMBRE_ID = 2;

    private static final Integer DEFAULT_SOURCE_PROFILE_ID = 1;
    private static final Integer UPDATED_SOURCE_PROFILE_ID = 2;

    private static final Integer DEFAULT_NUM_BLOC = 1;
    private static final Integer UPDATED_NUM_BLOC = 2;

    private static final String DEFAULT_STATUT_RESV = "AAAAAAAAAA";
    private static final String UPDATED_STATUT_RESV = "BBBBBBBBBB";

    private static final String DEFAULT_STATUT_VIP = "AAAAAAAAAA";
    private static final String UPDATED_STATUT_VIP = "BBBBBBBBBB";

    private static final LocalDate DEFAULT_DATE_DEBUT_LIGNE = LocalDate.ofEpochDay(0L);
    private static final LocalDate UPDATED_DATE_DEBUT_LIGNE = LocalDate.now(ZoneId.systemDefault());

    private static final LocalDate DEFAULT_DATE_FIN_LIGNE = LocalDate.ofEpochDay(0L);
    private static final LocalDate UPDATED_DATE_FIN_LIGNE = LocalDate.now(ZoneId.systemDefault());

    private static final LocalDate DEFAULT_DATE_FIN_ORIGINE = LocalDate.ofEpochDay(0L);
    private static final LocalDate UPDATED_DATE_FIN_ORIGINE = LocalDate.now(ZoneId.systemDefault());

    private static final LocalDate DEFAULT_DATE_ANN = LocalDate.ofEpochDay(0L);
    private static final LocalDate UPDATED_DATE_ANN = LocalDate.now(ZoneId.systemDefault());

    private static final String DEFAULT_PSEUDO_ROOM_YN = "AAAAAAAAAA";
    private static final String UPDATED_PSEUDO_ROOM_YN = "BBBBBBBBBB";

    private static final String DEFAULT_COMPLEMENTAIRE_YN = "AAAAAAAAAA";
    private static final String UPDATED_COMPLEMENTAIRE_YN = "BBBBBBBBBB";

    private static final String DEFAULT_INTERNE_YN = "AAAAAAAAAA";
    private static final String UPDATED_INTERNE_YN = "BBBBBBBBBB";

    private static final String DEFAULT_WALKIN_YN = "AAAAAAAAAA";
    private static final String UPDATED_WALKIN_YN = "BBBBBBBBBB";

    private static final Integer DEFAULT_CREATEUR_RESV = 1;
    private static final Integer UPDATED_CREATEUR_RESV = 2;

    private static final String DEFAULT_NOM_CREATEUR_RESV = "AAAAAAAAAA";
    private static final String UPDATED_NOM_CREATEUR_RESV = "BBBBBBBBBB";

    private static final String DEFAULT_CODE_PAYS = "AAAAAAAAAA";
    private static final String UPDATED_CODE_PAYS = "BBBBBBBBBB";

    private static final String DEFAULT_LIB_PAYS = "AAAAAAAAAA";
    private static final String UPDATED_LIB_PAYS = "BBBBBBBBBB";

    private static final String DEFAULT_CODE_NATIONALITE = "AAAAAAAAAA";
    private static final String UPDATED_CODE_NATIONALITE = "BBBBBBBBBB";

    private static final String DEFAULT_LIB_NATIONALITE = "AAAAAAAAAA";
    private static final String UPDATED_LIB_NATIONALITE = "BBBBBBBBBB";

    private static final String DEFAULT_CODE_SOURCE = "AAAAAAAAAA";
    private static final String UPDATED_CODE_SOURCE = "BBBBBBBBBB";

    private static final String DEFAULT_LIB_SOURCE = "AAAAAAAAAA";
    private static final String UPDATED_LIB_SOURCE = "BBBBBBBBBB";

    private static final String DEFAULT_CODE_GRAND_SOURCE = "AAAAAAAAAA";
    private static final String UPDATED_CODE_GRAND_SOURCE = "BBBBBBBBBB";

    private static final String DEFAULT_CODE_ORIGINE = "AAAAAAAAAA";
    private static final String UPDATED_CODE_ORIGINE = "BBBBBBBBBB";

    private static final String DEFAULT_LIB_ORIGINE = "AAAAAAAAAA";
    private static final String UPDATED_LIB_ORIGINE = "BBBBBBBBBB";

    private static final String DEFAULT_CODE_MARCHE = "AAAAAAAAAA";
    private static final String UPDATED_CODE_MARCHE = "BBBBBBBBBB";

    private static final String DEFAULT_LIB_MARCHE = "AAAAAAAAAA";
    private static final String UPDATED_LIB_MARCHE = "BBBBBBBBBB";

    private static final String DEFAULT_CODE_GRAND_MARCHE = "AAAAAAAAAA";
    private static final String UPDATED_CODE_GRAND_MARCHE = "BBBBBBBBBB";

    private static final String DEFAULT_LIB_GRAND_MARCHE = "AAAAAAAAAA";
    private static final String UPDATED_LIB_GRAND_MARCHE = "BBBBBBBBBB";

    private static final String DEFAULT_CODE_PRIX = "AAAAAAAAAA";
    private static final String UPDATED_CODE_PRIX = "BBBBBBBBBB";

    private static final String DEFAULT_CATEG_PRIX = "AAAAAAAAAA";
    private static final String UPDATED_CATEG_PRIX = "BBBBBBBBBB";

    private static final String DEFAULT_LIB_PRIX = "AAAAAAAAAA";
    private static final String UPDATED_LIB_PRIX = "BBBBBBBBBB";

    private static final String DEFAULT_NUM_CHB = "AAAAAAAAAA";
    private static final String UPDATED_NUM_CHB = "BBBBBBBBBB";

    private static final String DEFAULT_TYPE_CHB_LIGNE = "AAAAAAAAAA";
    private static final String UPDATED_TYPE_CHB_LIGNE = "BBBBBBBBBB";

    private static final String DEFAULT_DESCRIPTION_TYPE_CHB = "AAAAAAAAAA";
    private static final String UPDATED_DESCRIPTION_TYPE_CHB = "BBBBBBBBBB";

    private static final String DEFAULT_CODE_TYPE_CHB = "AAAAAAAAAA";
    private static final String UPDATED_CODE_TYPE_CHB = "BBBBBBBBBB";

    private static final String DEFAULT_CLASS_CHB = "AAAAAAAAAA";
    private static final String UPDATED_CLASS_CHB = "BBBBBBBBBB";

    private static final String DEFAULT_STATUT_CHB_RESV = "AAAAAAAAAA";
    private static final String UPDATED_STATUT_CHB_RESV = "BBBBBBBBBB";

    private static final String DEFAULT_TYPE_CHB_DE_RESERVATION = "AAAAAAAAAA";
    private static final String UPDATED_TYPE_CHB_DE_RESERVATION = "BBBBBBBBBB";

    private static final String DEFAULT_DESCRIPTION_TYPE_CHB_DE_RESV = "AAAAAAAAAA";
    private static final String UPDATED_DESCRIPTION_TYPE_CHB_DE_RESV = "BBBBBBBBBB";

    private static final String DEFAULT_CODE_TYPE_CHB_DE_RESV = "AAAAAAAAAA";
    private static final String UPDATED_CODE_TYPE_CHB_DE_RESV = "BBBBBBBBBB";

    private static final String DEFAULT_CIRCUIT_DISTRIBUTION = "AAAAAAAAAA";
    private static final String UPDATED_CIRCUIT_DISTRIBUTION = "BBBBBBBBBB";

    private static final String DEFAULT_CIRCUIT_DISTRIB_USER_REGROUP = "AAAAAAAAAA";
    private static final String UPDATED_CIRCUIT_DISTRIB_USER_REGROUP = "BBBBBBBBBB";

    private static final Integer DEFAULT_NB_RESV_ANN = 1;
    private static final Integer UPDATED_NB_RESV_ANN = 2;

    private static final Integer DEFAULT_NB_NUITEE = 1;
    private static final Integer UPDATED_NB_NUITEE = 2;

    private static final Integer DEFAULT_NB_NUITEE_NN_DED = 1;
    private static final Integer UPDATED_NB_NUITEE_NN_DED = 2;

    private static final Integer DEFAULT_NB_NUITEE_GLOBAL = 1;
    private static final Integer UPDATED_NB_NUITEE_GLOBAL = 2;

    private static final Integer DEFAULT_NB_OCCUPATION_MULTIPLE = 1;
    private static final Integer UPDATED_NB_OCCUPATION_MULTIPLE = 2;

    private static final Integer DEFAULT_NB_ADU_GLOBAL = 1;
    private static final Integer UPDATED_NB_ADU_GLOBAL = 2;

    private static final Integer DEFAULT_NB_ENF_GLOBAL = 1;
    private static final Integer UPDATED_NB_ENF_GLOBAL = 2;

    private static final Integer DEFAULT_NB_PERS_DAY_U_GLOBAL = 1;
    private static final Integer UPDATED_NB_PERS_DAY_U_GLOBAL = 2;

    private static final Integer DEFAULT_NB_PERS_ARR_GLOBAL = 1;
    private static final Integer UPDATED_NB_PERS_ARR_GLOBAL = 2;

    private static final Integer DEFAULT_NB_PERS_DEP_GLOBAL = 1;
    private static final Integer UPDATED_NB_PERS_DEP_GLOBAL = 2;

    private static final Integer DEFAULT_NB_PERS_ANN = 1;
    private static final Integer UPDATED_NB_PERS_ANN = 2;

    private static final Integer DEFAULT_NB_PERS_NOSHOW = 1;
    private static final Integer UPDATED_NB_PERS_NOSHOW = 2;

    private static final Integer DEFAULT_NB_CHB_DAY_U_GLOBAL = 1;
    private static final Integer UPDATED_NB_CHB_DAY_U_GLOBAL = 2;

    private static final Integer DEFAULT_NB_CHB_ARR_GLOBAL = 1;
    private static final Integer UPDATED_NB_CHB_ARR_GLOBAL = 2;

    private static final Integer DEFAULT_NB_CHB_DEP_GLOBAL = 1;
    private static final Integer UPDATED_NB_CHB_DEP_GLOBAL = 2;

    private static final Integer DEFAULT_NB_CHB_ANN = 1;
    private static final Integer UPDATED_NB_CHB_ANN = 2;

    private static final Integer DEFAULT_NB_CHB_NOSHOW = 1;
    private static final Integer UPDATED_NB_CHB_NOSHOW = 2;

    private static final Long DEFAULT_REVENU_NET_CHAMBRE_GLOBAL = 1L;
    private static final Long UPDATED_REVENU_NET_CHAMBRE_GLOBAL = 2L;

    private static final Long DEFAULT_REVENU_TAXE_CHAMBRE_GLOBAL = 1L;
    private static final Long UPDATED_REVENU_TAXE_CHAMBRE_GLOBAL = 2L;

    private static final Long DEFAULT_REVENU_NET_BQ_GLOBAL = 1L;
    private static final Long UPDATED_REVENU_NET_BQ_GLOBAL = 2L;

    private static final Long DEFAULT_REVENU_TAXE_BQ_GLOBAL = 1L;
    private static final Long UPDATED_REVENU_TAXE_BQ_GLOBAL = 2L;

    private static final Long DEFAULT_REVENU_NET_EXTRA_GLOBAL = 1L;
    private static final Long UPDATED_REVENU_NET_EXTRA_GLOBAL = 2L;

    private static final Long DEFAULT_REVENU_TAXE_EXTRA_GLOBAL = 1L;
    private static final Long UPDATED_REVENU_TAXE_EXTRA_GLOBAL = 2L;

    private static final Long DEFAULT_REVENU_NET_TOTAL_GLOBAL = 1L;
    private static final Long UPDATED_REVENU_NET_TOTAL_GLOBAL = 2L;

    private static final Long DEFAULT_REVENU_TAXE_TOTAL_GLOBAL = 1L;
    private static final Long UPDATED_REVENU_TAXE_TOTAL_GLOBAL = 2L;

    private static final Long DEFAULT_PROD_REVENU_CHAMBRE = 1L;
    private static final Long UPDATED_PROD_REVENU_CHAMBRE = 2L;

    private static final Long DEFAULT_PROD_REVENU_BQ = 1L;
    private static final Long UPDATED_PROD_REVENU_BQ = 2L;

    private static final Long DEFAULT_PROD_REVENU_EXTRA = 1L;
    private static final Long UPDATED_PROD_REVENU_EXTRA = 2L;

    private static final Long DEFAULT_PROD_REVENU_TOTAL = 1L;
    private static final Long UPDATED_PROD_REVENU_TOTAL = 2L;

    private static final Long DEFAULT_PROD_CHAMBRE_NB_NUITEES = 1L;
    private static final Long UPDATED_PROD_CHAMBRE_NB_NUITEES = 2L;

    private static final String DEFAULT_DATES_SEJOUR_RENS_YN = "AAAAAAAAAA";
    private static final String UPDATED_DATES_SEJOUR_RENS_YN = "BBBBBBBBBB";

    private static final String DEFAULT_TECH_EVENT_TYPE = "AAAAAAAAAA";
    private static final String UPDATED_TECH_EVENT_TYPE = "BBBBBBBBBB";

    private static final String DEFAULT_TECH_RESV_INV_TYPE = "AAAAAAAAAA";
    private static final String UPDATED_TECH_RESV_INV_TYPE = "BBBBBBBBBB";

    private static final String DEFAULT_TECH_ORIGINE = "AAAAAAAAAA";
    private static final String UPDATED_TECH_ORIGINE = "BBBBBBBBBB";

    private static final Integer DEFAULT_TECH_GRP_NUM_ORDRE = 1;
    private static final Integer UPDATED_TECH_GRP_NUM_ORDRE = 2;

    private static final LocalDate DEFAULT_TECH_CREATE_DATE = LocalDate.ofEpochDay(0L);
    private static final LocalDate UPDATED_TECH_CREATE_DATE = LocalDate.now(ZoneId.systemDefault());

    private static final LocalDate DEFAULT_TECH_UPDATE_DATE = LocalDate.ofEpochDay(0L);
    private static final LocalDate UPDATED_TECH_UPDATE_DATE = LocalDate.now(ZoneId.systemDefault());

    private static final Integer DEFAULT_RESV_NAME_ID_PRINCIPAL = 1;
    private static final Integer UPDATED_RESV_NAME_ID_PRINCIPAL = 2;

    private static final String ENTITY_API_URL = "/api/ft-o-resvs";
    private static final String ENTITY_API_URL_ID = ENTITY_API_URL + "/{id}";

    private static Random random = new Random();
    private static AtomicLong longCount = new AtomicLong(random.nextInt() + (2 * Integer.MAX_VALUE));

    @Autowired
    private ObjectMapper om;

    @Autowired
    private FtOResvRepository ftOResvRepository;

    @Autowired
    private FtOResvMapper ftOResvMapper;

    @Autowired
    private EntityManager em;

    @Autowired
    private MockMvc restFtOResvMockMvc;

    private FtOResv ftOResv;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static FtOResv createEntity(EntityManager em) {
        FtOResv ftOResv = new FtOResv()
            .numLigne(DEFAULT_NUM_LIGNE)
            .resort(DEFAULT_RESORT)
            .resvNameId(DEFAULT_RESV_NAME_ID)
            .clientOId(DEFAULT_CLIENT_O_ID)
            .typeChb(DEFAULT_TYPE_CHB)
            .businessDate(DEFAULT_BUSINESS_DATE)
            .numOrdre(DEFAULT_NUM_ORDRE)
            .confirmationNo(DEFAULT_CONFIRMATION_NO)
            .clientMdmId(DEFAULT_CLIENT_MDM_ID)
            .nameId(DEFAULT_NAME_ID)
            .nameIdLigne(DEFAULT_NAME_ID_LIGNE)
            .contactId(DEFAULT_CONTACT_ID)
            .agenceId(DEFAULT_AGENCE_ID)
            .agenceNom(DEFAULT_AGENCE_NOM)
            .societeId(DEFAULT_SOCIETE_ID)
            .groupeId(DEFAULT_GROUPE_ID)
            .membreId(DEFAULT_MEMBRE_ID)
            .sourceProfileId(DEFAULT_SOURCE_PROFILE_ID)
            .numBloc(DEFAULT_NUM_BLOC)
            .statutResv(DEFAULT_STATUT_RESV)
            .statutVip(DEFAULT_STATUT_VIP)
            .dateDebutLigne(DEFAULT_DATE_DEBUT_LIGNE)
            .dateFinLigne(DEFAULT_DATE_FIN_LIGNE)
            .dateFinOrigine(DEFAULT_DATE_FIN_ORIGINE)
            .dateAnn(DEFAULT_DATE_ANN)
            .pseudoRoomYn(DEFAULT_PSEUDO_ROOM_YN)
            .complementaireYn(DEFAULT_COMPLEMENTAIRE_YN)
            .interneYn(DEFAULT_INTERNE_YN)
            .walkinYn(DEFAULT_WALKIN_YN)
            .createurResv(DEFAULT_CREATEUR_RESV)
            .nomCreateurResv(DEFAULT_NOM_CREATEUR_RESV)
            .codePays(DEFAULT_CODE_PAYS)
            .libPays(DEFAULT_LIB_PAYS)
            .codeNationalite(DEFAULT_CODE_NATIONALITE)
            .libNationalite(DEFAULT_LIB_NATIONALITE)
            .codeSource(DEFAULT_CODE_SOURCE)
            .libSource(DEFAULT_LIB_SOURCE)
            .codeGrandSource(DEFAULT_CODE_GRAND_SOURCE)
            .codeOrigine(DEFAULT_CODE_ORIGINE)
            .libOrigine(DEFAULT_LIB_ORIGINE)
            .codeMarche(DEFAULT_CODE_MARCHE)
            .libMarche(DEFAULT_LIB_MARCHE)
            .codeGrandMarche(DEFAULT_CODE_GRAND_MARCHE)
            .libGrandMarche(DEFAULT_LIB_GRAND_MARCHE)
            .codePrix(DEFAULT_CODE_PRIX)
            .categPrix(DEFAULT_CATEG_PRIX)
            .libPrix(DEFAULT_LIB_PRIX)
            .numChb(DEFAULT_NUM_CHB)
            .typeChbLigne(DEFAULT_TYPE_CHB_LIGNE)
            .descriptionTypeChb(DEFAULT_DESCRIPTION_TYPE_CHB)
            .codeTypeChb(DEFAULT_CODE_TYPE_CHB)
            .classChb(DEFAULT_CLASS_CHB)
            .statutChbResv(DEFAULT_STATUT_CHB_RESV)
            .typeChbDeReservation(DEFAULT_TYPE_CHB_DE_RESERVATION)
            .descriptionTypeChbDeResv(DEFAULT_DESCRIPTION_TYPE_CHB_DE_RESV)
            .codeTypeChbDeResv(DEFAULT_CODE_TYPE_CHB_DE_RESV)
            .circuitDistribution(DEFAULT_CIRCUIT_DISTRIBUTION)
            .circuitDistribUserRegroup(DEFAULT_CIRCUIT_DISTRIB_USER_REGROUP)
            .nbResvAnn(DEFAULT_NB_RESV_ANN)
            .nbNuitee(DEFAULT_NB_NUITEE)
            .nbNuiteeNnDed(DEFAULT_NB_NUITEE_NN_DED)
            .nbNuiteeGlobal(DEFAULT_NB_NUITEE_GLOBAL)
            .nbOccupationMultiple(DEFAULT_NB_OCCUPATION_MULTIPLE)
            .nbAduGlobal(DEFAULT_NB_ADU_GLOBAL)
            .nbEnfGlobal(DEFAULT_NB_ENF_GLOBAL)
            .nbPersDayUGlobal(DEFAULT_NB_PERS_DAY_U_GLOBAL)
            .nbPersArrGlobal(DEFAULT_NB_PERS_ARR_GLOBAL)
            .nbPersDepGlobal(DEFAULT_NB_PERS_DEP_GLOBAL)
            .nbPersAnn(DEFAULT_NB_PERS_ANN)
            .nbPersNoshow(DEFAULT_NB_PERS_NOSHOW)
            .nbChbDayUGlobal(DEFAULT_NB_CHB_DAY_U_GLOBAL)
            .nbChbArrGlobal(DEFAULT_NB_CHB_ARR_GLOBAL)
            .nbChbDepGlobal(DEFAULT_NB_CHB_DEP_GLOBAL)
            .nbChbAnn(DEFAULT_NB_CHB_ANN)
            .nbChbNoshow(DEFAULT_NB_CHB_NOSHOW)
            .revenuNetChambreGlobal(DEFAULT_REVENU_NET_CHAMBRE_GLOBAL)
            .revenuTaxeChambreGlobal(DEFAULT_REVENU_TAXE_CHAMBRE_GLOBAL)
            .revenuNetBqGlobal(DEFAULT_REVENU_NET_BQ_GLOBAL)
            .revenuTaxeBqGlobal(DEFAULT_REVENU_TAXE_BQ_GLOBAL)
            .revenuNetExtraGlobal(DEFAULT_REVENU_NET_EXTRA_GLOBAL)
            .revenuTaxeExtraGlobal(DEFAULT_REVENU_TAXE_EXTRA_GLOBAL)
            .revenuNetTotalGlobal(DEFAULT_REVENU_NET_TOTAL_GLOBAL)
            .revenuTaxeTotalGlobal(DEFAULT_REVENU_TAXE_TOTAL_GLOBAL)
            .prodRevenuChambre(DEFAULT_PROD_REVENU_CHAMBRE)
            .prodRevenuBq(DEFAULT_PROD_REVENU_BQ)
            .prodRevenuExtra(DEFAULT_PROD_REVENU_EXTRA)
            .prodRevenuTotal(DEFAULT_PROD_REVENU_TOTAL)
            .prodChambreNbNuitees(DEFAULT_PROD_CHAMBRE_NB_NUITEES)
            .datesSejourRensYn(DEFAULT_DATES_SEJOUR_RENS_YN)
            .techEventType(DEFAULT_TECH_EVENT_TYPE)
            .techResvInvType(DEFAULT_TECH_RESV_INV_TYPE)
            .techOrigine(DEFAULT_TECH_ORIGINE)
            .techGrpNumOrdre(DEFAULT_TECH_GRP_NUM_ORDRE)
            .techCreateDate(DEFAULT_TECH_CREATE_DATE)
            .techUpdateDate(DEFAULT_TECH_UPDATE_DATE)
            .resvNameIdPrincipal(DEFAULT_RESV_NAME_ID_PRINCIPAL);
        return ftOResv;
    }

    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static FtOResv createUpdatedEntity(EntityManager em) {
        FtOResv ftOResv = new FtOResv()
            .numLigne(UPDATED_NUM_LIGNE)
            .resort(UPDATED_RESORT)
            .resvNameId(UPDATED_RESV_NAME_ID)
            .clientOId(UPDATED_CLIENT_O_ID)
            .typeChb(UPDATED_TYPE_CHB)
            .businessDate(UPDATED_BUSINESS_DATE)
            .numOrdre(UPDATED_NUM_ORDRE)
            .confirmationNo(UPDATED_CONFIRMATION_NO)
            .clientMdmId(UPDATED_CLIENT_MDM_ID)
            .nameId(UPDATED_NAME_ID)
            .nameIdLigne(UPDATED_NAME_ID_LIGNE)
            .contactId(UPDATED_CONTACT_ID)
            .agenceId(UPDATED_AGENCE_ID)
            .agenceNom(UPDATED_AGENCE_NOM)
            .societeId(UPDATED_SOCIETE_ID)
            .groupeId(UPDATED_GROUPE_ID)
            .membreId(UPDATED_MEMBRE_ID)
            .sourceProfileId(UPDATED_SOURCE_PROFILE_ID)
            .numBloc(UPDATED_NUM_BLOC)
            .statutResv(UPDATED_STATUT_RESV)
            .statutVip(UPDATED_STATUT_VIP)
            .dateDebutLigne(UPDATED_DATE_DEBUT_LIGNE)
            .dateFinLigne(UPDATED_DATE_FIN_LIGNE)
            .dateFinOrigine(UPDATED_DATE_FIN_ORIGINE)
            .dateAnn(UPDATED_DATE_ANN)
            .pseudoRoomYn(UPDATED_PSEUDO_ROOM_YN)
            .complementaireYn(UPDATED_COMPLEMENTAIRE_YN)
            .interneYn(UPDATED_INTERNE_YN)
            .walkinYn(UPDATED_WALKIN_YN)
            .createurResv(UPDATED_CREATEUR_RESV)
            .nomCreateurResv(UPDATED_NOM_CREATEUR_RESV)
            .codePays(UPDATED_CODE_PAYS)
            .libPays(UPDATED_LIB_PAYS)
            .codeNationalite(UPDATED_CODE_NATIONALITE)
            .libNationalite(UPDATED_LIB_NATIONALITE)
            .codeSource(UPDATED_CODE_SOURCE)
            .libSource(UPDATED_LIB_SOURCE)
            .codeGrandSource(UPDATED_CODE_GRAND_SOURCE)
            .codeOrigine(UPDATED_CODE_ORIGINE)
            .libOrigine(UPDATED_LIB_ORIGINE)
            .codeMarche(UPDATED_CODE_MARCHE)
            .libMarche(UPDATED_LIB_MARCHE)
            .codeGrandMarche(UPDATED_CODE_GRAND_MARCHE)
            .libGrandMarche(UPDATED_LIB_GRAND_MARCHE)
            .codePrix(UPDATED_CODE_PRIX)
            .categPrix(UPDATED_CATEG_PRIX)
            .libPrix(UPDATED_LIB_PRIX)
            .numChb(UPDATED_NUM_CHB)
            .typeChbLigne(UPDATED_TYPE_CHB_LIGNE)
            .descriptionTypeChb(UPDATED_DESCRIPTION_TYPE_CHB)
            .codeTypeChb(UPDATED_CODE_TYPE_CHB)
            .classChb(UPDATED_CLASS_CHB)
            .statutChbResv(UPDATED_STATUT_CHB_RESV)
            .typeChbDeReservation(UPDATED_TYPE_CHB_DE_RESERVATION)
            .descriptionTypeChbDeResv(UPDATED_DESCRIPTION_TYPE_CHB_DE_RESV)
            .codeTypeChbDeResv(UPDATED_CODE_TYPE_CHB_DE_RESV)
            .circuitDistribution(UPDATED_CIRCUIT_DISTRIBUTION)
            .circuitDistribUserRegroup(UPDATED_CIRCUIT_DISTRIB_USER_REGROUP)
            .nbResvAnn(UPDATED_NB_RESV_ANN)
            .nbNuitee(UPDATED_NB_NUITEE)
            .nbNuiteeNnDed(UPDATED_NB_NUITEE_NN_DED)
            .nbNuiteeGlobal(UPDATED_NB_NUITEE_GLOBAL)
            .nbOccupationMultiple(UPDATED_NB_OCCUPATION_MULTIPLE)
            .nbAduGlobal(UPDATED_NB_ADU_GLOBAL)
            .nbEnfGlobal(UPDATED_NB_ENF_GLOBAL)
            .nbPersDayUGlobal(UPDATED_NB_PERS_DAY_U_GLOBAL)
            .nbPersArrGlobal(UPDATED_NB_PERS_ARR_GLOBAL)
            .nbPersDepGlobal(UPDATED_NB_PERS_DEP_GLOBAL)
            .nbPersAnn(UPDATED_NB_PERS_ANN)
            .nbPersNoshow(UPDATED_NB_PERS_NOSHOW)
            .nbChbDayUGlobal(UPDATED_NB_CHB_DAY_U_GLOBAL)
            .nbChbArrGlobal(UPDATED_NB_CHB_ARR_GLOBAL)
            .nbChbDepGlobal(UPDATED_NB_CHB_DEP_GLOBAL)
            .nbChbAnn(UPDATED_NB_CHB_ANN)
            .nbChbNoshow(UPDATED_NB_CHB_NOSHOW)
            .revenuNetChambreGlobal(UPDATED_REVENU_NET_CHAMBRE_GLOBAL)
            .revenuTaxeChambreGlobal(UPDATED_REVENU_TAXE_CHAMBRE_GLOBAL)
            .revenuNetBqGlobal(UPDATED_REVENU_NET_BQ_GLOBAL)
            .revenuTaxeBqGlobal(UPDATED_REVENU_TAXE_BQ_GLOBAL)
            .revenuNetExtraGlobal(UPDATED_REVENU_NET_EXTRA_GLOBAL)
            .revenuTaxeExtraGlobal(UPDATED_REVENU_TAXE_EXTRA_GLOBAL)
            .revenuNetTotalGlobal(UPDATED_REVENU_NET_TOTAL_GLOBAL)
            .revenuTaxeTotalGlobal(UPDATED_REVENU_TAXE_TOTAL_GLOBAL)
            .prodRevenuChambre(UPDATED_PROD_REVENU_CHAMBRE)
            .prodRevenuBq(UPDATED_PROD_REVENU_BQ)
            .prodRevenuExtra(UPDATED_PROD_REVENU_EXTRA)
            .prodRevenuTotal(UPDATED_PROD_REVENU_TOTAL)
            .prodChambreNbNuitees(UPDATED_PROD_CHAMBRE_NB_NUITEES)
            .datesSejourRensYn(UPDATED_DATES_SEJOUR_RENS_YN)
            .techEventType(UPDATED_TECH_EVENT_TYPE)
            .techResvInvType(UPDATED_TECH_RESV_INV_TYPE)
            .techOrigine(UPDATED_TECH_ORIGINE)
            .techGrpNumOrdre(UPDATED_TECH_GRP_NUM_ORDRE)
            .techCreateDate(UPDATED_TECH_CREATE_DATE)
            .techUpdateDate(UPDATED_TECH_UPDATE_DATE)
            .resvNameIdPrincipal(UPDATED_RESV_NAME_ID_PRINCIPAL);
        return ftOResv;
    }

    @BeforeEach
    public void initTest() {
        ftOResv = createEntity(em);
    }

    @Test
    @Transactional
    void createFtOResv() throws Exception {
        long databaseSizeBeforeCreate = getRepositoryCount();
        // Create the FtOResv
        FtOResvDTO ftOResvDTO = ftOResvMapper.toDto(ftOResv);
        var returnedFtOResvDTO = om.readValue(
            restFtOResvMockMvc
                .perform(post(ENTITY_API_URL).contentType(MediaType.APPLICATION_JSON).content(om.writeValueAsBytes(ftOResvDTO)))
                .andExpect(status().isCreated())
                .andReturn()
                .getResponse()
                .getContentAsString(),
            FtOResvDTO.class
        );

        // Validate the FtOResv in the database
        assertIncrementedRepositoryCount(databaseSizeBeforeCreate);
        var returnedFtOResv = ftOResvMapper.toEntity(returnedFtOResvDTO);
        assertFtOResvUpdatableFieldsEquals(returnedFtOResv, getPersistedFtOResv(returnedFtOResv));
    }

    @Test
    @Transactional
    void createFtOResvWithExistingId() throws Exception {
        // Create the FtOResv with an existing ID
        ftOResv.setId(1L);
        FtOResvDTO ftOResvDTO = ftOResvMapper.toDto(ftOResv);

        long databaseSizeBeforeCreate = getRepositoryCount();

        // An entity with an existing ID cannot be created, so this API call must fail
        restFtOResvMockMvc
            .perform(post(ENTITY_API_URL).contentType(MediaType.APPLICATION_JSON).content(om.writeValueAsBytes(ftOResvDTO)))
            .andExpect(status().isBadRequest());

        // Validate the FtOResv in the database
        assertSameRepositoryCount(databaseSizeBeforeCreate);
    }

    @Test
    @Transactional
    void getAllFtOResvs() throws Exception {
        // Initialize the database
        ftOResvRepository.saveAndFlush(ftOResv);

        // Get all the ftOResvList
        restFtOResvMockMvc
            .perform(get(ENTITY_API_URL + "?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(ftOResv.getId().intValue())))
            .andExpect(jsonPath("$.[*].numLigne").value(hasItem(DEFAULT_NUM_LIGNE)))
            .andExpect(jsonPath("$.[*].resort").value(hasItem(DEFAULT_RESORT)))
            .andExpect(jsonPath("$.[*].resvNameId").value(hasItem(DEFAULT_RESV_NAME_ID)))
            .andExpect(jsonPath("$.[*].clientOId").value(hasItem(DEFAULT_CLIENT_O_ID)))
            .andExpect(jsonPath("$.[*].typeChb").value(hasItem(DEFAULT_TYPE_CHB)))
            .andExpect(jsonPath("$.[*].businessDate").value(hasItem(DEFAULT_BUSINESS_DATE.toString())))
            .andExpect(jsonPath("$.[*].numOrdre").value(hasItem(DEFAULT_NUM_ORDRE)))
            .andExpect(jsonPath("$.[*].confirmationNo").value(hasItem(DEFAULT_CONFIRMATION_NO)))
            .andExpect(jsonPath("$.[*].clientMdmId").value(hasItem(DEFAULT_CLIENT_MDM_ID)))
            .andExpect(jsonPath("$.[*].nameId").value(hasItem(DEFAULT_NAME_ID)))
            .andExpect(jsonPath("$.[*].nameIdLigne").value(hasItem(DEFAULT_NAME_ID_LIGNE)))
            .andExpect(jsonPath("$.[*].contactId").value(hasItem(DEFAULT_CONTACT_ID)))
            .andExpect(jsonPath("$.[*].agenceId").value(hasItem(DEFAULT_AGENCE_ID)))
            .andExpect(jsonPath("$.[*].agenceNom").value(hasItem(DEFAULT_AGENCE_NOM)))
            .andExpect(jsonPath("$.[*].societeId").value(hasItem(DEFAULT_SOCIETE_ID)))
            .andExpect(jsonPath("$.[*].groupeId").value(hasItem(DEFAULT_GROUPE_ID)))
            .andExpect(jsonPath("$.[*].membreId").value(hasItem(DEFAULT_MEMBRE_ID)))
            .andExpect(jsonPath("$.[*].sourceProfileId").value(hasItem(DEFAULT_SOURCE_PROFILE_ID)))
            .andExpect(jsonPath("$.[*].numBloc").value(hasItem(DEFAULT_NUM_BLOC)))
            .andExpect(jsonPath("$.[*].statutResv").value(hasItem(DEFAULT_STATUT_RESV)))
            .andExpect(jsonPath("$.[*].statutVip").value(hasItem(DEFAULT_STATUT_VIP)))
            .andExpect(jsonPath("$.[*].dateDebutLigne").value(hasItem(DEFAULT_DATE_DEBUT_LIGNE.toString())))
            .andExpect(jsonPath("$.[*].dateFinLigne").value(hasItem(DEFAULT_DATE_FIN_LIGNE.toString())))
            .andExpect(jsonPath("$.[*].dateFinOrigine").value(hasItem(DEFAULT_DATE_FIN_ORIGINE.toString())))
            .andExpect(jsonPath("$.[*].dateAnn").value(hasItem(DEFAULT_DATE_ANN.toString())))
            .andExpect(jsonPath("$.[*].pseudoRoomYn").value(hasItem(DEFAULT_PSEUDO_ROOM_YN)))
            .andExpect(jsonPath("$.[*].complementaireYn").value(hasItem(DEFAULT_COMPLEMENTAIRE_YN)))
            .andExpect(jsonPath("$.[*].interneYn").value(hasItem(DEFAULT_INTERNE_YN)))
            .andExpect(jsonPath("$.[*].walkinYn").value(hasItem(DEFAULT_WALKIN_YN)))
            .andExpect(jsonPath("$.[*].createurResv").value(hasItem(DEFAULT_CREATEUR_RESV)))
            .andExpect(jsonPath("$.[*].nomCreateurResv").value(hasItem(DEFAULT_NOM_CREATEUR_RESV)))
            .andExpect(jsonPath("$.[*].codePays").value(hasItem(DEFAULT_CODE_PAYS)))
            .andExpect(jsonPath("$.[*].libPays").value(hasItem(DEFAULT_LIB_PAYS)))
            .andExpect(jsonPath("$.[*].codeNationalite").value(hasItem(DEFAULT_CODE_NATIONALITE)))
            .andExpect(jsonPath("$.[*].libNationalite").value(hasItem(DEFAULT_LIB_NATIONALITE)))
            .andExpect(jsonPath("$.[*].codeSource").value(hasItem(DEFAULT_CODE_SOURCE)))
            .andExpect(jsonPath("$.[*].libSource").value(hasItem(DEFAULT_LIB_SOURCE)))
            .andExpect(jsonPath("$.[*].codeGrandSource").value(hasItem(DEFAULT_CODE_GRAND_SOURCE)))
            .andExpect(jsonPath("$.[*].codeOrigine").value(hasItem(DEFAULT_CODE_ORIGINE)))
            .andExpect(jsonPath("$.[*].libOrigine").value(hasItem(DEFAULT_LIB_ORIGINE)))
            .andExpect(jsonPath("$.[*].codeMarche").value(hasItem(DEFAULT_CODE_MARCHE)))
            .andExpect(jsonPath("$.[*].libMarche").value(hasItem(DEFAULT_LIB_MARCHE)))
            .andExpect(jsonPath("$.[*].codeGrandMarche").value(hasItem(DEFAULT_CODE_GRAND_MARCHE)))
            .andExpect(jsonPath("$.[*].libGrandMarche").value(hasItem(DEFAULT_LIB_GRAND_MARCHE)))
            .andExpect(jsonPath("$.[*].codePrix").value(hasItem(DEFAULT_CODE_PRIX)))
            .andExpect(jsonPath("$.[*].categPrix").value(hasItem(DEFAULT_CATEG_PRIX)))
            .andExpect(jsonPath("$.[*].libPrix").value(hasItem(DEFAULT_LIB_PRIX)))
            .andExpect(jsonPath("$.[*].numChb").value(hasItem(DEFAULT_NUM_CHB)))
            .andExpect(jsonPath("$.[*].typeChbLigne").value(hasItem(DEFAULT_TYPE_CHB_LIGNE)))
            .andExpect(jsonPath("$.[*].descriptionTypeChb").value(hasItem(DEFAULT_DESCRIPTION_TYPE_CHB)))
            .andExpect(jsonPath("$.[*].codeTypeChb").value(hasItem(DEFAULT_CODE_TYPE_CHB)))
            .andExpect(jsonPath("$.[*].classChb").value(hasItem(DEFAULT_CLASS_CHB)))
            .andExpect(jsonPath("$.[*].statutChbResv").value(hasItem(DEFAULT_STATUT_CHB_RESV)))
            .andExpect(jsonPath("$.[*].typeChbDeReservation").value(hasItem(DEFAULT_TYPE_CHB_DE_RESERVATION)))
            .andExpect(jsonPath("$.[*].descriptionTypeChbDeResv").value(hasItem(DEFAULT_DESCRIPTION_TYPE_CHB_DE_RESV)))
            .andExpect(jsonPath("$.[*].codeTypeChbDeResv").value(hasItem(DEFAULT_CODE_TYPE_CHB_DE_RESV)))
            .andExpect(jsonPath("$.[*].circuitDistribution").value(hasItem(DEFAULT_CIRCUIT_DISTRIBUTION)))
            .andExpect(jsonPath("$.[*].circuitDistribUserRegroup").value(hasItem(DEFAULT_CIRCUIT_DISTRIB_USER_REGROUP)))
            .andExpect(jsonPath("$.[*].nbResvAnn").value(hasItem(DEFAULT_NB_RESV_ANN)))
            .andExpect(jsonPath("$.[*].nbNuitee").value(hasItem(DEFAULT_NB_NUITEE)))
            .andExpect(jsonPath("$.[*].nbNuiteeNnDed").value(hasItem(DEFAULT_NB_NUITEE_NN_DED)))
            .andExpect(jsonPath("$.[*].nbNuiteeGlobal").value(hasItem(DEFAULT_NB_NUITEE_GLOBAL)))
            .andExpect(jsonPath("$.[*].nbOccupationMultiple").value(hasItem(DEFAULT_NB_OCCUPATION_MULTIPLE)))
            .andExpect(jsonPath("$.[*].nbAduGlobal").value(hasItem(DEFAULT_NB_ADU_GLOBAL)))
            .andExpect(jsonPath("$.[*].nbEnfGlobal").value(hasItem(DEFAULT_NB_ENF_GLOBAL)))
            .andExpect(jsonPath("$.[*].nbPersDayUGlobal").value(hasItem(DEFAULT_NB_PERS_DAY_U_GLOBAL)))
            .andExpect(jsonPath("$.[*].nbPersArrGlobal").value(hasItem(DEFAULT_NB_PERS_ARR_GLOBAL)))
            .andExpect(jsonPath("$.[*].nbPersDepGlobal").value(hasItem(DEFAULT_NB_PERS_DEP_GLOBAL)))
            .andExpect(jsonPath("$.[*].nbPersAnn").value(hasItem(DEFAULT_NB_PERS_ANN)))
            .andExpect(jsonPath("$.[*].nbPersNoshow").value(hasItem(DEFAULT_NB_PERS_NOSHOW)))
            .andExpect(jsonPath("$.[*].nbChbDayUGlobal").value(hasItem(DEFAULT_NB_CHB_DAY_U_GLOBAL)))
            .andExpect(jsonPath("$.[*].nbChbArrGlobal").value(hasItem(DEFAULT_NB_CHB_ARR_GLOBAL)))
            .andExpect(jsonPath("$.[*].nbChbDepGlobal").value(hasItem(DEFAULT_NB_CHB_DEP_GLOBAL)))
            .andExpect(jsonPath("$.[*].nbChbAnn").value(hasItem(DEFAULT_NB_CHB_ANN)))
            .andExpect(jsonPath("$.[*].nbChbNoshow").value(hasItem(DEFAULT_NB_CHB_NOSHOW)))
            .andExpect(jsonPath("$.[*].revenuNetChambreGlobal").value(hasItem(DEFAULT_REVENU_NET_CHAMBRE_GLOBAL.intValue())))
            .andExpect(jsonPath("$.[*].revenuTaxeChambreGlobal").value(hasItem(DEFAULT_REVENU_TAXE_CHAMBRE_GLOBAL.intValue())))
            .andExpect(jsonPath("$.[*].revenuNetBqGlobal").value(hasItem(DEFAULT_REVENU_NET_BQ_GLOBAL.intValue())))
            .andExpect(jsonPath("$.[*].revenuTaxeBqGlobal").value(hasItem(DEFAULT_REVENU_TAXE_BQ_GLOBAL.intValue())))
            .andExpect(jsonPath("$.[*].revenuNetExtraGlobal").value(hasItem(DEFAULT_REVENU_NET_EXTRA_GLOBAL.intValue())))
            .andExpect(jsonPath("$.[*].revenuTaxeExtraGlobal").value(hasItem(DEFAULT_REVENU_TAXE_EXTRA_GLOBAL.intValue())))
            .andExpect(jsonPath("$.[*].revenuNetTotalGlobal").value(hasItem(DEFAULT_REVENU_NET_TOTAL_GLOBAL.intValue())))
            .andExpect(jsonPath("$.[*].revenuTaxeTotalGlobal").value(hasItem(DEFAULT_REVENU_TAXE_TOTAL_GLOBAL.intValue())))
            .andExpect(jsonPath("$.[*].prodRevenuChambre").value(hasItem(DEFAULT_PROD_REVENU_CHAMBRE.intValue())))
            .andExpect(jsonPath("$.[*].prodRevenuBq").value(hasItem(DEFAULT_PROD_REVENU_BQ.intValue())))
            .andExpect(jsonPath("$.[*].prodRevenuExtra").value(hasItem(DEFAULT_PROD_REVENU_EXTRA.intValue())))
            .andExpect(jsonPath("$.[*].prodRevenuTotal").value(hasItem(DEFAULT_PROD_REVENU_TOTAL.intValue())))
            .andExpect(jsonPath("$.[*].prodChambreNbNuitees").value(hasItem(DEFAULT_PROD_CHAMBRE_NB_NUITEES.intValue())))
            .andExpect(jsonPath("$.[*].datesSejourRensYn").value(hasItem(DEFAULT_DATES_SEJOUR_RENS_YN)))
            .andExpect(jsonPath("$.[*].techEventType").value(hasItem(DEFAULT_TECH_EVENT_TYPE)))
            .andExpect(jsonPath("$.[*].techResvInvType").value(hasItem(DEFAULT_TECH_RESV_INV_TYPE)))
            .andExpect(jsonPath("$.[*].techOrigine").value(hasItem(DEFAULT_TECH_ORIGINE)))
            .andExpect(jsonPath("$.[*].techGrpNumOrdre").value(hasItem(DEFAULT_TECH_GRP_NUM_ORDRE)))
            .andExpect(jsonPath("$.[*].techCreateDate").value(hasItem(DEFAULT_TECH_CREATE_DATE.toString())))
            .andExpect(jsonPath("$.[*].techUpdateDate").value(hasItem(DEFAULT_TECH_UPDATE_DATE.toString())))
            .andExpect(jsonPath("$.[*].resvNameIdPrincipal").value(hasItem(DEFAULT_RESV_NAME_ID_PRINCIPAL)));
    }

    @Test
    @Transactional
    void getFtOResv() throws Exception {
        // Initialize the database
        ftOResvRepository.saveAndFlush(ftOResv);

        // Get the ftOResv
        restFtOResvMockMvc
            .perform(get(ENTITY_API_URL_ID, ftOResv.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.id").value(ftOResv.getId().intValue()))
            .andExpect(jsonPath("$.numLigne").value(DEFAULT_NUM_LIGNE))
            .andExpect(jsonPath("$.resort").value(DEFAULT_RESORT))
            .andExpect(jsonPath("$.resvNameId").value(DEFAULT_RESV_NAME_ID))
            .andExpect(jsonPath("$.clientOId").value(DEFAULT_CLIENT_O_ID))
            .andExpect(jsonPath("$.typeChb").value(DEFAULT_TYPE_CHB))
            .andExpect(jsonPath("$.businessDate").value(DEFAULT_BUSINESS_DATE.toString()))
            .andExpect(jsonPath("$.numOrdre").value(DEFAULT_NUM_ORDRE))
            .andExpect(jsonPath("$.confirmationNo").value(DEFAULT_CONFIRMATION_NO))
            .andExpect(jsonPath("$.clientMdmId").value(DEFAULT_CLIENT_MDM_ID))
            .andExpect(jsonPath("$.nameId").value(DEFAULT_NAME_ID))
            .andExpect(jsonPath("$.nameIdLigne").value(DEFAULT_NAME_ID_LIGNE))
            .andExpect(jsonPath("$.contactId").value(DEFAULT_CONTACT_ID))
            .andExpect(jsonPath("$.agenceId").value(DEFAULT_AGENCE_ID))
            .andExpect(jsonPath("$.agenceNom").value(DEFAULT_AGENCE_NOM))
            .andExpect(jsonPath("$.societeId").value(DEFAULT_SOCIETE_ID))
            .andExpect(jsonPath("$.groupeId").value(DEFAULT_GROUPE_ID))
            .andExpect(jsonPath("$.membreId").value(DEFAULT_MEMBRE_ID))
            .andExpect(jsonPath("$.sourceProfileId").value(DEFAULT_SOURCE_PROFILE_ID))
            .andExpect(jsonPath("$.numBloc").value(DEFAULT_NUM_BLOC))
            .andExpect(jsonPath("$.statutResv").value(DEFAULT_STATUT_RESV))
            .andExpect(jsonPath("$.statutVip").value(DEFAULT_STATUT_VIP))
            .andExpect(jsonPath("$.dateDebutLigne").value(DEFAULT_DATE_DEBUT_LIGNE.toString()))
            .andExpect(jsonPath("$.dateFinLigne").value(DEFAULT_DATE_FIN_LIGNE.toString()))
            .andExpect(jsonPath("$.dateFinOrigine").value(DEFAULT_DATE_FIN_ORIGINE.toString()))
            .andExpect(jsonPath("$.dateAnn").value(DEFAULT_DATE_ANN.toString()))
            .andExpect(jsonPath("$.pseudoRoomYn").value(DEFAULT_PSEUDO_ROOM_YN))
            .andExpect(jsonPath("$.complementaireYn").value(DEFAULT_COMPLEMENTAIRE_YN))
            .andExpect(jsonPath("$.interneYn").value(DEFAULT_INTERNE_YN))
            .andExpect(jsonPath("$.walkinYn").value(DEFAULT_WALKIN_YN))
            .andExpect(jsonPath("$.createurResv").value(DEFAULT_CREATEUR_RESV))
            .andExpect(jsonPath("$.nomCreateurResv").value(DEFAULT_NOM_CREATEUR_RESV))
            .andExpect(jsonPath("$.codePays").value(DEFAULT_CODE_PAYS))
            .andExpect(jsonPath("$.libPays").value(DEFAULT_LIB_PAYS))
            .andExpect(jsonPath("$.codeNationalite").value(DEFAULT_CODE_NATIONALITE))
            .andExpect(jsonPath("$.libNationalite").value(DEFAULT_LIB_NATIONALITE))
            .andExpect(jsonPath("$.codeSource").value(DEFAULT_CODE_SOURCE))
            .andExpect(jsonPath("$.libSource").value(DEFAULT_LIB_SOURCE))
            .andExpect(jsonPath("$.codeGrandSource").value(DEFAULT_CODE_GRAND_SOURCE))
            .andExpect(jsonPath("$.codeOrigine").value(DEFAULT_CODE_ORIGINE))
            .andExpect(jsonPath("$.libOrigine").value(DEFAULT_LIB_ORIGINE))
            .andExpect(jsonPath("$.codeMarche").value(DEFAULT_CODE_MARCHE))
            .andExpect(jsonPath("$.libMarche").value(DEFAULT_LIB_MARCHE))
            .andExpect(jsonPath("$.codeGrandMarche").value(DEFAULT_CODE_GRAND_MARCHE))
            .andExpect(jsonPath("$.libGrandMarche").value(DEFAULT_LIB_GRAND_MARCHE))
            .andExpect(jsonPath("$.codePrix").value(DEFAULT_CODE_PRIX))
            .andExpect(jsonPath("$.categPrix").value(DEFAULT_CATEG_PRIX))
            .andExpect(jsonPath("$.libPrix").value(DEFAULT_LIB_PRIX))
            .andExpect(jsonPath("$.numChb").value(DEFAULT_NUM_CHB))
            .andExpect(jsonPath("$.typeChbLigne").value(DEFAULT_TYPE_CHB_LIGNE))
            .andExpect(jsonPath("$.descriptionTypeChb").value(DEFAULT_DESCRIPTION_TYPE_CHB))
            .andExpect(jsonPath("$.codeTypeChb").value(DEFAULT_CODE_TYPE_CHB))
            .andExpect(jsonPath("$.classChb").value(DEFAULT_CLASS_CHB))
            .andExpect(jsonPath("$.statutChbResv").value(DEFAULT_STATUT_CHB_RESV))
            .andExpect(jsonPath("$.typeChbDeReservation").value(DEFAULT_TYPE_CHB_DE_RESERVATION))
            .andExpect(jsonPath("$.descriptionTypeChbDeResv").value(DEFAULT_DESCRIPTION_TYPE_CHB_DE_RESV))
            .andExpect(jsonPath("$.codeTypeChbDeResv").value(DEFAULT_CODE_TYPE_CHB_DE_RESV))
            .andExpect(jsonPath("$.circuitDistribution").value(DEFAULT_CIRCUIT_DISTRIBUTION))
            .andExpect(jsonPath("$.circuitDistribUserRegroup").value(DEFAULT_CIRCUIT_DISTRIB_USER_REGROUP))
            .andExpect(jsonPath("$.nbResvAnn").value(DEFAULT_NB_RESV_ANN))
            .andExpect(jsonPath("$.nbNuitee").value(DEFAULT_NB_NUITEE))
            .andExpect(jsonPath("$.nbNuiteeNnDed").value(DEFAULT_NB_NUITEE_NN_DED))
            .andExpect(jsonPath("$.nbNuiteeGlobal").value(DEFAULT_NB_NUITEE_GLOBAL))
            .andExpect(jsonPath("$.nbOccupationMultiple").value(DEFAULT_NB_OCCUPATION_MULTIPLE))
            .andExpect(jsonPath("$.nbAduGlobal").value(DEFAULT_NB_ADU_GLOBAL))
            .andExpect(jsonPath("$.nbEnfGlobal").value(DEFAULT_NB_ENF_GLOBAL))
            .andExpect(jsonPath("$.nbPersDayUGlobal").value(DEFAULT_NB_PERS_DAY_U_GLOBAL))
            .andExpect(jsonPath("$.nbPersArrGlobal").value(DEFAULT_NB_PERS_ARR_GLOBAL))
            .andExpect(jsonPath("$.nbPersDepGlobal").value(DEFAULT_NB_PERS_DEP_GLOBAL))
            .andExpect(jsonPath("$.nbPersAnn").value(DEFAULT_NB_PERS_ANN))
            .andExpect(jsonPath("$.nbPersNoshow").value(DEFAULT_NB_PERS_NOSHOW))
            .andExpect(jsonPath("$.nbChbDayUGlobal").value(DEFAULT_NB_CHB_DAY_U_GLOBAL))
            .andExpect(jsonPath("$.nbChbArrGlobal").value(DEFAULT_NB_CHB_ARR_GLOBAL))
            .andExpect(jsonPath("$.nbChbDepGlobal").value(DEFAULT_NB_CHB_DEP_GLOBAL))
            .andExpect(jsonPath("$.nbChbAnn").value(DEFAULT_NB_CHB_ANN))
            .andExpect(jsonPath("$.nbChbNoshow").value(DEFAULT_NB_CHB_NOSHOW))
            .andExpect(jsonPath("$.revenuNetChambreGlobal").value(DEFAULT_REVENU_NET_CHAMBRE_GLOBAL.intValue()))
            .andExpect(jsonPath("$.revenuTaxeChambreGlobal").value(DEFAULT_REVENU_TAXE_CHAMBRE_GLOBAL.intValue()))
            .andExpect(jsonPath("$.revenuNetBqGlobal").value(DEFAULT_REVENU_NET_BQ_GLOBAL.intValue()))
            .andExpect(jsonPath("$.revenuTaxeBqGlobal").value(DEFAULT_REVENU_TAXE_BQ_GLOBAL.intValue()))
            .andExpect(jsonPath("$.revenuNetExtraGlobal").value(DEFAULT_REVENU_NET_EXTRA_GLOBAL.intValue()))
            .andExpect(jsonPath("$.revenuTaxeExtraGlobal").value(DEFAULT_REVENU_TAXE_EXTRA_GLOBAL.intValue()))
            .andExpect(jsonPath("$.revenuNetTotalGlobal").value(DEFAULT_REVENU_NET_TOTAL_GLOBAL.intValue()))
            .andExpect(jsonPath("$.revenuTaxeTotalGlobal").value(DEFAULT_REVENU_TAXE_TOTAL_GLOBAL.intValue()))
            .andExpect(jsonPath("$.prodRevenuChambre").value(DEFAULT_PROD_REVENU_CHAMBRE.intValue()))
            .andExpect(jsonPath("$.prodRevenuBq").value(DEFAULT_PROD_REVENU_BQ.intValue()))
            .andExpect(jsonPath("$.prodRevenuExtra").value(DEFAULT_PROD_REVENU_EXTRA.intValue()))
            .andExpect(jsonPath("$.prodRevenuTotal").value(DEFAULT_PROD_REVENU_TOTAL.intValue()))
            .andExpect(jsonPath("$.prodChambreNbNuitees").value(DEFAULT_PROD_CHAMBRE_NB_NUITEES.intValue()))
            .andExpect(jsonPath("$.datesSejourRensYn").value(DEFAULT_DATES_SEJOUR_RENS_YN))
            .andExpect(jsonPath("$.techEventType").value(DEFAULT_TECH_EVENT_TYPE))
            .andExpect(jsonPath("$.techResvInvType").value(DEFAULT_TECH_RESV_INV_TYPE))
            .andExpect(jsonPath("$.techOrigine").value(DEFAULT_TECH_ORIGINE))
            .andExpect(jsonPath("$.techGrpNumOrdre").value(DEFAULT_TECH_GRP_NUM_ORDRE))
            .andExpect(jsonPath("$.techCreateDate").value(DEFAULT_TECH_CREATE_DATE.toString()))
            .andExpect(jsonPath("$.techUpdateDate").value(DEFAULT_TECH_UPDATE_DATE.toString()))
            .andExpect(jsonPath("$.resvNameIdPrincipal").value(DEFAULT_RESV_NAME_ID_PRINCIPAL));
    }

    @Test
    @Transactional
    void getNonExistingFtOResv() throws Exception {
        // Get the ftOResv
        restFtOResvMockMvc.perform(get(ENTITY_API_URL_ID, Long.MAX_VALUE)).andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    void putExistingFtOResv() throws Exception {
        // Initialize the database
        ftOResvRepository.saveAndFlush(ftOResv);

        long databaseSizeBeforeUpdate = getRepositoryCount();

        // Update the ftOResv
        FtOResv updatedFtOResv = ftOResvRepository.findById(ftOResv.getId()).orElseThrow();
        // Disconnect from session so that the updates on updatedFtOResv are not directly saved in db
        em.detach(updatedFtOResv);
        updatedFtOResv
            .numLigne(UPDATED_NUM_LIGNE)
            .resort(UPDATED_RESORT)
            .resvNameId(UPDATED_RESV_NAME_ID)
            .clientOId(UPDATED_CLIENT_O_ID)
            .typeChb(UPDATED_TYPE_CHB)
            .businessDate(UPDATED_BUSINESS_DATE)
            .numOrdre(UPDATED_NUM_ORDRE)
            .confirmationNo(UPDATED_CONFIRMATION_NO)
            .clientMdmId(UPDATED_CLIENT_MDM_ID)
            .nameId(UPDATED_NAME_ID)
            .nameIdLigne(UPDATED_NAME_ID_LIGNE)
            .contactId(UPDATED_CONTACT_ID)
            .agenceId(UPDATED_AGENCE_ID)
            .agenceNom(UPDATED_AGENCE_NOM)
            .societeId(UPDATED_SOCIETE_ID)
            .groupeId(UPDATED_GROUPE_ID)
            .membreId(UPDATED_MEMBRE_ID)
            .sourceProfileId(UPDATED_SOURCE_PROFILE_ID)
            .numBloc(UPDATED_NUM_BLOC)
            .statutResv(UPDATED_STATUT_RESV)
            .statutVip(UPDATED_STATUT_VIP)
            .dateDebutLigne(UPDATED_DATE_DEBUT_LIGNE)
            .dateFinLigne(UPDATED_DATE_FIN_LIGNE)
            .dateFinOrigine(UPDATED_DATE_FIN_ORIGINE)
            .dateAnn(UPDATED_DATE_ANN)
            .pseudoRoomYn(UPDATED_PSEUDO_ROOM_YN)
            .complementaireYn(UPDATED_COMPLEMENTAIRE_YN)
            .interneYn(UPDATED_INTERNE_YN)
            .walkinYn(UPDATED_WALKIN_YN)
            .createurResv(UPDATED_CREATEUR_RESV)
            .nomCreateurResv(UPDATED_NOM_CREATEUR_RESV)
            .codePays(UPDATED_CODE_PAYS)
            .libPays(UPDATED_LIB_PAYS)
            .codeNationalite(UPDATED_CODE_NATIONALITE)
            .libNationalite(UPDATED_LIB_NATIONALITE)
            .codeSource(UPDATED_CODE_SOURCE)
            .libSource(UPDATED_LIB_SOURCE)
            .codeGrandSource(UPDATED_CODE_GRAND_SOURCE)
            .codeOrigine(UPDATED_CODE_ORIGINE)
            .libOrigine(UPDATED_LIB_ORIGINE)
            .codeMarche(UPDATED_CODE_MARCHE)
            .libMarche(UPDATED_LIB_MARCHE)
            .codeGrandMarche(UPDATED_CODE_GRAND_MARCHE)
            .libGrandMarche(UPDATED_LIB_GRAND_MARCHE)
            .codePrix(UPDATED_CODE_PRIX)
            .categPrix(UPDATED_CATEG_PRIX)
            .libPrix(UPDATED_LIB_PRIX)
            .numChb(UPDATED_NUM_CHB)
            .typeChbLigne(UPDATED_TYPE_CHB_LIGNE)
            .descriptionTypeChb(UPDATED_DESCRIPTION_TYPE_CHB)
            .codeTypeChb(UPDATED_CODE_TYPE_CHB)
            .classChb(UPDATED_CLASS_CHB)
            .statutChbResv(UPDATED_STATUT_CHB_RESV)
            .typeChbDeReservation(UPDATED_TYPE_CHB_DE_RESERVATION)
            .descriptionTypeChbDeResv(UPDATED_DESCRIPTION_TYPE_CHB_DE_RESV)
            .codeTypeChbDeResv(UPDATED_CODE_TYPE_CHB_DE_RESV)
            .circuitDistribution(UPDATED_CIRCUIT_DISTRIBUTION)
            .circuitDistribUserRegroup(UPDATED_CIRCUIT_DISTRIB_USER_REGROUP)
            .nbResvAnn(UPDATED_NB_RESV_ANN)
            .nbNuitee(UPDATED_NB_NUITEE)
            .nbNuiteeNnDed(UPDATED_NB_NUITEE_NN_DED)
            .nbNuiteeGlobal(UPDATED_NB_NUITEE_GLOBAL)
            .nbOccupationMultiple(UPDATED_NB_OCCUPATION_MULTIPLE)
            .nbAduGlobal(UPDATED_NB_ADU_GLOBAL)
            .nbEnfGlobal(UPDATED_NB_ENF_GLOBAL)
            .nbPersDayUGlobal(UPDATED_NB_PERS_DAY_U_GLOBAL)
            .nbPersArrGlobal(UPDATED_NB_PERS_ARR_GLOBAL)
            .nbPersDepGlobal(UPDATED_NB_PERS_DEP_GLOBAL)
            .nbPersAnn(UPDATED_NB_PERS_ANN)
            .nbPersNoshow(UPDATED_NB_PERS_NOSHOW)
            .nbChbDayUGlobal(UPDATED_NB_CHB_DAY_U_GLOBAL)
            .nbChbArrGlobal(UPDATED_NB_CHB_ARR_GLOBAL)
            .nbChbDepGlobal(UPDATED_NB_CHB_DEP_GLOBAL)
            .nbChbAnn(UPDATED_NB_CHB_ANN)
            .nbChbNoshow(UPDATED_NB_CHB_NOSHOW)
            .revenuNetChambreGlobal(UPDATED_REVENU_NET_CHAMBRE_GLOBAL)
            .revenuTaxeChambreGlobal(UPDATED_REVENU_TAXE_CHAMBRE_GLOBAL)
            .revenuNetBqGlobal(UPDATED_REVENU_NET_BQ_GLOBAL)
            .revenuTaxeBqGlobal(UPDATED_REVENU_TAXE_BQ_GLOBAL)
            .revenuNetExtraGlobal(UPDATED_REVENU_NET_EXTRA_GLOBAL)
            .revenuTaxeExtraGlobal(UPDATED_REVENU_TAXE_EXTRA_GLOBAL)
            .revenuNetTotalGlobal(UPDATED_REVENU_NET_TOTAL_GLOBAL)
            .revenuTaxeTotalGlobal(UPDATED_REVENU_TAXE_TOTAL_GLOBAL)
            .prodRevenuChambre(UPDATED_PROD_REVENU_CHAMBRE)
            .prodRevenuBq(UPDATED_PROD_REVENU_BQ)
            .prodRevenuExtra(UPDATED_PROD_REVENU_EXTRA)
            .prodRevenuTotal(UPDATED_PROD_REVENU_TOTAL)
            .prodChambreNbNuitees(UPDATED_PROD_CHAMBRE_NB_NUITEES)
            .datesSejourRensYn(UPDATED_DATES_SEJOUR_RENS_YN)
            .techEventType(UPDATED_TECH_EVENT_TYPE)
            .techResvInvType(UPDATED_TECH_RESV_INV_TYPE)
            .techOrigine(UPDATED_TECH_ORIGINE)
            .techGrpNumOrdre(UPDATED_TECH_GRP_NUM_ORDRE)
            .techCreateDate(UPDATED_TECH_CREATE_DATE)
            .techUpdateDate(UPDATED_TECH_UPDATE_DATE)
            .resvNameIdPrincipal(UPDATED_RESV_NAME_ID_PRINCIPAL);
        FtOResvDTO ftOResvDTO = ftOResvMapper.toDto(updatedFtOResv);

        restFtOResvMockMvc
            .perform(
                put(ENTITY_API_URL_ID, ftOResvDTO.getId()).contentType(MediaType.APPLICATION_JSON).content(om.writeValueAsBytes(ftOResvDTO))
            )
            .andExpect(status().isOk());

        // Validate the FtOResv in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
        assertPersistedFtOResvToMatchAllProperties(updatedFtOResv);
    }

    @Test
    @Transactional
    void putNonExistingFtOResv() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        ftOResv.setId(longCount.incrementAndGet());

        // Create the FtOResv
        FtOResvDTO ftOResvDTO = ftOResvMapper.toDto(ftOResv);

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restFtOResvMockMvc
            .perform(
                put(ENTITY_API_URL_ID, ftOResvDTO.getId()).contentType(MediaType.APPLICATION_JSON).content(om.writeValueAsBytes(ftOResvDTO))
            )
            .andExpect(status().isBadRequest());

        // Validate the FtOResv in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void putWithIdMismatchFtOResv() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        ftOResv.setId(longCount.incrementAndGet());

        // Create the FtOResv
        FtOResvDTO ftOResvDTO = ftOResvMapper.toDto(ftOResv);

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restFtOResvMockMvc
            .perform(
                put(ENTITY_API_URL_ID, longCount.incrementAndGet())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(om.writeValueAsBytes(ftOResvDTO))
            )
            .andExpect(status().isBadRequest());

        // Validate the FtOResv in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void putWithMissingIdPathParamFtOResv() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        ftOResv.setId(longCount.incrementAndGet());

        // Create the FtOResv
        FtOResvDTO ftOResvDTO = ftOResvMapper.toDto(ftOResv);

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restFtOResvMockMvc
            .perform(put(ENTITY_API_URL).contentType(MediaType.APPLICATION_JSON).content(om.writeValueAsBytes(ftOResvDTO)))
            .andExpect(status().isMethodNotAllowed());

        // Validate the FtOResv in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void partialUpdateFtOResvWithPatch() throws Exception {
        // Initialize the database
        ftOResvRepository.saveAndFlush(ftOResv);

        long databaseSizeBeforeUpdate = getRepositoryCount();

        // Update the ftOResv using partial update
        FtOResv partialUpdatedFtOResv = new FtOResv();
        partialUpdatedFtOResv.setId(ftOResv.getId());

        partialUpdatedFtOResv
            .resvNameId(UPDATED_RESV_NAME_ID)
            .businessDate(UPDATED_BUSINESS_DATE)
            .numOrdre(UPDATED_NUM_ORDRE)
            .confirmationNo(UPDATED_CONFIRMATION_NO)
            .clientMdmId(UPDATED_CLIENT_MDM_ID)
            .nameId(UPDATED_NAME_ID)
            .nameIdLigne(UPDATED_NAME_ID_LIGNE)
            .agenceNom(UPDATED_AGENCE_NOM)
            .societeId(UPDATED_SOCIETE_ID)
            .groupeId(UPDATED_GROUPE_ID)
            .membreId(UPDATED_MEMBRE_ID)
            .statutResv(UPDATED_STATUT_RESV)
            .complementaireYn(UPDATED_COMPLEMENTAIRE_YN)
            .nomCreateurResv(UPDATED_NOM_CREATEUR_RESV)
            .libPays(UPDATED_LIB_PAYS)
            .codeNationalite(UPDATED_CODE_NATIONALITE)
            .libSource(UPDATED_LIB_SOURCE)
            .codeGrandSource(UPDATED_CODE_GRAND_SOURCE)
            .libMarche(UPDATED_LIB_MARCHE)
            .libGrandMarche(UPDATED_LIB_GRAND_MARCHE)
            .typeChbLigne(UPDATED_TYPE_CHB_LIGNE)
            .descriptionTypeChb(UPDATED_DESCRIPTION_TYPE_CHB)
            .classChb(UPDATED_CLASS_CHB)
            .statutChbResv(UPDATED_STATUT_CHB_RESV)
            .typeChbDeReservation(UPDATED_TYPE_CHB_DE_RESERVATION)
            .codeTypeChbDeResv(UPDATED_CODE_TYPE_CHB_DE_RESV)
            .circuitDistribution(UPDATED_CIRCUIT_DISTRIBUTION)
            .circuitDistribUserRegroup(UPDATED_CIRCUIT_DISTRIB_USER_REGROUP)
            .nbResvAnn(UPDATED_NB_RESV_ANN)
            .nbNuitee(UPDATED_NB_NUITEE)
            .nbNuiteeNnDed(UPDATED_NB_NUITEE_NN_DED)
            .nbNuiteeGlobal(UPDATED_NB_NUITEE_GLOBAL)
            .nbPersDayUGlobal(UPDATED_NB_PERS_DAY_U_GLOBAL)
            .nbPersArrGlobal(UPDATED_NB_PERS_ARR_GLOBAL)
            .nbPersDepGlobal(UPDATED_NB_PERS_DEP_GLOBAL)
            .nbPersNoshow(UPDATED_NB_PERS_NOSHOW)
            .nbChbDayUGlobal(UPDATED_NB_CHB_DAY_U_GLOBAL)
            .nbChbDepGlobal(UPDATED_NB_CHB_DEP_GLOBAL)
            .nbChbAnn(UPDATED_NB_CHB_ANN)
            .revenuNetBqGlobal(UPDATED_REVENU_NET_BQ_GLOBAL)
            .revenuNetExtraGlobal(UPDATED_REVENU_NET_EXTRA_GLOBAL)
            .revenuTaxeExtraGlobal(UPDATED_REVENU_TAXE_EXTRA_GLOBAL)
            .revenuNetTotalGlobal(UPDATED_REVENU_NET_TOTAL_GLOBAL)
            .revenuTaxeTotalGlobal(UPDATED_REVENU_TAXE_TOTAL_GLOBAL)
            .prodRevenuChambre(UPDATED_PROD_REVENU_CHAMBRE)
            .prodRevenuExtra(UPDATED_PROD_REVENU_EXTRA)
            .prodRevenuTotal(UPDATED_PROD_REVENU_TOTAL)
            .datesSejourRensYn(UPDATED_DATES_SEJOUR_RENS_YN)
            .techEventType(UPDATED_TECH_EVENT_TYPE)
            .techResvInvType(UPDATED_TECH_RESV_INV_TYPE)
            .techUpdateDate(UPDATED_TECH_UPDATE_DATE)
            .resvNameIdPrincipal(UPDATED_RESV_NAME_ID_PRINCIPAL);

        restFtOResvMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, partialUpdatedFtOResv.getId())
                    .contentType("application/merge-patch+json")
                    .content(om.writeValueAsBytes(partialUpdatedFtOResv))
            )
            .andExpect(status().isOk());

        // Validate the FtOResv in the database

        assertSameRepositoryCount(databaseSizeBeforeUpdate);
        assertFtOResvUpdatableFieldsEquals(createUpdateProxyForBean(partialUpdatedFtOResv, ftOResv), getPersistedFtOResv(ftOResv));
    }

    @Test
    @Transactional
    void fullUpdateFtOResvWithPatch() throws Exception {
        // Initialize the database
        ftOResvRepository.saveAndFlush(ftOResv);

        long databaseSizeBeforeUpdate = getRepositoryCount();

        // Update the ftOResv using partial update
        FtOResv partialUpdatedFtOResv = new FtOResv();
        partialUpdatedFtOResv.setId(ftOResv.getId());

        partialUpdatedFtOResv
            .numLigne(UPDATED_NUM_LIGNE)
            .resort(UPDATED_RESORT)
            .resvNameId(UPDATED_RESV_NAME_ID)
            .clientOId(UPDATED_CLIENT_O_ID)
            .typeChb(UPDATED_TYPE_CHB)
            .businessDate(UPDATED_BUSINESS_DATE)
            .numOrdre(UPDATED_NUM_ORDRE)
            .confirmationNo(UPDATED_CONFIRMATION_NO)
            .clientMdmId(UPDATED_CLIENT_MDM_ID)
            .nameId(UPDATED_NAME_ID)
            .nameIdLigne(UPDATED_NAME_ID_LIGNE)
            .contactId(UPDATED_CONTACT_ID)
            .agenceId(UPDATED_AGENCE_ID)
            .agenceNom(UPDATED_AGENCE_NOM)
            .societeId(UPDATED_SOCIETE_ID)
            .groupeId(UPDATED_GROUPE_ID)
            .membreId(UPDATED_MEMBRE_ID)
            .sourceProfileId(UPDATED_SOURCE_PROFILE_ID)
            .numBloc(UPDATED_NUM_BLOC)
            .statutResv(UPDATED_STATUT_RESV)
            .statutVip(UPDATED_STATUT_VIP)
            .dateDebutLigne(UPDATED_DATE_DEBUT_LIGNE)
            .dateFinLigne(UPDATED_DATE_FIN_LIGNE)
            .dateFinOrigine(UPDATED_DATE_FIN_ORIGINE)
            .dateAnn(UPDATED_DATE_ANN)
            .pseudoRoomYn(UPDATED_PSEUDO_ROOM_YN)
            .complementaireYn(UPDATED_COMPLEMENTAIRE_YN)
            .interneYn(UPDATED_INTERNE_YN)
            .walkinYn(UPDATED_WALKIN_YN)
            .createurResv(UPDATED_CREATEUR_RESV)
            .nomCreateurResv(UPDATED_NOM_CREATEUR_RESV)
            .codePays(UPDATED_CODE_PAYS)
            .libPays(UPDATED_LIB_PAYS)
            .codeNationalite(UPDATED_CODE_NATIONALITE)
            .libNationalite(UPDATED_LIB_NATIONALITE)
            .codeSource(UPDATED_CODE_SOURCE)
            .libSource(UPDATED_LIB_SOURCE)
            .codeGrandSource(UPDATED_CODE_GRAND_SOURCE)
            .codeOrigine(UPDATED_CODE_ORIGINE)
            .libOrigine(UPDATED_LIB_ORIGINE)
            .codeMarche(UPDATED_CODE_MARCHE)
            .libMarche(UPDATED_LIB_MARCHE)
            .codeGrandMarche(UPDATED_CODE_GRAND_MARCHE)
            .libGrandMarche(UPDATED_LIB_GRAND_MARCHE)
            .codePrix(UPDATED_CODE_PRIX)
            .categPrix(UPDATED_CATEG_PRIX)
            .libPrix(UPDATED_LIB_PRIX)
            .numChb(UPDATED_NUM_CHB)
            .typeChbLigne(UPDATED_TYPE_CHB_LIGNE)
            .descriptionTypeChb(UPDATED_DESCRIPTION_TYPE_CHB)
            .codeTypeChb(UPDATED_CODE_TYPE_CHB)
            .classChb(UPDATED_CLASS_CHB)
            .statutChbResv(UPDATED_STATUT_CHB_RESV)
            .typeChbDeReservation(UPDATED_TYPE_CHB_DE_RESERVATION)
            .descriptionTypeChbDeResv(UPDATED_DESCRIPTION_TYPE_CHB_DE_RESV)
            .codeTypeChbDeResv(UPDATED_CODE_TYPE_CHB_DE_RESV)
            .circuitDistribution(UPDATED_CIRCUIT_DISTRIBUTION)
            .circuitDistribUserRegroup(UPDATED_CIRCUIT_DISTRIB_USER_REGROUP)
            .nbResvAnn(UPDATED_NB_RESV_ANN)
            .nbNuitee(UPDATED_NB_NUITEE)
            .nbNuiteeNnDed(UPDATED_NB_NUITEE_NN_DED)
            .nbNuiteeGlobal(UPDATED_NB_NUITEE_GLOBAL)
            .nbOccupationMultiple(UPDATED_NB_OCCUPATION_MULTIPLE)
            .nbAduGlobal(UPDATED_NB_ADU_GLOBAL)
            .nbEnfGlobal(UPDATED_NB_ENF_GLOBAL)
            .nbPersDayUGlobal(UPDATED_NB_PERS_DAY_U_GLOBAL)
            .nbPersArrGlobal(UPDATED_NB_PERS_ARR_GLOBAL)
            .nbPersDepGlobal(UPDATED_NB_PERS_DEP_GLOBAL)
            .nbPersAnn(UPDATED_NB_PERS_ANN)
            .nbPersNoshow(UPDATED_NB_PERS_NOSHOW)
            .nbChbDayUGlobal(UPDATED_NB_CHB_DAY_U_GLOBAL)
            .nbChbArrGlobal(UPDATED_NB_CHB_ARR_GLOBAL)
            .nbChbDepGlobal(UPDATED_NB_CHB_DEP_GLOBAL)
            .nbChbAnn(UPDATED_NB_CHB_ANN)
            .nbChbNoshow(UPDATED_NB_CHB_NOSHOW)
            .revenuNetChambreGlobal(UPDATED_REVENU_NET_CHAMBRE_GLOBAL)
            .revenuTaxeChambreGlobal(UPDATED_REVENU_TAXE_CHAMBRE_GLOBAL)
            .revenuNetBqGlobal(UPDATED_REVENU_NET_BQ_GLOBAL)
            .revenuTaxeBqGlobal(UPDATED_REVENU_TAXE_BQ_GLOBAL)
            .revenuNetExtraGlobal(UPDATED_REVENU_NET_EXTRA_GLOBAL)
            .revenuTaxeExtraGlobal(UPDATED_REVENU_TAXE_EXTRA_GLOBAL)
            .revenuNetTotalGlobal(UPDATED_REVENU_NET_TOTAL_GLOBAL)
            .revenuTaxeTotalGlobal(UPDATED_REVENU_TAXE_TOTAL_GLOBAL)
            .prodRevenuChambre(UPDATED_PROD_REVENU_CHAMBRE)
            .prodRevenuBq(UPDATED_PROD_REVENU_BQ)
            .prodRevenuExtra(UPDATED_PROD_REVENU_EXTRA)
            .prodRevenuTotal(UPDATED_PROD_REVENU_TOTAL)
            .prodChambreNbNuitees(UPDATED_PROD_CHAMBRE_NB_NUITEES)
            .datesSejourRensYn(UPDATED_DATES_SEJOUR_RENS_YN)
            .techEventType(UPDATED_TECH_EVENT_TYPE)
            .techResvInvType(UPDATED_TECH_RESV_INV_TYPE)
            .techOrigine(UPDATED_TECH_ORIGINE)
            .techGrpNumOrdre(UPDATED_TECH_GRP_NUM_ORDRE)
            .techCreateDate(UPDATED_TECH_CREATE_DATE)
            .techUpdateDate(UPDATED_TECH_UPDATE_DATE)
            .resvNameIdPrincipal(UPDATED_RESV_NAME_ID_PRINCIPAL);

        restFtOResvMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, partialUpdatedFtOResv.getId())
                    .contentType("application/merge-patch+json")
                    .content(om.writeValueAsBytes(partialUpdatedFtOResv))
            )
            .andExpect(status().isOk());

        // Validate the FtOResv in the database

        assertSameRepositoryCount(databaseSizeBeforeUpdate);
        assertFtOResvUpdatableFieldsEquals(partialUpdatedFtOResv, getPersistedFtOResv(partialUpdatedFtOResv));
    }

    @Test
    @Transactional
    void patchNonExistingFtOResv() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        ftOResv.setId(longCount.incrementAndGet());

        // Create the FtOResv
        FtOResvDTO ftOResvDTO = ftOResvMapper.toDto(ftOResv);

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restFtOResvMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, ftOResvDTO.getId())
                    .contentType("application/merge-patch+json")
                    .content(om.writeValueAsBytes(ftOResvDTO))
            )
            .andExpect(status().isBadRequest());

        // Validate the FtOResv in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void patchWithIdMismatchFtOResv() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        ftOResv.setId(longCount.incrementAndGet());

        // Create the FtOResv
        FtOResvDTO ftOResvDTO = ftOResvMapper.toDto(ftOResv);

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restFtOResvMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, longCount.incrementAndGet())
                    .contentType("application/merge-patch+json")
                    .content(om.writeValueAsBytes(ftOResvDTO))
            )
            .andExpect(status().isBadRequest());

        // Validate the FtOResv in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void patchWithMissingIdPathParamFtOResv() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        ftOResv.setId(longCount.incrementAndGet());

        // Create the FtOResv
        FtOResvDTO ftOResvDTO = ftOResvMapper.toDto(ftOResv);

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restFtOResvMockMvc
            .perform(patch(ENTITY_API_URL).contentType("application/merge-patch+json").content(om.writeValueAsBytes(ftOResvDTO)))
            .andExpect(status().isMethodNotAllowed());

        // Validate the FtOResv in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void deleteFtOResv() throws Exception {
        // Initialize the database
        ftOResvRepository.saveAndFlush(ftOResv);

        long databaseSizeBeforeDelete = getRepositoryCount();

        // Delete the ftOResv
        restFtOResvMockMvc
            .perform(delete(ENTITY_API_URL_ID, ftOResv.getId()).accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        assertDecrementedRepositoryCount(databaseSizeBeforeDelete);
    }

    protected long getRepositoryCount() {
        return ftOResvRepository.count();
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

    protected FtOResv getPersistedFtOResv(FtOResv ftOResv) {
        return ftOResvRepository.findById(ftOResv.getId()).orElseThrow();
    }

    protected void assertPersistedFtOResvToMatchAllProperties(FtOResv expectedFtOResv) {
        assertFtOResvAllPropertiesEquals(expectedFtOResv, getPersistedFtOResv(expectedFtOResv));
    }

    protected void assertPersistedFtOResvToMatchUpdatableProperties(FtOResv expectedFtOResv) {
        assertFtOResvAllUpdatablePropertiesEquals(expectedFtOResv, getPersistedFtOResv(expectedFtOResv));
    }
}
