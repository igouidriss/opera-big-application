package com.mycompany.myapp.domain;

import jakarta.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

/**
 * A DmOResv.
 */
@Entity
@Table(name = "dm_o_resv")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
@SuppressWarnings("common-java:DuplicatedBlocks")
public class DmOResv implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    @Column(name = "id")
    private Long id;

    @Column(name = "num_ligne_1")
    private Integer numLigne1;

    @Column(name = "resort_2")
    private String resort2;

    @Column(name = "resv_name_id_3")
    private Integer resvNameId3;

    @Column(name = "client_o_id_4")
    private String clientOId4;

    @Column(name = "type_chb_5")
    private String typeChb5;

    @Column(name = "confirmation_no_6")
    private String confirmationNo6;

    @Column(name = "client_mdm_id_7")
    private String clientMdmId7;

    @Column(name = "name_id_8")
    private Integer nameId8;

    @Column(name = "parent_resv_name_id_9")
    private Integer parentResvNameId9;

    @Column(name = "contact_id_10")
    private Integer contactId10;

    @Column(name = "agence_id_11")
    private Integer agenceId11;

    @Column(name = "agence_nom_12")
    private String agenceNom12;

    @Column(name = "societe_id_13")
    private Integer societeId13;

    @Column(name = "groupe_id_14")
    private Integer groupeId14;

    @Column(name = "num_bloc_15")
    private Integer numBloc15;

    @Column(name = "type_resv_16")
    private String typeResv16;

    @Column(name = "statut_resv_17")
    private String statutResv17;

    @Column(name = "date_debut_resv_18")
    private LocalDate dateDebutResv18;

    @Column(name = "date_fin_resv_19")
    private LocalDate dateFinResv19;

    @Column(name = "trunc_date_debut_resv_20")
    private LocalDate truncDateDebutResv20;

    @Column(name = "trunc_date_fin_resv_21")
    private LocalDate truncDateFinResv21;

    @Column(name = "date_ann_resv_22")
    private LocalDate dateAnnResv22;

    @Column(name = "pseudo_room_yn_23")
    private String pseudoRoomYn23;

    @Column(name = "createur_resv_24")
    private Integer createurResv24;

    @Column(name = "nom_createur_resv_25")
    private String nomCreateurResv25;

    @Column(name = "code_garantie_26")
    private String codeGarantie26;

    @Column(name = "flg_ded_27")
    private String flgDed27;

    @Column(name = "code_pays_28")
    private String codePays28;

    @Column(name = "lib_pays_29")
    private String libPays29;

    @Column(name = "code_nationalite_30")
    private String codeNationalite30;

    @Column(name = "lib_nationalite_31")
    private String libNationalite31;

    @Column(name = "code_source_32")
    private String codeSource32;

    @Column(name = "lib_source_33")
    private String libSource33;

    @Column(name = "code_grand_source_34")
    private String codeGrandSource34;

    @Column(name = "code_origine_35")
    private String codeOrigine35;

    @Column(name = "lib_origine_36")
    private String libOrigine36;

    @Column(name = "code_marche_37")
    private String codeMarche37;

    @Column(name = "lib_marche_38")
    private String libMarche38;

    @Column(name = "code_grand_marche_39")
    private String codeGrandMarche39;

    @Column(name = "lib_grand_marche_40")
    private String libGrandMarche40;

    @Column(name = "code_prix_41")
    private String codePrix41;

    @Column(name = "categ_prix_42")
    private String categPrix42;

    @Column(name = "lib_prix_43")
    private String libPrix43;

    @Column(name = "num_chb_44")
    private String numChb44;

    @Column(name = "description_type_chb_45")
    private String descriptionTypeChb45;

    @Column(name = "code_type_chb_46")
    private String codeTypeChb46;

    @Column(name = "class_chb_47")
    private String classChb47;

    @Column(name = "caract_chb_48")
    private String caractChb48;

    @Column(name = "type_chb_de_reservation_49")
    private String typeChbDeReservation49;

    @Column(name = "description_type_chb_de_resv_50")
    private String descriptionTypeChbDeResv50;

    @Column(name = "code_type_chb_de_resv_51")
    private String codeTypeChbDeResv51;

    @Column(name = "statut_de_reservation_52")
    private String statutDeReservation52;

    @Column(name = "circuit_distribution_53")
    private String circuitDistribution53;

    @Column(name = "circuit_distrib_user_regroup_54")
    private String circuitDistribUserRegroup54;

    @Column(name = "num_crs_55")
    private String numCrs55;

    @Column(name = "type_ref_crs_56")
    private String typeRefCrs56;

    @Column(name = "crs_insert_date_57")
    private LocalDate crsInsertDate57;

    @Column(name = "date_crea_resv_58")
    private LocalDate dateCreaResv58;

    @Column(name = "date_premier_59")
    private LocalDate datePremier59;

    @Column(name = "statut_premier_60")
    private String statutPremier60;

    @Column(name = "date_dernier_61")
    private LocalDate dateDernier61;

    @Column(name = "statut_dernier_62")
    private String statutDernier62;

    @Column(name = "date_dernier_pseudo_63")
    private LocalDate dateDernierPseudo63;

    @Column(name = "statut_dernier_pseudo_64")
    private String statutDernierPseudo64;

    @Column(name = "diff_dt_crea_ann_65")
    private Integer diffDtCreaAnn65;

    @Column(name = "diff_dt_arr_ann_66")
    private Integer diffDtArrAnn66;

    @Column(name = "leadtime_67")
    private Integer leadtime67;

    @Column(name = "los_68")
    private Integer los68;

    @Column(name = "occupants_groupe_69")
    private String occupantsGroupe69;

    @Column(name = "nb_nuitee_70")
    private Integer nbNuitee70;

    @Column(name = "nb_nuitee_nn_ded_71")
    private Integer nbNuiteeNnDed71;

    @Column(name = "nb_resv_ann_72")
    private Integer nbResvAnn72;

    @Column(name = "nb_adu_73")
    private Integer nbAdu73;

    @Column(name = "nb_enf_74")
    private Integer nbEnf74;

    @Column(name = "nb_pers_day_u_75")
    private Integer nbPersDayU75;

    @Column(name = "nb_pers_arr_76")
    private Integer nbPersArr76;

    @Column(name = "nb_pers_dep_77")
    private Integer nbPersDep77;

    @Column(name = "nb_pers_ann_78")
    private Integer nbPersAnn78;

    @Column(name = "nb_pers_noshow_79")
    private Integer nbPersNoshow79;

    @Column(name = "nb_chb_day_u_80")
    private Integer nbChbDayU80;

    @Column(name = "nb_chb_arr_81")
    private Integer nbChbArr81;

    @Column(name = "nb_chb_dep_82")
    private Integer nbChbDep82;

    @Column(name = "nb_chb_ann_83")
    private Integer nbChbAnn83;

    @Column(name = "nb_chb_noshow_84")
    private Integer nbChbNoshow84;

    @Column(name = "revenu_net_chambre_85")
    private Long revenuNetChambre85;

    @Column(name = "revenu_taxe_chambre_86")
    private Long revenuTaxeChambre86;

    @Column(name = "revenu_net_chambre_global_87")
    private Long revenuNetChambreGlobal87;

    @Column(name = "revenu_taxe_chambre_global_88")
    private Long revenuTaxeChambreGlobal88;

    @Column(name = "revenu_net_bq_89")
    private Long revenuNetBq89;

    @Column(name = "revenu_taxe_bq_90")
    private Long revenuTaxeBq90;

    @Column(name = "revenu_net_bq_global_91")
    private Long revenuNetBqGlobal91;

    @Column(name = "revenu_taxe_bq_global_92")
    private Long revenuTaxeBqGlobal92;

    @Column(name = "revenu_net_extra_93")
    private Long revenuNetExtra93;

    @Column(name = "revenu_taxe_extra_94")
    private Long revenuTaxeExtra94;

    @Column(name = "revenu_net_extra_global_95")
    private Long revenuNetExtraGlobal95;

    @Column(name = "revenu_taxe_extra_global_96")
    private Long revenuTaxeExtraGlobal96;

    @Column(name = "revenu_net_total_97")
    private Long revenuNetTotal97;

    @Column(name = "revenu_taxe_total_98")
    private Long revenuTaxeTotal98;

    @Column(name = "revenu_net_total_global_99")
    private Long revenuNetTotalGlobal99;

    @Column(name = "revenu_taxe_total_global_100")
    private Long revenuTaxeTotalGlobal100;

    @Column(name = "prod_revenu_chambre_101")
    private Long prodRevenuChambre101;

    @Column(name = "prod_revenu_bq_102")
    private Long prodRevenuBq102;

    @Column(name = "prod_revenu_extra_103")
    private Long prodRevenuExtra103;

    @Column(name = "prod_revenu_total_104")
    private Long prodRevenuTotal104;

    @Column(name = "prod_chambre_nb_nuitees_105")
    private Long prodChambreNbNuitees105;

    @Column(name = "tech_create_date_106")
    private LocalDate techCreateDate106;

    @Column(name = "tech_update_date_107")
    private LocalDate techUpdateDate107;

    @Column(name = "num_ligne_108")
    private Integer numLigne108;

    @Column(name = "resort_109")
    private String resort109;

    @Column(name = "resv_name_id_110")
    private Integer resvNameId110;

    @Column(name = "client_o_id_111")
    private String clientOId111;

    @Column(name = "type_chb_112")
    private String typeChb112;

    @Column(name = "confirmation_no_113")
    private String confirmationNo113;

    @Column(name = "client_mdm_id_114")
    private String clientMdmId114;

    @Column(name = "name_id_115")
    private Integer nameId115;

    @Column(name = "parent_resv_name_id_116")
    private Integer parentResvNameId116;

    @Column(name = "contact_id_117")
    private Integer contactId117;

    @Column(name = "agence_id_118")
    private Integer agenceId118;

    @Column(name = "agence_nom_119")
    private String agenceNom119;

    @Column(name = "societe_id_120")
    private Integer societeId120;

    @Column(name = "groupe_id_121")
    private Integer groupeId121;

    @Column(name = "num_bloc_122")
    private Integer numBloc122;

    @Column(name = "type_resv_123")
    private String typeResv123;

    @Column(name = "statut_resv_124")
    private String statutResv124;

    @Column(name = "date_debut_resv_125")
    private LocalDate dateDebutResv125;

    @Column(name = "date_fin_resv_126")
    private LocalDate dateFinResv126;

    @Column(name = "trunc_date_debut_resv_127")
    private LocalDate truncDateDebutResv127;

    @Column(name = "trunc_date_fin_resv_128")
    private LocalDate truncDateFinResv128;

    @Column(name = "date_ann_resv_129")
    private LocalDate dateAnnResv129;

    @Column(name = "pseudo_room_yn_130")
    private String pseudoRoomYn130;

    @Column(name = "createur_resv_131")
    private Integer createurResv131;

    @Column(name = "nom_createur_resv_132")
    private String nomCreateurResv132;

    @Column(name = "code_garantie_133")
    private String codeGarantie133;

    @Column(name = "flg_ded_134")
    private String flgDed134;

    @Column(name = "code_pays_135")
    private String codePays135;

    @Column(name = "lib_pays_136")
    private String libPays136;

    @Column(name = "code_nationalite_137")
    private String codeNationalite137;

    @Column(name = "lib_nationalite_138")
    private String libNationalite138;

    @Column(name = "code_source_139")
    private String codeSource139;

    @Column(name = "lib_source_140")
    private String libSource140;

    @Column(name = "code_grand_source_141")
    private String codeGrandSource141;

    @Column(name = "code_origine_142")
    private String codeOrigine142;

    @Column(name = "lib_origine_143")
    private String libOrigine143;

    @Column(name = "code_marche_144")
    private String codeMarche144;

    @Column(name = "lib_marche_145")
    private String libMarche145;

    @Column(name = "code_grand_marche_146")
    private String codeGrandMarche146;

    @Column(name = "lib_grand_marche_147")
    private String libGrandMarche147;

    @Column(name = "code_prix_148")
    private String codePrix148;

    @Column(name = "categ_prix_149")
    private String categPrix149;

    @Column(name = "lib_prix_150")
    private String libPrix150;

    @Column(name = "num_chb_151")
    private String numChb151;

    @Column(name = "description_type_chb_152")
    private String descriptionTypeChb152;

    @Column(name = "code_type_chb_153")
    private String codeTypeChb153;

    @Column(name = "class_chb_154")
    private String classChb154;

    @Column(name = "caract_chb_155")
    private String caractChb155;

    @Column(name = "type_chb_de_reservation_156")
    private String typeChbDeReservation156;

    @Column(name = "description_type_chb_de_resv_157")
    private String descriptionTypeChbDeResv157;

    @Column(name = "code_type_chb_de_resv_158")
    private String codeTypeChbDeResv158;

    @Column(name = "statut_de_reservation_159")
    private String statutDeReservation159;

    @Column(name = "circuit_distribution_160")
    private String circuitDistribution160;

    @Column(name = "circuit_distrib_user_regroup_161")
    private String circuitDistribUserRegroup161;

    @Column(name = "num_crs_162")
    private String numCrs162;

    @Column(name = "type_ref_crs_163")
    private String typeRefCrs163;

    @Column(name = "crs_insert_date_164")
    private LocalDate crsInsertDate164;

    @Column(name = "date_crea_resv_165")
    private LocalDate dateCreaResv165;

    @Column(name = "date_premier_166")
    private LocalDate datePremier166;

    @Column(name = "statut_premier_167")
    private String statutPremier167;

    @Column(name = "date_dernier_168")
    private LocalDate dateDernier168;

    @Column(name = "statut_dernier_169")
    private String statutDernier169;

    @Column(name = "date_dernier_pseudo_170")
    private LocalDate dateDernierPseudo170;

    @Column(name = "statut_dernier_pseudo_171")
    private String statutDernierPseudo171;

    @Column(name = "diff_dt_crea_ann_172")
    private Integer diffDtCreaAnn172;

    @Column(name = "diff_dt_arr_ann_173")
    private Integer diffDtArrAnn173;

    @Column(name = "leadtime_174")
    private Integer leadtime174;

    @Column(name = "los_175")
    private Integer los175;

    @Column(name = "occupants_groupe_176")
    private String occupantsGroupe176;

    @Column(name = "nb_nuitee_177")
    private Integer nbNuitee177;

    @Column(name = "nb_nuitee_nn_ded_178")
    private Integer nbNuiteeNnDed178;

    @Column(name = "nb_resv_ann_179")
    private Integer nbResvAnn179;

    @Column(name = "nb_adu_180")
    private Integer nbAdu180;

    @Column(name = "nb_enf_181")
    private Integer nbEnf181;

    @Column(name = "nb_pers_day_u_182")
    private Integer nbPersDayU182;

    @Column(name = "nb_pers_arr_183")
    private Integer nbPersArr183;

    @Column(name = "nb_pers_dep_184")
    private Integer nbPersDep184;

    @Column(name = "nb_pers_ann_185")
    private Integer nbPersAnn185;

    @Column(name = "nb_pers_noshow_186")
    private Integer nbPersNoshow186;

    @Column(name = "nb_chb_day_u_187")
    private Integer nbChbDayU187;

    @Column(name = "nb_chb_arr_188")
    private Integer nbChbArr188;

    @Column(name = "nb_chb_dep_189")
    private Integer nbChbDep189;

    @Column(name = "nb_chb_ann_190")
    private Integer nbChbAnn190;

    @Column(name = "nb_chb_noshow_191")
    private Integer nbChbNoshow191;

    @Column(name = "revenu_net_chambre_192")
    private Long revenuNetChambre192;

    @Column(name = "revenu_taxe_chambre_193")
    private Long revenuTaxeChambre193;

    @Column(name = "revenu_net_chambre_global_194")
    private Long revenuNetChambreGlobal194;

    @Column(name = "revenu_taxe_chambre_global_195")
    private Long revenuTaxeChambreGlobal195;

    @Column(name = "revenu_net_bq_196")
    private Long revenuNetBq196;

    @Column(name = "revenu_taxe_bq_197")
    private Long revenuTaxeBq197;

    @Column(name = "revenu_net_bq_global_198")
    private Long revenuNetBqGlobal198;

    @Column(name = "revenu_taxe_bq_global_199")
    private Long revenuTaxeBqGlobal199;

    @Column(name = "revenu_net_extra_200")
    private Long revenuNetExtra200;

    @Column(name = "revenu_taxe_extra_201")
    private Long revenuTaxeExtra201;

    @Column(name = "revenu_net_extra_global_202")
    private Long revenuNetExtraGlobal202;

    @Column(name = "revenu_taxe_extra_global_203")
    private Long revenuTaxeExtraGlobal203;

    @Column(name = "revenu_net_total_204")
    private Long revenuNetTotal204;

    @Column(name = "revenu_taxe_total_205")
    private Long revenuTaxeTotal205;

    @Column(name = "revenu_net_total_global_206")
    private Long revenuNetTotalGlobal206;

    @Column(name = "revenu_taxe_total_global_207")
    private Long revenuTaxeTotalGlobal207;

    @Column(name = "prod_revenu_chambre_208")
    private Long prodRevenuChambre208;

    @Column(name = "prod_revenu_bq_209")
    private Long prodRevenuBq209;

    @Column(name = "prod_revenu_extra_210")
    private Long prodRevenuExtra210;

    @Column(name = "prod_revenu_total_211")
    private Long prodRevenuTotal211;

    @Column(name = "prod_chambre_nb_nuitees_212")
    private Long prodChambreNbNuitees212;

    @Column(name = "tech_create_date_213")
    private LocalDate techCreateDate213;

    @Column(name = "tech_update_date_214")
    private LocalDate techUpdateDate214;

    @Column(name = "num_ligne_215")
    private Integer numLigne215;

    @Column(name = "resort_216")
    private String resort216;

    @Column(name = "resv_name_id_217")
    private Integer resvNameId217;

    @Column(name = "client_o_id_218")
    private String clientOId218;

    @Column(name = "type_chb_219")
    private String typeChb219;

    @Column(name = "confirmation_no_220")
    private String confirmationNo220;

    @Column(name = "client_mdm_id_221")
    private String clientMdmId221;

    @Column(name = "name_id_222")
    private Integer nameId222;

    @Column(name = "parent_resv_name_id_223")
    private Integer parentResvNameId223;

    @Column(name = "contact_id_224")
    private Integer contactId224;

    @Column(name = "agence_id_225")
    private Integer agenceId225;

    @Column(name = "agence_nom_226")
    private String agenceNom226;

    @Column(name = "societe_id_227")
    private Integer societeId227;

    @Column(name = "groupe_id_228")
    private Integer groupeId228;

    @Column(name = "num_bloc_229")
    private Integer numBloc229;

    @Column(name = "type_resv_230")
    private String typeResv230;

    @Column(name = "statut_resv_231")
    private String statutResv231;

    @Column(name = "date_debut_resv_232")
    private LocalDate dateDebutResv232;

    @Column(name = "date_fin_resv_233")
    private LocalDate dateFinResv233;

    @Column(name = "trunc_date_debut_resv_234")
    private LocalDate truncDateDebutResv234;

    @Column(name = "trunc_date_fin_resv_235")
    private LocalDate truncDateFinResv235;

    @Column(name = "date_ann_resv_236")
    private LocalDate dateAnnResv236;

    @Column(name = "pseudo_room_yn_237")
    private String pseudoRoomYn237;

    @Column(name = "createur_resv_238")
    private Integer createurResv238;

    @Column(name = "nom_createur_resv_239")
    private String nomCreateurResv239;

    @Column(name = "code_garantie_240")
    private String codeGarantie240;

    @Column(name = "flg_ded_241")
    private String flgDed241;

    @Column(name = "code_pays_242")
    private String codePays242;

    @Column(name = "lib_pays_243")
    private String libPays243;

    @Column(name = "code_nationalite_244")
    private String codeNationalite244;

    @Column(name = "lib_nationalite_245")
    private String libNationalite245;

    @Column(name = "code_source_246")
    private String codeSource246;

    @Column(name = "lib_source_247")
    private String libSource247;

    @Column(name = "code_grand_source_248")
    private String codeGrandSource248;

    @Column(name = "code_origine_249")
    private String codeOrigine249;

    @Column(name = "lib_origine_250")
    private String libOrigine250;

    @Column(name = "code_marche_251")
    private String codeMarche251;

    @Column(name = "lib_marche_252")
    private String libMarche252;

    @Column(name = "code_grand_marche_253")
    private String codeGrandMarche253;

    @Column(name = "lib_grand_marche_254")
    private String libGrandMarche254;

    @Column(name = "code_prix_255")
    private String codePrix255;

    @Column(name = "categ_prix_256")
    private String categPrix256;

    @Column(name = "lib_prix_257")
    private String libPrix257;

    @Column(name = "num_chb_258")
    private String numChb258;

    @Column(name = "description_type_chb_259")
    private String descriptionTypeChb259;

    @Column(name = "code_type_chb_260")
    private String codeTypeChb260;

    @Column(name = "class_chb_261")
    private String classChb261;

    @Column(name = "caract_chb_262")
    private String caractChb262;

    @Column(name = "type_chb_de_reservation_263")
    private String typeChbDeReservation263;

    @Column(name = "description_type_chb_de_resv_264")
    private String descriptionTypeChbDeResv264;

    @Column(name = "code_type_chb_de_resv_265")
    private String codeTypeChbDeResv265;

    @Column(name = "statut_de_reservation_266")
    private String statutDeReservation266;

    @Column(name = "circuit_distribution_267")
    private String circuitDistribution267;

    @Column(name = "circuit_distrib_user_regroup_268")
    private String circuitDistribUserRegroup268;

    @Column(name = "num_crs_269")
    private String numCrs269;

    @Column(name = "type_ref_crs_270")
    private String typeRefCrs270;

    @Column(name = "crs_insert_date_271")
    private LocalDate crsInsertDate271;

    @Column(name = "date_crea_resv_272")
    private LocalDate dateCreaResv272;

    @Column(name = "date_premier_273")
    private LocalDate datePremier273;

    @Column(name = "statut_premier_274")
    private String statutPremier274;

    @Column(name = "date_dernier_275")
    private LocalDate dateDernier275;

    @Column(name = "statut_dernier_276")
    private String statutDernier276;

    @Column(name = "date_dernier_pseudo_277")
    private LocalDate dateDernierPseudo277;

    @Column(name = "statut_dernier_pseudo_278")
    private String statutDernierPseudo278;

    @Column(name = "diff_dt_crea_ann_279")
    private Integer diffDtCreaAnn279;

    @Column(name = "diff_dt_arr_ann_280")
    private Integer diffDtArrAnn280;

    @Column(name = "leadtime_281")
    private Integer leadtime281;

    @Column(name = "los_282")
    private Integer los282;

    @Column(name = "occupants_groupe_283")
    private String occupantsGroupe283;

    @Column(name = "nb_nuitee_284")
    private Integer nbNuitee284;

    @Column(name = "nb_nuitee_nn_ded_285")
    private Integer nbNuiteeNnDed285;

    @Column(name = "nb_resv_ann_286")
    private Integer nbResvAnn286;

    @Column(name = "nb_adu_287")
    private Integer nbAdu287;

    @Column(name = "nb_enf_288")
    private Integer nbEnf288;

    @Column(name = "nb_pers_day_u_289")
    private Integer nbPersDayU289;

    @Column(name = "nb_pers_arr_290")
    private Integer nbPersArr290;

    @Column(name = "nb_pers_dep_291")
    private Integer nbPersDep291;

    @Column(name = "nb_pers_ann_292")
    private Integer nbPersAnn292;

    @Column(name = "nb_pers_noshow_293")
    private Integer nbPersNoshow293;

    @Column(name = "nb_chb_day_u_294")
    private Integer nbChbDayU294;

    @Column(name = "nb_chb_arr_295")
    private Integer nbChbArr295;

    @Column(name = "nb_chb_dep_296")
    private Integer nbChbDep296;

    @Column(name = "nb_chb_ann_297")
    private Integer nbChbAnn297;

    @Column(name = "nb_chb_noshow_298")
    private Integer nbChbNoshow298;

    @Column(name = "revenu_net_chambre_299")
    private Long revenuNetChambre299;

    @Column(name = "revenu_taxe_chambre_300")
    private Long revenuTaxeChambre300;

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public Long getId() {
        return this.id;
    }

    public DmOResv id(Long id) {
        this.setId(id);
        return this;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getNumLigne1() {
        return this.numLigne1;
    }

    public DmOResv numLigne1(Integer numLigne1) {
        this.setNumLigne1(numLigne1);
        return this;
    }

    public void setNumLigne1(Integer numLigne1) {
        this.numLigne1 = numLigne1;
    }

    public String getResort2() {
        return this.resort2;
    }

    public DmOResv resort2(String resort2) {
        this.setResort2(resort2);
        return this;
    }

    public void setResort2(String resort2) {
        this.resort2 = resort2;
    }

    public Integer getResvNameId3() {
        return this.resvNameId3;
    }

    public DmOResv resvNameId3(Integer resvNameId3) {
        this.setResvNameId3(resvNameId3);
        return this;
    }

    public void setResvNameId3(Integer resvNameId3) {
        this.resvNameId3 = resvNameId3;
    }

    public String getClientOId4() {
        return this.clientOId4;
    }

    public DmOResv clientOId4(String clientOId4) {
        this.setClientOId4(clientOId4);
        return this;
    }

    public void setClientOId4(String clientOId4) {
        this.clientOId4 = clientOId4;
    }

    public String getTypeChb5() {
        return this.typeChb5;
    }

    public DmOResv typeChb5(String typeChb5) {
        this.setTypeChb5(typeChb5);
        return this;
    }

    public void setTypeChb5(String typeChb5) {
        this.typeChb5 = typeChb5;
    }

    public String getConfirmationNo6() {
        return this.confirmationNo6;
    }

    public DmOResv confirmationNo6(String confirmationNo6) {
        this.setConfirmationNo6(confirmationNo6);
        return this;
    }

    public void setConfirmationNo6(String confirmationNo6) {
        this.confirmationNo6 = confirmationNo6;
    }

    public String getClientMdmId7() {
        return this.clientMdmId7;
    }

    public DmOResv clientMdmId7(String clientMdmId7) {
        this.setClientMdmId7(clientMdmId7);
        return this;
    }

    public void setClientMdmId7(String clientMdmId7) {
        this.clientMdmId7 = clientMdmId7;
    }

    public Integer getNameId8() {
        return this.nameId8;
    }

    public DmOResv nameId8(Integer nameId8) {
        this.setNameId8(nameId8);
        return this;
    }

    public void setNameId8(Integer nameId8) {
        this.nameId8 = nameId8;
    }

    public Integer getParentResvNameId9() {
        return this.parentResvNameId9;
    }

    public DmOResv parentResvNameId9(Integer parentResvNameId9) {
        this.setParentResvNameId9(parentResvNameId9);
        return this;
    }

    public void setParentResvNameId9(Integer parentResvNameId9) {
        this.parentResvNameId9 = parentResvNameId9;
    }

    public Integer getContactId10() {
        return this.contactId10;
    }

    public DmOResv contactId10(Integer contactId10) {
        this.setContactId10(contactId10);
        return this;
    }

    public void setContactId10(Integer contactId10) {
        this.contactId10 = contactId10;
    }

    public Integer getAgenceId11() {
        return this.agenceId11;
    }

    public DmOResv agenceId11(Integer agenceId11) {
        this.setAgenceId11(agenceId11);
        return this;
    }

    public void setAgenceId11(Integer agenceId11) {
        this.agenceId11 = agenceId11;
    }

    public String getAgenceNom12() {
        return this.agenceNom12;
    }

    public DmOResv agenceNom12(String agenceNom12) {
        this.setAgenceNom12(agenceNom12);
        return this;
    }

    public void setAgenceNom12(String agenceNom12) {
        this.agenceNom12 = agenceNom12;
    }

    public Integer getSocieteId13() {
        return this.societeId13;
    }

    public DmOResv societeId13(Integer societeId13) {
        this.setSocieteId13(societeId13);
        return this;
    }

    public void setSocieteId13(Integer societeId13) {
        this.societeId13 = societeId13;
    }

    public Integer getGroupeId14() {
        return this.groupeId14;
    }

    public DmOResv groupeId14(Integer groupeId14) {
        this.setGroupeId14(groupeId14);
        return this;
    }

    public void setGroupeId14(Integer groupeId14) {
        this.groupeId14 = groupeId14;
    }

    public Integer getNumBloc15() {
        return this.numBloc15;
    }

    public DmOResv numBloc15(Integer numBloc15) {
        this.setNumBloc15(numBloc15);
        return this;
    }

    public void setNumBloc15(Integer numBloc15) {
        this.numBloc15 = numBloc15;
    }

    public String getTypeResv16() {
        return this.typeResv16;
    }

    public DmOResv typeResv16(String typeResv16) {
        this.setTypeResv16(typeResv16);
        return this;
    }

    public void setTypeResv16(String typeResv16) {
        this.typeResv16 = typeResv16;
    }

    public String getStatutResv17() {
        return this.statutResv17;
    }

    public DmOResv statutResv17(String statutResv17) {
        this.setStatutResv17(statutResv17);
        return this;
    }

    public void setStatutResv17(String statutResv17) {
        this.statutResv17 = statutResv17;
    }

    public LocalDate getDateDebutResv18() {
        return this.dateDebutResv18;
    }

    public DmOResv dateDebutResv18(LocalDate dateDebutResv18) {
        this.setDateDebutResv18(dateDebutResv18);
        return this;
    }

    public void setDateDebutResv18(LocalDate dateDebutResv18) {
        this.dateDebutResv18 = dateDebutResv18;
    }

    public LocalDate getDateFinResv19() {
        return this.dateFinResv19;
    }

    public DmOResv dateFinResv19(LocalDate dateFinResv19) {
        this.setDateFinResv19(dateFinResv19);
        return this;
    }

    public void setDateFinResv19(LocalDate dateFinResv19) {
        this.dateFinResv19 = dateFinResv19;
    }

    public LocalDate getTruncDateDebutResv20() {
        return this.truncDateDebutResv20;
    }

    public DmOResv truncDateDebutResv20(LocalDate truncDateDebutResv20) {
        this.setTruncDateDebutResv20(truncDateDebutResv20);
        return this;
    }

    public void setTruncDateDebutResv20(LocalDate truncDateDebutResv20) {
        this.truncDateDebutResv20 = truncDateDebutResv20;
    }

    public LocalDate getTruncDateFinResv21() {
        return this.truncDateFinResv21;
    }

    public DmOResv truncDateFinResv21(LocalDate truncDateFinResv21) {
        this.setTruncDateFinResv21(truncDateFinResv21);
        return this;
    }

    public void setTruncDateFinResv21(LocalDate truncDateFinResv21) {
        this.truncDateFinResv21 = truncDateFinResv21;
    }

    public LocalDate getDateAnnResv22() {
        return this.dateAnnResv22;
    }

    public DmOResv dateAnnResv22(LocalDate dateAnnResv22) {
        this.setDateAnnResv22(dateAnnResv22);
        return this;
    }

    public void setDateAnnResv22(LocalDate dateAnnResv22) {
        this.dateAnnResv22 = dateAnnResv22;
    }

    public String getPseudoRoomYn23() {
        return this.pseudoRoomYn23;
    }

    public DmOResv pseudoRoomYn23(String pseudoRoomYn23) {
        this.setPseudoRoomYn23(pseudoRoomYn23);
        return this;
    }

    public void setPseudoRoomYn23(String pseudoRoomYn23) {
        this.pseudoRoomYn23 = pseudoRoomYn23;
    }

    public Integer getCreateurResv24() {
        return this.createurResv24;
    }

    public DmOResv createurResv24(Integer createurResv24) {
        this.setCreateurResv24(createurResv24);
        return this;
    }

    public void setCreateurResv24(Integer createurResv24) {
        this.createurResv24 = createurResv24;
    }

    public String getNomCreateurResv25() {
        return this.nomCreateurResv25;
    }

    public DmOResv nomCreateurResv25(String nomCreateurResv25) {
        this.setNomCreateurResv25(nomCreateurResv25);
        return this;
    }

    public void setNomCreateurResv25(String nomCreateurResv25) {
        this.nomCreateurResv25 = nomCreateurResv25;
    }

    public String getCodeGarantie26() {
        return this.codeGarantie26;
    }

    public DmOResv codeGarantie26(String codeGarantie26) {
        this.setCodeGarantie26(codeGarantie26);
        return this;
    }

    public void setCodeGarantie26(String codeGarantie26) {
        this.codeGarantie26 = codeGarantie26;
    }

    public String getFlgDed27() {
        return this.flgDed27;
    }

    public DmOResv flgDed27(String flgDed27) {
        this.setFlgDed27(flgDed27);
        return this;
    }

    public void setFlgDed27(String flgDed27) {
        this.flgDed27 = flgDed27;
    }

    public String getCodePays28() {
        return this.codePays28;
    }

    public DmOResv codePays28(String codePays28) {
        this.setCodePays28(codePays28);
        return this;
    }

    public void setCodePays28(String codePays28) {
        this.codePays28 = codePays28;
    }

    public String getLibPays29() {
        return this.libPays29;
    }

    public DmOResv libPays29(String libPays29) {
        this.setLibPays29(libPays29);
        return this;
    }

    public void setLibPays29(String libPays29) {
        this.libPays29 = libPays29;
    }

    public String getCodeNationalite30() {
        return this.codeNationalite30;
    }

    public DmOResv codeNationalite30(String codeNationalite30) {
        this.setCodeNationalite30(codeNationalite30);
        return this;
    }

    public void setCodeNationalite30(String codeNationalite30) {
        this.codeNationalite30 = codeNationalite30;
    }

    public String getLibNationalite31() {
        return this.libNationalite31;
    }

    public DmOResv libNationalite31(String libNationalite31) {
        this.setLibNationalite31(libNationalite31);
        return this;
    }

    public void setLibNationalite31(String libNationalite31) {
        this.libNationalite31 = libNationalite31;
    }

    public String getCodeSource32() {
        return this.codeSource32;
    }

    public DmOResv codeSource32(String codeSource32) {
        this.setCodeSource32(codeSource32);
        return this;
    }

    public void setCodeSource32(String codeSource32) {
        this.codeSource32 = codeSource32;
    }

    public String getLibSource33() {
        return this.libSource33;
    }

    public DmOResv libSource33(String libSource33) {
        this.setLibSource33(libSource33);
        return this;
    }

    public void setLibSource33(String libSource33) {
        this.libSource33 = libSource33;
    }

    public String getCodeGrandSource34() {
        return this.codeGrandSource34;
    }

    public DmOResv codeGrandSource34(String codeGrandSource34) {
        this.setCodeGrandSource34(codeGrandSource34);
        return this;
    }

    public void setCodeGrandSource34(String codeGrandSource34) {
        this.codeGrandSource34 = codeGrandSource34;
    }

    public String getCodeOrigine35() {
        return this.codeOrigine35;
    }

    public DmOResv codeOrigine35(String codeOrigine35) {
        this.setCodeOrigine35(codeOrigine35);
        return this;
    }

    public void setCodeOrigine35(String codeOrigine35) {
        this.codeOrigine35 = codeOrigine35;
    }

    public String getLibOrigine36() {
        return this.libOrigine36;
    }

    public DmOResv libOrigine36(String libOrigine36) {
        this.setLibOrigine36(libOrigine36);
        return this;
    }

    public void setLibOrigine36(String libOrigine36) {
        this.libOrigine36 = libOrigine36;
    }

    public String getCodeMarche37() {
        return this.codeMarche37;
    }

    public DmOResv codeMarche37(String codeMarche37) {
        this.setCodeMarche37(codeMarche37);
        return this;
    }

    public void setCodeMarche37(String codeMarche37) {
        this.codeMarche37 = codeMarche37;
    }

    public String getLibMarche38() {
        return this.libMarche38;
    }

    public DmOResv libMarche38(String libMarche38) {
        this.setLibMarche38(libMarche38);
        return this;
    }

    public void setLibMarche38(String libMarche38) {
        this.libMarche38 = libMarche38;
    }

    public String getCodeGrandMarche39() {
        return this.codeGrandMarche39;
    }

    public DmOResv codeGrandMarche39(String codeGrandMarche39) {
        this.setCodeGrandMarche39(codeGrandMarche39);
        return this;
    }

    public void setCodeGrandMarche39(String codeGrandMarche39) {
        this.codeGrandMarche39 = codeGrandMarche39;
    }

    public String getLibGrandMarche40() {
        return this.libGrandMarche40;
    }

    public DmOResv libGrandMarche40(String libGrandMarche40) {
        this.setLibGrandMarche40(libGrandMarche40);
        return this;
    }

    public void setLibGrandMarche40(String libGrandMarche40) {
        this.libGrandMarche40 = libGrandMarche40;
    }

    public String getCodePrix41() {
        return this.codePrix41;
    }

    public DmOResv codePrix41(String codePrix41) {
        this.setCodePrix41(codePrix41);
        return this;
    }

    public void setCodePrix41(String codePrix41) {
        this.codePrix41 = codePrix41;
    }

    public String getCategPrix42() {
        return this.categPrix42;
    }

    public DmOResv categPrix42(String categPrix42) {
        this.setCategPrix42(categPrix42);
        return this;
    }

    public void setCategPrix42(String categPrix42) {
        this.categPrix42 = categPrix42;
    }

    public String getLibPrix43() {
        return this.libPrix43;
    }

    public DmOResv libPrix43(String libPrix43) {
        this.setLibPrix43(libPrix43);
        return this;
    }

    public void setLibPrix43(String libPrix43) {
        this.libPrix43 = libPrix43;
    }

    public String getNumChb44() {
        return this.numChb44;
    }

    public DmOResv numChb44(String numChb44) {
        this.setNumChb44(numChb44);
        return this;
    }

    public void setNumChb44(String numChb44) {
        this.numChb44 = numChb44;
    }

    public String getDescriptionTypeChb45() {
        return this.descriptionTypeChb45;
    }

    public DmOResv descriptionTypeChb45(String descriptionTypeChb45) {
        this.setDescriptionTypeChb45(descriptionTypeChb45);
        return this;
    }

    public void setDescriptionTypeChb45(String descriptionTypeChb45) {
        this.descriptionTypeChb45 = descriptionTypeChb45;
    }

    public String getCodeTypeChb46() {
        return this.codeTypeChb46;
    }

    public DmOResv codeTypeChb46(String codeTypeChb46) {
        this.setCodeTypeChb46(codeTypeChb46);
        return this;
    }

    public void setCodeTypeChb46(String codeTypeChb46) {
        this.codeTypeChb46 = codeTypeChb46;
    }

    public String getClassChb47() {
        return this.classChb47;
    }

    public DmOResv classChb47(String classChb47) {
        this.setClassChb47(classChb47);
        return this;
    }

    public void setClassChb47(String classChb47) {
        this.classChb47 = classChb47;
    }

    public String getCaractChb48() {
        return this.caractChb48;
    }

    public DmOResv caractChb48(String caractChb48) {
        this.setCaractChb48(caractChb48);
        return this;
    }

    public void setCaractChb48(String caractChb48) {
        this.caractChb48 = caractChb48;
    }

    public String getTypeChbDeReservation49() {
        return this.typeChbDeReservation49;
    }

    public DmOResv typeChbDeReservation49(String typeChbDeReservation49) {
        this.setTypeChbDeReservation49(typeChbDeReservation49);
        return this;
    }

    public void setTypeChbDeReservation49(String typeChbDeReservation49) {
        this.typeChbDeReservation49 = typeChbDeReservation49;
    }

    public String getDescriptionTypeChbDeResv50() {
        return this.descriptionTypeChbDeResv50;
    }

    public DmOResv descriptionTypeChbDeResv50(String descriptionTypeChbDeResv50) {
        this.setDescriptionTypeChbDeResv50(descriptionTypeChbDeResv50);
        return this;
    }

    public void setDescriptionTypeChbDeResv50(String descriptionTypeChbDeResv50) {
        this.descriptionTypeChbDeResv50 = descriptionTypeChbDeResv50;
    }

    public String getCodeTypeChbDeResv51() {
        return this.codeTypeChbDeResv51;
    }

    public DmOResv codeTypeChbDeResv51(String codeTypeChbDeResv51) {
        this.setCodeTypeChbDeResv51(codeTypeChbDeResv51);
        return this;
    }

    public void setCodeTypeChbDeResv51(String codeTypeChbDeResv51) {
        this.codeTypeChbDeResv51 = codeTypeChbDeResv51;
    }

    public String getStatutDeReservation52() {
        return this.statutDeReservation52;
    }

    public DmOResv statutDeReservation52(String statutDeReservation52) {
        this.setStatutDeReservation52(statutDeReservation52);
        return this;
    }

    public void setStatutDeReservation52(String statutDeReservation52) {
        this.statutDeReservation52 = statutDeReservation52;
    }

    public String getCircuitDistribution53() {
        return this.circuitDistribution53;
    }

    public DmOResv circuitDistribution53(String circuitDistribution53) {
        this.setCircuitDistribution53(circuitDistribution53);
        return this;
    }

    public void setCircuitDistribution53(String circuitDistribution53) {
        this.circuitDistribution53 = circuitDistribution53;
    }

    public String getCircuitDistribUserRegroup54() {
        return this.circuitDistribUserRegroup54;
    }

    public DmOResv circuitDistribUserRegroup54(String circuitDistribUserRegroup54) {
        this.setCircuitDistribUserRegroup54(circuitDistribUserRegroup54);
        return this;
    }

    public void setCircuitDistribUserRegroup54(String circuitDistribUserRegroup54) {
        this.circuitDistribUserRegroup54 = circuitDistribUserRegroup54;
    }

    public String getNumCrs55() {
        return this.numCrs55;
    }

    public DmOResv numCrs55(String numCrs55) {
        this.setNumCrs55(numCrs55);
        return this;
    }

    public void setNumCrs55(String numCrs55) {
        this.numCrs55 = numCrs55;
    }

    public String getTypeRefCrs56() {
        return this.typeRefCrs56;
    }

    public DmOResv typeRefCrs56(String typeRefCrs56) {
        this.setTypeRefCrs56(typeRefCrs56);
        return this;
    }

    public void setTypeRefCrs56(String typeRefCrs56) {
        this.typeRefCrs56 = typeRefCrs56;
    }

    public LocalDate getCrsInsertDate57() {
        return this.crsInsertDate57;
    }

    public DmOResv crsInsertDate57(LocalDate crsInsertDate57) {
        this.setCrsInsertDate57(crsInsertDate57);
        return this;
    }

    public void setCrsInsertDate57(LocalDate crsInsertDate57) {
        this.crsInsertDate57 = crsInsertDate57;
    }

    public LocalDate getDateCreaResv58() {
        return this.dateCreaResv58;
    }

    public DmOResv dateCreaResv58(LocalDate dateCreaResv58) {
        this.setDateCreaResv58(dateCreaResv58);
        return this;
    }

    public void setDateCreaResv58(LocalDate dateCreaResv58) {
        this.dateCreaResv58 = dateCreaResv58;
    }

    public LocalDate getDatePremier59() {
        return this.datePremier59;
    }

    public DmOResv datePremier59(LocalDate datePremier59) {
        this.setDatePremier59(datePremier59);
        return this;
    }

    public void setDatePremier59(LocalDate datePremier59) {
        this.datePremier59 = datePremier59;
    }

    public String getStatutPremier60() {
        return this.statutPremier60;
    }

    public DmOResv statutPremier60(String statutPremier60) {
        this.setStatutPremier60(statutPremier60);
        return this;
    }

    public void setStatutPremier60(String statutPremier60) {
        this.statutPremier60 = statutPremier60;
    }

    public LocalDate getDateDernier61() {
        return this.dateDernier61;
    }

    public DmOResv dateDernier61(LocalDate dateDernier61) {
        this.setDateDernier61(dateDernier61);
        return this;
    }

    public void setDateDernier61(LocalDate dateDernier61) {
        this.dateDernier61 = dateDernier61;
    }

    public String getStatutDernier62() {
        return this.statutDernier62;
    }

    public DmOResv statutDernier62(String statutDernier62) {
        this.setStatutDernier62(statutDernier62);
        return this;
    }

    public void setStatutDernier62(String statutDernier62) {
        this.statutDernier62 = statutDernier62;
    }

    public LocalDate getDateDernierPseudo63() {
        return this.dateDernierPseudo63;
    }

    public DmOResv dateDernierPseudo63(LocalDate dateDernierPseudo63) {
        this.setDateDernierPseudo63(dateDernierPseudo63);
        return this;
    }

    public void setDateDernierPseudo63(LocalDate dateDernierPseudo63) {
        this.dateDernierPseudo63 = dateDernierPseudo63;
    }

    public String getStatutDernierPseudo64() {
        return this.statutDernierPseudo64;
    }

    public DmOResv statutDernierPseudo64(String statutDernierPseudo64) {
        this.setStatutDernierPseudo64(statutDernierPseudo64);
        return this;
    }

    public void setStatutDernierPseudo64(String statutDernierPseudo64) {
        this.statutDernierPseudo64 = statutDernierPseudo64;
    }

    public Integer getDiffDtCreaAnn65() {
        return this.diffDtCreaAnn65;
    }

    public DmOResv diffDtCreaAnn65(Integer diffDtCreaAnn65) {
        this.setDiffDtCreaAnn65(diffDtCreaAnn65);
        return this;
    }

    public void setDiffDtCreaAnn65(Integer diffDtCreaAnn65) {
        this.diffDtCreaAnn65 = diffDtCreaAnn65;
    }

    public Integer getDiffDtArrAnn66() {
        return this.diffDtArrAnn66;
    }

    public DmOResv diffDtArrAnn66(Integer diffDtArrAnn66) {
        this.setDiffDtArrAnn66(diffDtArrAnn66);
        return this;
    }

    public void setDiffDtArrAnn66(Integer diffDtArrAnn66) {
        this.diffDtArrAnn66 = diffDtArrAnn66;
    }

    public Integer getLeadtime67() {
        return this.leadtime67;
    }

    public DmOResv leadtime67(Integer leadtime67) {
        this.setLeadtime67(leadtime67);
        return this;
    }

    public void setLeadtime67(Integer leadtime67) {
        this.leadtime67 = leadtime67;
    }

    public Integer getLos68() {
        return this.los68;
    }

    public DmOResv los68(Integer los68) {
        this.setLos68(los68);
        return this;
    }

    public void setLos68(Integer los68) {
        this.los68 = los68;
    }

    public String getOccupantsGroupe69() {
        return this.occupantsGroupe69;
    }

    public DmOResv occupantsGroupe69(String occupantsGroupe69) {
        this.setOccupantsGroupe69(occupantsGroupe69);
        return this;
    }

    public void setOccupantsGroupe69(String occupantsGroupe69) {
        this.occupantsGroupe69 = occupantsGroupe69;
    }

    public Integer getNbNuitee70() {
        return this.nbNuitee70;
    }

    public DmOResv nbNuitee70(Integer nbNuitee70) {
        this.setNbNuitee70(nbNuitee70);
        return this;
    }

    public void setNbNuitee70(Integer nbNuitee70) {
        this.nbNuitee70 = nbNuitee70;
    }

    public Integer getNbNuiteeNnDed71() {
        return this.nbNuiteeNnDed71;
    }

    public DmOResv nbNuiteeNnDed71(Integer nbNuiteeNnDed71) {
        this.setNbNuiteeNnDed71(nbNuiteeNnDed71);
        return this;
    }

    public void setNbNuiteeNnDed71(Integer nbNuiteeNnDed71) {
        this.nbNuiteeNnDed71 = nbNuiteeNnDed71;
    }

    public Integer getNbResvAnn72() {
        return this.nbResvAnn72;
    }

    public DmOResv nbResvAnn72(Integer nbResvAnn72) {
        this.setNbResvAnn72(nbResvAnn72);
        return this;
    }

    public void setNbResvAnn72(Integer nbResvAnn72) {
        this.nbResvAnn72 = nbResvAnn72;
    }

    public Integer getNbAdu73() {
        return this.nbAdu73;
    }

    public DmOResv nbAdu73(Integer nbAdu73) {
        this.setNbAdu73(nbAdu73);
        return this;
    }

    public void setNbAdu73(Integer nbAdu73) {
        this.nbAdu73 = nbAdu73;
    }

    public Integer getNbEnf74() {
        return this.nbEnf74;
    }

    public DmOResv nbEnf74(Integer nbEnf74) {
        this.setNbEnf74(nbEnf74);
        return this;
    }

    public void setNbEnf74(Integer nbEnf74) {
        this.nbEnf74 = nbEnf74;
    }

    public Integer getNbPersDayU75() {
        return this.nbPersDayU75;
    }

    public DmOResv nbPersDayU75(Integer nbPersDayU75) {
        this.setNbPersDayU75(nbPersDayU75);
        return this;
    }

    public void setNbPersDayU75(Integer nbPersDayU75) {
        this.nbPersDayU75 = nbPersDayU75;
    }

    public Integer getNbPersArr76() {
        return this.nbPersArr76;
    }

    public DmOResv nbPersArr76(Integer nbPersArr76) {
        this.setNbPersArr76(nbPersArr76);
        return this;
    }

    public void setNbPersArr76(Integer nbPersArr76) {
        this.nbPersArr76 = nbPersArr76;
    }

    public Integer getNbPersDep77() {
        return this.nbPersDep77;
    }

    public DmOResv nbPersDep77(Integer nbPersDep77) {
        this.setNbPersDep77(nbPersDep77);
        return this;
    }

    public void setNbPersDep77(Integer nbPersDep77) {
        this.nbPersDep77 = nbPersDep77;
    }

    public Integer getNbPersAnn78() {
        return this.nbPersAnn78;
    }

    public DmOResv nbPersAnn78(Integer nbPersAnn78) {
        this.setNbPersAnn78(nbPersAnn78);
        return this;
    }

    public void setNbPersAnn78(Integer nbPersAnn78) {
        this.nbPersAnn78 = nbPersAnn78;
    }

    public Integer getNbPersNoshow79() {
        return this.nbPersNoshow79;
    }

    public DmOResv nbPersNoshow79(Integer nbPersNoshow79) {
        this.setNbPersNoshow79(nbPersNoshow79);
        return this;
    }

    public void setNbPersNoshow79(Integer nbPersNoshow79) {
        this.nbPersNoshow79 = nbPersNoshow79;
    }

    public Integer getNbChbDayU80() {
        return this.nbChbDayU80;
    }

    public DmOResv nbChbDayU80(Integer nbChbDayU80) {
        this.setNbChbDayU80(nbChbDayU80);
        return this;
    }

    public void setNbChbDayU80(Integer nbChbDayU80) {
        this.nbChbDayU80 = nbChbDayU80;
    }

    public Integer getNbChbArr81() {
        return this.nbChbArr81;
    }

    public DmOResv nbChbArr81(Integer nbChbArr81) {
        this.setNbChbArr81(nbChbArr81);
        return this;
    }

    public void setNbChbArr81(Integer nbChbArr81) {
        this.nbChbArr81 = nbChbArr81;
    }

    public Integer getNbChbDep82() {
        return this.nbChbDep82;
    }

    public DmOResv nbChbDep82(Integer nbChbDep82) {
        this.setNbChbDep82(nbChbDep82);
        return this;
    }

    public void setNbChbDep82(Integer nbChbDep82) {
        this.nbChbDep82 = nbChbDep82;
    }

    public Integer getNbChbAnn83() {
        return this.nbChbAnn83;
    }

    public DmOResv nbChbAnn83(Integer nbChbAnn83) {
        this.setNbChbAnn83(nbChbAnn83);
        return this;
    }

    public void setNbChbAnn83(Integer nbChbAnn83) {
        this.nbChbAnn83 = nbChbAnn83;
    }

    public Integer getNbChbNoshow84() {
        return this.nbChbNoshow84;
    }

    public DmOResv nbChbNoshow84(Integer nbChbNoshow84) {
        this.setNbChbNoshow84(nbChbNoshow84);
        return this;
    }

    public void setNbChbNoshow84(Integer nbChbNoshow84) {
        this.nbChbNoshow84 = nbChbNoshow84;
    }

    public Long getRevenuNetChambre85() {
        return this.revenuNetChambre85;
    }

    public DmOResv revenuNetChambre85(Long revenuNetChambre85) {
        this.setRevenuNetChambre85(revenuNetChambre85);
        return this;
    }

    public void setRevenuNetChambre85(Long revenuNetChambre85) {
        this.revenuNetChambre85 = revenuNetChambre85;
    }

    public Long getRevenuTaxeChambre86() {
        return this.revenuTaxeChambre86;
    }

    public DmOResv revenuTaxeChambre86(Long revenuTaxeChambre86) {
        this.setRevenuTaxeChambre86(revenuTaxeChambre86);
        return this;
    }

    public void setRevenuTaxeChambre86(Long revenuTaxeChambre86) {
        this.revenuTaxeChambre86 = revenuTaxeChambre86;
    }

    public Long getRevenuNetChambreGlobal87() {
        return this.revenuNetChambreGlobal87;
    }

    public DmOResv revenuNetChambreGlobal87(Long revenuNetChambreGlobal87) {
        this.setRevenuNetChambreGlobal87(revenuNetChambreGlobal87);
        return this;
    }

    public void setRevenuNetChambreGlobal87(Long revenuNetChambreGlobal87) {
        this.revenuNetChambreGlobal87 = revenuNetChambreGlobal87;
    }

    public Long getRevenuTaxeChambreGlobal88() {
        return this.revenuTaxeChambreGlobal88;
    }

    public DmOResv revenuTaxeChambreGlobal88(Long revenuTaxeChambreGlobal88) {
        this.setRevenuTaxeChambreGlobal88(revenuTaxeChambreGlobal88);
        return this;
    }

    public void setRevenuTaxeChambreGlobal88(Long revenuTaxeChambreGlobal88) {
        this.revenuTaxeChambreGlobal88 = revenuTaxeChambreGlobal88;
    }

    public Long getRevenuNetBq89() {
        return this.revenuNetBq89;
    }

    public DmOResv revenuNetBq89(Long revenuNetBq89) {
        this.setRevenuNetBq89(revenuNetBq89);
        return this;
    }

    public void setRevenuNetBq89(Long revenuNetBq89) {
        this.revenuNetBq89 = revenuNetBq89;
    }

    public Long getRevenuTaxeBq90() {
        return this.revenuTaxeBq90;
    }

    public DmOResv revenuTaxeBq90(Long revenuTaxeBq90) {
        this.setRevenuTaxeBq90(revenuTaxeBq90);
        return this;
    }

    public void setRevenuTaxeBq90(Long revenuTaxeBq90) {
        this.revenuTaxeBq90 = revenuTaxeBq90;
    }

    public Long getRevenuNetBqGlobal91() {
        return this.revenuNetBqGlobal91;
    }

    public DmOResv revenuNetBqGlobal91(Long revenuNetBqGlobal91) {
        this.setRevenuNetBqGlobal91(revenuNetBqGlobal91);
        return this;
    }

    public void setRevenuNetBqGlobal91(Long revenuNetBqGlobal91) {
        this.revenuNetBqGlobal91 = revenuNetBqGlobal91;
    }

    public Long getRevenuTaxeBqGlobal92() {
        return this.revenuTaxeBqGlobal92;
    }

    public DmOResv revenuTaxeBqGlobal92(Long revenuTaxeBqGlobal92) {
        this.setRevenuTaxeBqGlobal92(revenuTaxeBqGlobal92);
        return this;
    }

    public void setRevenuTaxeBqGlobal92(Long revenuTaxeBqGlobal92) {
        this.revenuTaxeBqGlobal92 = revenuTaxeBqGlobal92;
    }

    public Long getRevenuNetExtra93() {
        return this.revenuNetExtra93;
    }

    public DmOResv revenuNetExtra93(Long revenuNetExtra93) {
        this.setRevenuNetExtra93(revenuNetExtra93);
        return this;
    }

    public void setRevenuNetExtra93(Long revenuNetExtra93) {
        this.revenuNetExtra93 = revenuNetExtra93;
    }

    public Long getRevenuTaxeExtra94() {
        return this.revenuTaxeExtra94;
    }

    public DmOResv revenuTaxeExtra94(Long revenuTaxeExtra94) {
        this.setRevenuTaxeExtra94(revenuTaxeExtra94);
        return this;
    }

    public void setRevenuTaxeExtra94(Long revenuTaxeExtra94) {
        this.revenuTaxeExtra94 = revenuTaxeExtra94;
    }

    public Long getRevenuNetExtraGlobal95() {
        return this.revenuNetExtraGlobal95;
    }

    public DmOResv revenuNetExtraGlobal95(Long revenuNetExtraGlobal95) {
        this.setRevenuNetExtraGlobal95(revenuNetExtraGlobal95);
        return this;
    }

    public void setRevenuNetExtraGlobal95(Long revenuNetExtraGlobal95) {
        this.revenuNetExtraGlobal95 = revenuNetExtraGlobal95;
    }

    public Long getRevenuTaxeExtraGlobal96() {
        return this.revenuTaxeExtraGlobal96;
    }

    public DmOResv revenuTaxeExtraGlobal96(Long revenuTaxeExtraGlobal96) {
        this.setRevenuTaxeExtraGlobal96(revenuTaxeExtraGlobal96);
        return this;
    }

    public void setRevenuTaxeExtraGlobal96(Long revenuTaxeExtraGlobal96) {
        this.revenuTaxeExtraGlobal96 = revenuTaxeExtraGlobal96;
    }

    public Long getRevenuNetTotal97() {
        return this.revenuNetTotal97;
    }

    public DmOResv revenuNetTotal97(Long revenuNetTotal97) {
        this.setRevenuNetTotal97(revenuNetTotal97);
        return this;
    }

    public void setRevenuNetTotal97(Long revenuNetTotal97) {
        this.revenuNetTotal97 = revenuNetTotal97;
    }

    public Long getRevenuTaxeTotal98() {
        return this.revenuTaxeTotal98;
    }

    public DmOResv revenuTaxeTotal98(Long revenuTaxeTotal98) {
        this.setRevenuTaxeTotal98(revenuTaxeTotal98);
        return this;
    }

    public void setRevenuTaxeTotal98(Long revenuTaxeTotal98) {
        this.revenuTaxeTotal98 = revenuTaxeTotal98;
    }

    public Long getRevenuNetTotalGlobal99() {
        return this.revenuNetTotalGlobal99;
    }

    public DmOResv revenuNetTotalGlobal99(Long revenuNetTotalGlobal99) {
        this.setRevenuNetTotalGlobal99(revenuNetTotalGlobal99);
        return this;
    }

    public void setRevenuNetTotalGlobal99(Long revenuNetTotalGlobal99) {
        this.revenuNetTotalGlobal99 = revenuNetTotalGlobal99;
    }

    public Long getRevenuTaxeTotalGlobal100() {
        return this.revenuTaxeTotalGlobal100;
    }

    public DmOResv revenuTaxeTotalGlobal100(Long revenuTaxeTotalGlobal100) {
        this.setRevenuTaxeTotalGlobal100(revenuTaxeTotalGlobal100);
        return this;
    }

    public void setRevenuTaxeTotalGlobal100(Long revenuTaxeTotalGlobal100) {
        this.revenuTaxeTotalGlobal100 = revenuTaxeTotalGlobal100;
    }

    public Long getProdRevenuChambre101() {
        return this.prodRevenuChambre101;
    }

    public DmOResv prodRevenuChambre101(Long prodRevenuChambre101) {
        this.setProdRevenuChambre101(prodRevenuChambre101);
        return this;
    }

    public void setProdRevenuChambre101(Long prodRevenuChambre101) {
        this.prodRevenuChambre101 = prodRevenuChambre101;
    }

    public Long getProdRevenuBq102() {
        return this.prodRevenuBq102;
    }

    public DmOResv prodRevenuBq102(Long prodRevenuBq102) {
        this.setProdRevenuBq102(prodRevenuBq102);
        return this;
    }

    public void setProdRevenuBq102(Long prodRevenuBq102) {
        this.prodRevenuBq102 = prodRevenuBq102;
    }

    public Long getProdRevenuExtra103() {
        return this.prodRevenuExtra103;
    }

    public DmOResv prodRevenuExtra103(Long prodRevenuExtra103) {
        this.setProdRevenuExtra103(prodRevenuExtra103);
        return this;
    }

    public void setProdRevenuExtra103(Long prodRevenuExtra103) {
        this.prodRevenuExtra103 = prodRevenuExtra103;
    }

    public Long getProdRevenuTotal104() {
        return this.prodRevenuTotal104;
    }

    public DmOResv prodRevenuTotal104(Long prodRevenuTotal104) {
        this.setProdRevenuTotal104(prodRevenuTotal104);
        return this;
    }

    public void setProdRevenuTotal104(Long prodRevenuTotal104) {
        this.prodRevenuTotal104 = prodRevenuTotal104;
    }

    public Long getProdChambreNbNuitees105() {
        return this.prodChambreNbNuitees105;
    }

    public DmOResv prodChambreNbNuitees105(Long prodChambreNbNuitees105) {
        this.setProdChambreNbNuitees105(prodChambreNbNuitees105);
        return this;
    }

    public void setProdChambreNbNuitees105(Long prodChambreNbNuitees105) {
        this.prodChambreNbNuitees105 = prodChambreNbNuitees105;
    }

    public LocalDate getTechCreateDate106() {
        return this.techCreateDate106;
    }

    public DmOResv techCreateDate106(LocalDate techCreateDate106) {
        this.setTechCreateDate106(techCreateDate106);
        return this;
    }

    public void setTechCreateDate106(LocalDate techCreateDate106) {
        this.techCreateDate106 = techCreateDate106;
    }

    public LocalDate getTechUpdateDate107() {
        return this.techUpdateDate107;
    }

    public DmOResv techUpdateDate107(LocalDate techUpdateDate107) {
        this.setTechUpdateDate107(techUpdateDate107);
        return this;
    }

    public void setTechUpdateDate107(LocalDate techUpdateDate107) {
        this.techUpdateDate107 = techUpdateDate107;
    }

    public Integer getNumLigne108() {
        return this.numLigne108;
    }

    public DmOResv numLigne108(Integer numLigne108) {
        this.setNumLigne108(numLigne108);
        return this;
    }

    public void setNumLigne108(Integer numLigne108) {
        this.numLigne108 = numLigne108;
    }

    public String getResort109() {
        return this.resort109;
    }

    public DmOResv resort109(String resort109) {
        this.setResort109(resort109);
        return this;
    }

    public void setResort109(String resort109) {
        this.resort109 = resort109;
    }

    public Integer getResvNameId110() {
        return this.resvNameId110;
    }

    public DmOResv resvNameId110(Integer resvNameId110) {
        this.setResvNameId110(resvNameId110);
        return this;
    }

    public void setResvNameId110(Integer resvNameId110) {
        this.resvNameId110 = resvNameId110;
    }

    public String getClientOId111() {
        return this.clientOId111;
    }

    public DmOResv clientOId111(String clientOId111) {
        this.setClientOId111(clientOId111);
        return this;
    }

    public void setClientOId111(String clientOId111) {
        this.clientOId111 = clientOId111;
    }

    public String getTypeChb112() {
        return this.typeChb112;
    }

    public DmOResv typeChb112(String typeChb112) {
        this.setTypeChb112(typeChb112);
        return this;
    }

    public void setTypeChb112(String typeChb112) {
        this.typeChb112 = typeChb112;
    }

    public String getConfirmationNo113() {
        return this.confirmationNo113;
    }

    public DmOResv confirmationNo113(String confirmationNo113) {
        this.setConfirmationNo113(confirmationNo113);
        return this;
    }

    public void setConfirmationNo113(String confirmationNo113) {
        this.confirmationNo113 = confirmationNo113;
    }

    public String getClientMdmId114() {
        return this.clientMdmId114;
    }

    public DmOResv clientMdmId114(String clientMdmId114) {
        this.setClientMdmId114(clientMdmId114);
        return this;
    }

    public void setClientMdmId114(String clientMdmId114) {
        this.clientMdmId114 = clientMdmId114;
    }

    public Integer getNameId115() {
        return this.nameId115;
    }

    public DmOResv nameId115(Integer nameId115) {
        this.setNameId115(nameId115);
        return this;
    }

    public void setNameId115(Integer nameId115) {
        this.nameId115 = nameId115;
    }

    public Integer getParentResvNameId116() {
        return this.parentResvNameId116;
    }

    public DmOResv parentResvNameId116(Integer parentResvNameId116) {
        this.setParentResvNameId116(parentResvNameId116);
        return this;
    }

    public void setParentResvNameId116(Integer parentResvNameId116) {
        this.parentResvNameId116 = parentResvNameId116;
    }

    public Integer getContactId117() {
        return this.contactId117;
    }

    public DmOResv contactId117(Integer contactId117) {
        this.setContactId117(contactId117);
        return this;
    }

    public void setContactId117(Integer contactId117) {
        this.contactId117 = contactId117;
    }

    public Integer getAgenceId118() {
        return this.agenceId118;
    }

    public DmOResv agenceId118(Integer agenceId118) {
        this.setAgenceId118(agenceId118);
        return this;
    }

    public void setAgenceId118(Integer agenceId118) {
        this.agenceId118 = agenceId118;
    }

    public String getAgenceNom119() {
        return this.agenceNom119;
    }

    public DmOResv agenceNom119(String agenceNom119) {
        this.setAgenceNom119(agenceNom119);
        return this;
    }

    public void setAgenceNom119(String agenceNom119) {
        this.agenceNom119 = agenceNom119;
    }

    public Integer getSocieteId120() {
        return this.societeId120;
    }

    public DmOResv societeId120(Integer societeId120) {
        this.setSocieteId120(societeId120);
        return this;
    }

    public void setSocieteId120(Integer societeId120) {
        this.societeId120 = societeId120;
    }

    public Integer getGroupeId121() {
        return this.groupeId121;
    }

    public DmOResv groupeId121(Integer groupeId121) {
        this.setGroupeId121(groupeId121);
        return this;
    }

    public void setGroupeId121(Integer groupeId121) {
        this.groupeId121 = groupeId121;
    }

    public Integer getNumBloc122() {
        return this.numBloc122;
    }

    public DmOResv numBloc122(Integer numBloc122) {
        this.setNumBloc122(numBloc122);
        return this;
    }

    public void setNumBloc122(Integer numBloc122) {
        this.numBloc122 = numBloc122;
    }

    public String getTypeResv123() {
        return this.typeResv123;
    }

    public DmOResv typeResv123(String typeResv123) {
        this.setTypeResv123(typeResv123);
        return this;
    }

    public void setTypeResv123(String typeResv123) {
        this.typeResv123 = typeResv123;
    }

    public String getStatutResv124() {
        return this.statutResv124;
    }

    public DmOResv statutResv124(String statutResv124) {
        this.setStatutResv124(statutResv124);
        return this;
    }

    public void setStatutResv124(String statutResv124) {
        this.statutResv124 = statutResv124;
    }

    public LocalDate getDateDebutResv125() {
        return this.dateDebutResv125;
    }

    public DmOResv dateDebutResv125(LocalDate dateDebutResv125) {
        this.setDateDebutResv125(dateDebutResv125);
        return this;
    }

    public void setDateDebutResv125(LocalDate dateDebutResv125) {
        this.dateDebutResv125 = dateDebutResv125;
    }

    public LocalDate getDateFinResv126() {
        return this.dateFinResv126;
    }

    public DmOResv dateFinResv126(LocalDate dateFinResv126) {
        this.setDateFinResv126(dateFinResv126);
        return this;
    }

    public void setDateFinResv126(LocalDate dateFinResv126) {
        this.dateFinResv126 = dateFinResv126;
    }

    public LocalDate getTruncDateDebutResv127() {
        return this.truncDateDebutResv127;
    }

    public DmOResv truncDateDebutResv127(LocalDate truncDateDebutResv127) {
        this.setTruncDateDebutResv127(truncDateDebutResv127);
        return this;
    }

    public void setTruncDateDebutResv127(LocalDate truncDateDebutResv127) {
        this.truncDateDebutResv127 = truncDateDebutResv127;
    }

    public LocalDate getTruncDateFinResv128() {
        return this.truncDateFinResv128;
    }

    public DmOResv truncDateFinResv128(LocalDate truncDateFinResv128) {
        this.setTruncDateFinResv128(truncDateFinResv128);
        return this;
    }

    public void setTruncDateFinResv128(LocalDate truncDateFinResv128) {
        this.truncDateFinResv128 = truncDateFinResv128;
    }

    public LocalDate getDateAnnResv129() {
        return this.dateAnnResv129;
    }

    public DmOResv dateAnnResv129(LocalDate dateAnnResv129) {
        this.setDateAnnResv129(dateAnnResv129);
        return this;
    }

    public void setDateAnnResv129(LocalDate dateAnnResv129) {
        this.dateAnnResv129 = dateAnnResv129;
    }

    public String getPseudoRoomYn130() {
        return this.pseudoRoomYn130;
    }

    public DmOResv pseudoRoomYn130(String pseudoRoomYn130) {
        this.setPseudoRoomYn130(pseudoRoomYn130);
        return this;
    }

    public void setPseudoRoomYn130(String pseudoRoomYn130) {
        this.pseudoRoomYn130 = pseudoRoomYn130;
    }

    public Integer getCreateurResv131() {
        return this.createurResv131;
    }

    public DmOResv createurResv131(Integer createurResv131) {
        this.setCreateurResv131(createurResv131);
        return this;
    }

    public void setCreateurResv131(Integer createurResv131) {
        this.createurResv131 = createurResv131;
    }

    public String getNomCreateurResv132() {
        return this.nomCreateurResv132;
    }

    public DmOResv nomCreateurResv132(String nomCreateurResv132) {
        this.setNomCreateurResv132(nomCreateurResv132);
        return this;
    }

    public void setNomCreateurResv132(String nomCreateurResv132) {
        this.nomCreateurResv132 = nomCreateurResv132;
    }

    public String getCodeGarantie133() {
        return this.codeGarantie133;
    }

    public DmOResv codeGarantie133(String codeGarantie133) {
        this.setCodeGarantie133(codeGarantie133);
        return this;
    }

    public void setCodeGarantie133(String codeGarantie133) {
        this.codeGarantie133 = codeGarantie133;
    }

    public String getFlgDed134() {
        return this.flgDed134;
    }

    public DmOResv flgDed134(String flgDed134) {
        this.setFlgDed134(flgDed134);
        return this;
    }

    public void setFlgDed134(String flgDed134) {
        this.flgDed134 = flgDed134;
    }

    public String getCodePays135() {
        return this.codePays135;
    }

    public DmOResv codePays135(String codePays135) {
        this.setCodePays135(codePays135);
        return this;
    }

    public void setCodePays135(String codePays135) {
        this.codePays135 = codePays135;
    }

    public String getLibPays136() {
        return this.libPays136;
    }

    public DmOResv libPays136(String libPays136) {
        this.setLibPays136(libPays136);
        return this;
    }

    public void setLibPays136(String libPays136) {
        this.libPays136 = libPays136;
    }

    public String getCodeNationalite137() {
        return this.codeNationalite137;
    }

    public DmOResv codeNationalite137(String codeNationalite137) {
        this.setCodeNationalite137(codeNationalite137);
        return this;
    }

    public void setCodeNationalite137(String codeNationalite137) {
        this.codeNationalite137 = codeNationalite137;
    }

    public String getLibNationalite138() {
        return this.libNationalite138;
    }

    public DmOResv libNationalite138(String libNationalite138) {
        this.setLibNationalite138(libNationalite138);
        return this;
    }

    public void setLibNationalite138(String libNationalite138) {
        this.libNationalite138 = libNationalite138;
    }

    public String getCodeSource139() {
        return this.codeSource139;
    }

    public DmOResv codeSource139(String codeSource139) {
        this.setCodeSource139(codeSource139);
        return this;
    }

    public void setCodeSource139(String codeSource139) {
        this.codeSource139 = codeSource139;
    }

    public String getLibSource140() {
        return this.libSource140;
    }

    public DmOResv libSource140(String libSource140) {
        this.setLibSource140(libSource140);
        return this;
    }

    public void setLibSource140(String libSource140) {
        this.libSource140 = libSource140;
    }

    public String getCodeGrandSource141() {
        return this.codeGrandSource141;
    }

    public DmOResv codeGrandSource141(String codeGrandSource141) {
        this.setCodeGrandSource141(codeGrandSource141);
        return this;
    }

    public void setCodeGrandSource141(String codeGrandSource141) {
        this.codeGrandSource141 = codeGrandSource141;
    }

    public String getCodeOrigine142() {
        return this.codeOrigine142;
    }

    public DmOResv codeOrigine142(String codeOrigine142) {
        this.setCodeOrigine142(codeOrigine142);
        return this;
    }

    public void setCodeOrigine142(String codeOrigine142) {
        this.codeOrigine142 = codeOrigine142;
    }

    public String getLibOrigine143() {
        return this.libOrigine143;
    }

    public DmOResv libOrigine143(String libOrigine143) {
        this.setLibOrigine143(libOrigine143);
        return this;
    }

    public void setLibOrigine143(String libOrigine143) {
        this.libOrigine143 = libOrigine143;
    }

    public String getCodeMarche144() {
        return this.codeMarche144;
    }

    public DmOResv codeMarche144(String codeMarche144) {
        this.setCodeMarche144(codeMarche144);
        return this;
    }

    public void setCodeMarche144(String codeMarche144) {
        this.codeMarche144 = codeMarche144;
    }

    public String getLibMarche145() {
        return this.libMarche145;
    }

    public DmOResv libMarche145(String libMarche145) {
        this.setLibMarche145(libMarche145);
        return this;
    }

    public void setLibMarche145(String libMarche145) {
        this.libMarche145 = libMarche145;
    }

    public String getCodeGrandMarche146() {
        return this.codeGrandMarche146;
    }

    public DmOResv codeGrandMarche146(String codeGrandMarche146) {
        this.setCodeGrandMarche146(codeGrandMarche146);
        return this;
    }

    public void setCodeGrandMarche146(String codeGrandMarche146) {
        this.codeGrandMarche146 = codeGrandMarche146;
    }

    public String getLibGrandMarche147() {
        return this.libGrandMarche147;
    }

    public DmOResv libGrandMarche147(String libGrandMarche147) {
        this.setLibGrandMarche147(libGrandMarche147);
        return this;
    }

    public void setLibGrandMarche147(String libGrandMarche147) {
        this.libGrandMarche147 = libGrandMarche147;
    }

    public String getCodePrix148() {
        return this.codePrix148;
    }

    public DmOResv codePrix148(String codePrix148) {
        this.setCodePrix148(codePrix148);
        return this;
    }

    public void setCodePrix148(String codePrix148) {
        this.codePrix148 = codePrix148;
    }

    public String getCategPrix149() {
        return this.categPrix149;
    }

    public DmOResv categPrix149(String categPrix149) {
        this.setCategPrix149(categPrix149);
        return this;
    }

    public void setCategPrix149(String categPrix149) {
        this.categPrix149 = categPrix149;
    }

    public String getLibPrix150() {
        return this.libPrix150;
    }

    public DmOResv libPrix150(String libPrix150) {
        this.setLibPrix150(libPrix150);
        return this;
    }

    public void setLibPrix150(String libPrix150) {
        this.libPrix150 = libPrix150;
    }

    public String getNumChb151() {
        return this.numChb151;
    }

    public DmOResv numChb151(String numChb151) {
        this.setNumChb151(numChb151);
        return this;
    }

    public void setNumChb151(String numChb151) {
        this.numChb151 = numChb151;
    }

    public String getDescriptionTypeChb152() {
        return this.descriptionTypeChb152;
    }

    public DmOResv descriptionTypeChb152(String descriptionTypeChb152) {
        this.setDescriptionTypeChb152(descriptionTypeChb152);
        return this;
    }

    public void setDescriptionTypeChb152(String descriptionTypeChb152) {
        this.descriptionTypeChb152 = descriptionTypeChb152;
    }

    public String getCodeTypeChb153() {
        return this.codeTypeChb153;
    }

    public DmOResv codeTypeChb153(String codeTypeChb153) {
        this.setCodeTypeChb153(codeTypeChb153);
        return this;
    }

    public void setCodeTypeChb153(String codeTypeChb153) {
        this.codeTypeChb153 = codeTypeChb153;
    }

    public String getClassChb154() {
        return this.classChb154;
    }

    public DmOResv classChb154(String classChb154) {
        this.setClassChb154(classChb154);
        return this;
    }

    public void setClassChb154(String classChb154) {
        this.classChb154 = classChb154;
    }

    public String getCaractChb155() {
        return this.caractChb155;
    }

    public DmOResv caractChb155(String caractChb155) {
        this.setCaractChb155(caractChb155);
        return this;
    }

    public void setCaractChb155(String caractChb155) {
        this.caractChb155 = caractChb155;
    }

    public String getTypeChbDeReservation156() {
        return this.typeChbDeReservation156;
    }

    public DmOResv typeChbDeReservation156(String typeChbDeReservation156) {
        this.setTypeChbDeReservation156(typeChbDeReservation156);
        return this;
    }

    public void setTypeChbDeReservation156(String typeChbDeReservation156) {
        this.typeChbDeReservation156 = typeChbDeReservation156;
    }

    public String getDescriptionTypeChbDeResv157() {
        return this.descriptionTypeChbDeResv157;
    }

    public DmOResv descriptionTypeChbDeResv157(String descriptionTypeChbDeResv157) {
        this.setDescriptionTypeChbDeResv157(descriptionTypeChbDeResv157);
        return this;
    }

    public void setDescriptionTypeChbDeResv157(String descriptionTypeChbDeResv157) {
        this.descriptionTypeChbDeResv157 = descriptionTypeChbDeResv157;
    }

    public String getCodeTypeChbDeResv158() {
        return this.codeTypeChbDeResv158;
    }

    public DmOResv codeTypeChbDeResv158(String codeTypeChbDeResv158) {
        this.setCodeTypeChbDeResv158(codeTypeChbDeResv158);
        return this;
    }

    public void setCodeTypeChbDeResv158(String codeTypeChbDeResv158) {
        this.codeTypeChbDeResv158 = codeTypeChbDeResv158;
    }

    public String getStatutDeReservation159() {
        return this.statutDeReservation159;
    }

    public DmOResv statutDeReservation159(String statutDeReservation159) {
        this.setStatutDeReservation159(statutDeReservation159);
        return this;
    }

    public void setStatutDeReservation159(String statutDeReservation159) {
        this.statutDeReservation159 = statutDeReservation159;
    }

    public String getCircuitDistribution160() {
        return this.circuitDistribution160;
    }

    public DmOResv circuitDistribution160(String circuitDistribution160) {
        this.setCircuitDistribution160(circuitDistribution160);
        return this;
    }

    public void setCircuitDistribution160(String circuitDistribution160) {
        this.circuitDistribution160 = circuitDistribution160;
    }

    public String getCircuitDistribUserRegroup161() {
        return this.circuitDistribUserRegroup161;
    }

    public DmOResv circuitDistribUserRegroup161(String circuitDistribUserRegroup161) {
        this.setCircuitDistribUserRegroup161(circuitDistribUserRegroup161);
        return this;
    }

    public void setCircuitDistribUserRegroup161(String circuitDistribUserRegroup161) {
        this.circuitDistribUserRegroup161 = circuitDistribUserRegroup161;
    }

    public String getNumCrs162() {
        return this.numCrs162;
    }

    public DmOResv numCrs162(String numCrs162) {
        this.setNumCrs162(numCrs162);
        return this;
    }

    public void setNumCrs162(String numCrs162) {
        this.numCrs162 = numCrs162;
    }

    public String getTypeRefCrs163() {
        return this.typeRefCrs163;
    }

    public DmOResv typeRefCrs163(String typeRefCrs163) {
        this.setTypeRefCrs163(typeRefCrs163);
        return this;
    }

    public void setTypeRefCrs163(String typeRefCrs163) {
        this.typeRefCrs163 = typeRefCrs163;
    }

    public LocalDate getCrsInsertDate164() {
        return this.crsInsertDate164;
    }

    public DmOResv crsInsertDate164(LocalDate crsInsertDate164) {
        this.setCrsInsertDate164(crsInsertDate164);
        return this;
    }

    public void setCrsInsertDate164(LocalDate crsInsertDate164) {
        this.crsInsertDate164 = crsInsertDate164;
    }

    public LocalDate getDateCreaResv165() {
        return this.dateCreaResv165;
    }

    public DmOResv dateCreaResv165(LocalDate dateCreaResv165) {
        this.setDateCreaResv165(dateCreaResv165);
        return this;
    }

    public void setDateCreaResv165(LocalDate dateCreaResv165) {
        this.dateCreaResv165 = dateCreaResv165;
    }

    public LocalDate getDatePremier166() {
        return this.datePremier166;
    }

    public DmOResv datePremier166(LocalDate datePremier166) {
        this.setDatePremier166(datePremier166);
        return this;
    }

    public void setDatePremier166(LocalDate datePremier166) {
        this.datePremier166 = datePremier166;
    }

    public String getStatutPremier167() {
        return this.statutPremier167;
    }

    public DmOResv statutPremier167(String statutPremier167) {
        this.setStatutPremier167(statutPremier167);
        return this;
    }

    public void setStatutPremier167(String statutPremier167) {
        this.statutPremier167 = statutPremier167;
    }

    public LocalDate getDateDernier168() {
        return this.dateDernier168;
    }

    public DmOResv dateDernier168(LocalDate dateDernier168) {
        this.setDateDernier168(dateDernier168);
        return this;
    }

    public void setDateDernier168(LocalDate dateDernier168) {
        this.dateDernier168 = dateDernier168;
    }

    public String getStatutDernier169() {
        return this.statutDernier169;
    }

    public DmOResv statutDernier169(String statutDernier169) {
        this.setStatutDernier169(statutDernier169);
        return this;
    }

    public void setStatutDernier169(String statutDernier169) {
        this.statutDernier169 = statutDernier169;
    }

    public LocalDate getDateDernierPseudo170() {
        return this.dateDernierPseudo170;
    }

    public DmOResv dateDernierPseudo170(LocalDate dateDernierPseudo170) {
        this.setDateDernierPseudo170(dateDernierPseudo170);
        return this;
    }

    public void setDateDernierPseudo170(LocalDate dateDernierPseudo170) {
        this.dateDernierPseudo170 = dateDernierPseudo170;
    }

    public String getStatutDernierPseudo171() {
        return this.statutDernierPseudo171;
    }

    public DmOResv statutDernierPseudo171(String statutDernierPseudo171) {
        this.setStatutDernierPseudo171(statutDernierPseudo171);
        return this;
    }

    public void setStatutDernierPseudo171(String statutDernierPseudo171) {
        this.statutDernierPseudo171 = statutDernierPseudo171;
    }

    public Integer getDiffDtCreaAnn172() {
        return this.diffDtCreaAnn172;
    }

    public DmOResv diffDtCreaAnn172(Integer diffDtCreaAnn172) {
        this.setDiffDtCreaAnn172(diffDtCreaAnn172);
        return this;
    }

    public void setDiffDtCreaAnn172(Integer diffDtCreaAnn172) {
        this.diffDtCreaAnn172 = diffDtCreaAnn172;
    }

    public Integer getDiffDtArrAnn173() {
        return this.diffDtArrAnn173;
    }

    public DmOResv diffDtArrAnn173(Integer diffDtArrAnn173) {
        this.setDiffDtArrAnn173(diffDtArrAnn173);
        return this;
    }

    public void setDiffDtArrAnn173(Integer diffDtArrAnn173) {
        this.diffDtArrAnn173 = diffDtArrAnn173;
    }

    public Integer getLeadtime174() {
        return this.leadtime174;
    }

    public DmOResv leadtime174(Integer leadtime174) {
        this.setLeadtime174(leadtime174);
        return this;
    }

    public void setLeadtime174(Integer leadtime174) {
        this.leadtime174 = leadtime174;
    }

    public Integer getLos175() {
        return this.los175;
    }

    public DmOResv los175(Integer los175) {
        this.setLos175(los175);
        return this;
    }

    public void setLos175(Integer los175) {
        this.los175 = los175;
    }

    public String getOccupantsGroupe176() {
        return this.occupantsGroupe176;
    }

    public DmOResv occupantsGroupe176(String occupantsGroupe176) {
        this.setOccupantsGroupe176(occupantsGroupe176);
        return this;
    }

    public void setOccupantsGroupe176(String occupantsGroupe176) {
        this.occupantsGroupe176 = occupantsGroupe176;
    }

    public Integer getNbNuitee177() {
        return this.nbNuitee177;
    }

    public DmOResv nbNuitee177(Integer nbNuitee177) {
        this.setNbNuitee177(nbNuitee177);
        return this;
    }

    public void setNbNuitee177(Integer nbNuitee177) {
        this.nbNuitee177 = nbNuitee177;
    }

    public Integer getNbNuiteeNnDed178() {
        return this.nbNuiteeNnDed178;
    }

    public DmOResv nbNuiteeNnDed178(Integer nbNuiteeNnDed178) {
        this.setNbNuiteeNnDed178(nbNuiteeNnDed178);
        return this;
    }

    public void setNbNuiteeNnDed178(Integer nbNuiteeNnDed178) {
        this.nbNuiteeNnDed178 = nbNuiteeNnDed178;
    }

    public Integer getNbResvAnn179() {
        return this.nbResvAnn179;
    }

    public DmOResv nbResvAnn179(Integer nbResvAnn179) {
        this.setNbResvAnn179(nbResvAnn179);
        return this;
    }

    public void setNbResvAnn179(Integer nbResvAnn179) {
        this.nbResvAnn179 = nbResvAnn179;
    }

    public Integer getNbAdu180() {
        return this.nbAdu180;
    }

    public DmOResv nbAdu180(Integer nbAdu180) {
        this.setNbAdu180(nbAdu180);
        return this;
    }

    public void setNbAdu180(Integer nbAdu180) {
        this.nbAdu180 = nbAdu180;
    }

    public Integer getNbEnf181() {
        return this.nbEnf181;
    }

    public DmOResv nbEnf181(Integer nbEnf181) {
        this.setNbEnf181(nbEnf181);
        return this;
    }

    public void setNbEnf181(Integer nbEnf181) {
        this.nbEnf181 = nbEnf181;
    }

    public Integer getNbPersDayU182() {
        return this.nbPersDayU182;
    }

    public DmOResv nbPersDayU182(Integer nbPersDayU182) {
        this.setNbPersDayU182(nbPersDayU182);
        return this;
    }

    public void setNbPersDayU182(Integer nbPersDayU182) {
        this.nbPersDayU182 = nbPersDayU182;
    }

    public Integer getNbPersArr183() {
        return this.nbPersArr183;
    }

    public DmOResv nbPersArr183(Integer nbPersArr183) {
        this.setNbPersArr183(nbPersArr183);
        return this;
    }

    public void setNbPersArr183(Integer nbPersArr183) {
        this.nbPersArr183 = nbPersArr183;
    }

    public Integer getNbPersDep184() {
        return this.nbPersDep184;
    }

    public DmOResv nbPersDep184(Integer nbPersDep184) {
        this.setNbPersDep184(nbPersDep184);
        return this;
    }

    public void setNbPersDep184(Integer nbPersDep184) {
        this.nbPersDep184 = nbPersDep184;
    }

    public Integer getNbPersAnn185() {
        return this.nbPersAnn185;
    }

    public DmOResv nbPersAnn185(Integer nbPersAnn185) {
        this.setNbPersAnn185(nbPersAnn185);
        return this;
    }

    public void setNbPersAnn185(Integer nbPersAnn185) {
        this.nbPersAnn185 = nbPersAnn185;
    }

    public Integer getNbPersNoshow186() {
        return this.nbPersNoshow186;
    }

    public DmOResv nbPersNoshow186(Integer nbPersNoshow186) {
        this.setNbPersNoshow186(nbPersNoshow186);
        return this;
    }

    public void setNbPersNoshow186(Integer nbPersNoshow186) {
        this.nbPersNoshow186 = nbPersNoshow186;
    }

    public Integer getNbChbDayU187() {
        return this.nbChbDayU187;
    }

    public DmOResv nbChbDayU187(Integer nbChbDayU187) {
        this.setNbChbDayU187(nbChbDayU187);
        return this;
    }

    public void setNbChbDayU187(Integer nbChbDayU187) {
        this.nbChbDayU187 = nbChbDayU187;
    }

    public Integer getNbChbArr188() {
        return this.nbChbArr188;
    }

    public DmOResv nbChbArr188(Integer nbChbArr188) {
        this.setNbChbArr188(nbChbArr188);
        return this;
    }

    public void setNbChbArr188(Integer nbChbArr188) {
        this.nbChbArr188 = nbChbArr188;
    }

    public Integer getNbChbDep189() {
        return this.nbChbDep189;
    }

    public DmOResv nbChbDep189(Integer nbChbDep189) {
        this.setNbChbDep189(nbChbDep189);
        return this;
    }

    public void setNbChbDep189(Integer nbChbDep189) {
        this.nbChbDep189 = nbChbDep189;
    }

    public Integer getNbChbAnn190() {
        return this.nbChbAnn190;
    }

    public DmOResv nbChbAnn190(Integer nbChbAnn190) {
        this.setNbChbAnn190(nbChbAnn190);
        return this;
    }

    public void setNbChbAnn190(Integer nbChbAnn190) {
        this.nbChbAnn190 = nbChbAnn190;
    }

    public Integer getNbChbNoshow191() {
        return this.nbChbNoshow191;
    }

    public DmOResv nbChbNoshow191(Integer nbChbNoshow191) {
        this.setNbChbNoshow191(nbChbNoshow191);
        return this;
    }

    public void setNbChbNoshow191(Integer nbChbNoshow191) {
        this.nbChbNoshow191 = nbChbNoshow191;
    }

    public Long getRevenuNetChambre192() {
        return this.revenuNetChambre192;
    }

    public DmOResv revenuNetChambre192(Long revenuNetChambre192) {
        this.setRevenuNetChambre192(revenuNetChambre192);
        return this;
    }

    public void setRevenuNetChambre192(Long revenuNetChambre192) {
        this.revenuNetChambre192 = revenuNetChambre192;
    }

    public Long getRevenuTaxeChambre193() {
        return this.revenuTaxeChambre193;
    }

    public DmOResv revenuTaxeChambre193(Long revenuTaxeChambre193) {
        this.setRevenuTaxeChambre193(revenuTaxeChambre193);
        return this;
    }

    public void setRevenuTaxeChambre193(Long revenuTaxeChambre193) {
        this.revenuTaxeChambre193 = revenuTaxeChambre193;
    }

    public Long getRevenuNetChambreGlobal194() {
        return this.revenuNetChambreGlobal194;
    }

    public DmOResv revenuNetChambreGlobal194(Long revenuNetChambreGlobal194) {
        this.setRevenuNetChambreGlobal194(revenuNetChambreGlobal194);
        return this;
    }

    public void setRevenuNetChambreGlobal194(Long revenuNetChambreGlobal194) {
        this.revenuNetChambreGlobal194 = revenuNetChambreGlobal194;
    }

    public Long getRevenuTaxeChambreGlobal195() {
        return this.revenuTaxeChambreGlobal195;
    }

    public DmOResv revenuTaxeChambreGlobal195(Long revenuTaxeChambreGlobal195) {
        this.setRevenuTaxeChambreGlobal195(revenuTaxeChambreGlobal195);
        return this;
    }

    public void setRevenuTaxeChambreGlobal195(Long revenuTaxeChambreGlobal195) {
        this.revenuTaxeChambreGlobal195 = revenuTaxeChambreGlobal195;
    }

    public Long getRevenuNetBq196() {
        return this.revenuNetBq196;
    }

    public DmOResv revenuNetBq196(Long revenuNetBq196) {
        this.setRevenuNetBq196(revenuNetBq196);
        return this;
    }

    public void setRevenuNetBq196(Long revenuNetBq196) {
        this.revenuNetBq196 = revenuNetBq196;
    }

    public Long getRevenuTaxeBq197() {
        return this.revenuTaxeBq197;
    }

    public DmOResv revenuTaxeBq197(Long revenuTaxeBq197) {
        this.setRevenuTaxeBq197(revenuTaxeBq197);
        return this;
    }

    public void setRevenuTaxeBq197(Long revenuTaxeBq197) {
        this.revenuTaxeBq197 = revenuTaxeBq197;
    }

    public Long getRevenuNetBqGlobal198() {
        return this.revenuNetBqGlobal198;
    }

    public DmOResv revenuNetBqGlobal198(Long revenuNetBqGlobal198) {
        this.setRevenuNetBqGlobal198(revenuNetBqGlobal198);
        return this;
    }

    public void setRevenuNetBqGlobal198(Long revenuNetBqGlobal198) {
        this.revenuNetBqGlobal198 = revenuNetBqGlobal198;
    }

    public Long getRevenuTaxeBqGlobal199() {
        return this.revenuTaxeBqGlobal199;
    }

    public DmOResv revenuTaxeBqGlobal199(Long revenuTaxeBqGlobal199) {
        this.setRevenuTaxeBqGlobal199(revenuTaxeBqGlobal199);
        return this;
    }

    public void setRevenuTaxeBqGlobal199(Long revenuTaxeBqGlobal199) {
        this.revenuTaxeBqGlobal199 = revenuTaxeBqGlobal199;
    }

    public Long getRevenuNetExtra200() {
        return this.revenuNetExtra200;
    }

    public DmOResv revenuNetExtra200(Long revenuNetExtra200) {
        this.setRevenuNetExtra200(revenuNetExtra200);
        return this;
    }

    public void setRevenuNetExtra200(Long revenuNetExtra200) {
        this.revenuNetExtra200 = revenuNetExtra200;
    }

    public Long getRevenuTaxeExtra201() {
        return this.revenuTaxeExtra201;
    }

    public DmOResv revenuTaxeExtra201(Long revenuTaxeExtra201) {
        this.setRevenuTaxeExtra201(revenuTaxeExtra201);
        return this;
    }

    public void setRevenuTaxeExtra201(Long revenuTaxeExtra201) {
        this.revenuTaxeExtra201 = revenuTaxeExtra201;
    }

    public Long getRevenuNetExtraGlobal202() {
        return this.revenuNetExtraGlobal202;
    }

    public DmOResv revenuNetExtraGlobal202(Long revenuNetExtraGlobal202) {
        this.setRevenuNetExtraGlobal202(revenuNetExtraGlobal202);
        return this;
    }

    public void setRevenuNetExtraGlobal202(Long revenuNetExtraGlobal202) {
        this.revenuNetExtraGlobal202 = revenuNetExtraGlobal202;
    }

    public Long getRevenuTaxeExtraGlobal203() {
        return this.revenuTaxeExtraGlobal203;
    }

    public DmOResv revenuTaxeExtraGlobal203(Long revenuTaxeExtraGlobal203) {
        this.setRevenuTaxeExtraGlobal203(revenuTaxeExtraGlobal203);
        return this;
    }

    public void setRevenuTaxeExtraGlobal203(Long revenuTaxeExtraGlobal203) {
        this.revenuTaxeExtraGlobal203 = revenuTaxeExtraGlobal203;
    }

    public Long getRevenuNetTotal204() {
        return this.revenuNetTotal204;
    }

    public DmOResv revenuNetTotal204(Long revenuNetTotal204) {
        this.setRevenuNetTotal204(revenuNetTotal204);
        return this;
    }

    public void setRevenuNetTotal204(Long revenuNetTotal204) {
        this.revenuNetTotal204 = revenuNetTotal204;
    }

    public Long getRevenuTaxeTotal205() {
        return this.revenuTaxeTotal205;
    }

    public DmOResv revenuTaxeTotal205(Long revenuTaxeTotal205) {
        this.setRevenuTaxeTotal205(revenuTaxeTotal205);
        return this;
    }

    public void setRevenuTaxeTotal205(Long revenuTaxeTotal205) {
        this.revenuTaxeTotal205 = revenuTaxeTotal205;
    }

    public Long getRevenuNetTotalGlobal206() {
        return this.revenuNetTotalGlobal206;
    }

    public DmOResv revenuNetTotalGlobal206(Long revenuNetTotalGlobal206) {
        this.setRevenuNetTotalGlobal206(revenuNetTotalGlobal206);
        return this;
    }

    public void setRevenuNetTotalGlobal206(Long revenuNetTotalGlobal206) {
        this.revenuNetTotalGlobal206 = revenuNetTotalGlobal206;
    }

    public Long getRevenuTaxeTotalGlobal207() {
        return this.revenuTaxeTotalGlobal207;
    }

    public DmOResv revenuTaxeTotalGlobal207(Long revenuTaxeTotalGlobal207) {
        this.setRevenuTaxeTotalGlobal207(revenuTaxeTotalGlobal207);
        return this;
    }

    public void setRevenuTaxeTotalGlobal207(Long revenuTaxeTotalGlobal207) {
        this.revenuTaxeTotalGlobal207 = revenuTaxeTotalGlobal207;
    }

    public Long getProdRevenuChambre208() {
        return this.prodRevenuChambre208;
    }

    public DmOResv prodRevenuChambre208(Long prodRevenuChambre208) {
        this.setProdRevenuChambre208(prodRevenuChambre208);
        return this;
    }

    public void setProdRevenuChambre208(Long prodRevenuChambre208) {
        this.prodRevenuChambre208 = prodRevenuChambre208;
    }

    public Long getProdRevenuBq209() {
        return this.prodRevenuBq209;
    }

    public DmOResv prodRevenuBq209(Long prodRevenuBq209) {
        this.setProdRevenuBq209(prodRevenuBq209);
        return this;
    }

    public void setProdRevenuBq209(Long prodRevenuBq209) {
        this.prodRevenuBq209 = prodRevenuBq209;
    }

    public Long getProdRevenuExtra210() {
        return this.prodRevenuExtra210;
    }

    public DmOResv prodRevenuExtra210(Long prodRevenuExtra210) {
        this.setProdRevenuExtra210(prodRevenuExtra210);
        return this;
    }

    public void setProdRevenuExtra210(Long prodRevenuExtra210) {
        this.prodRevenuExtra210 = prodRevenuExtra210;
    }

    public Long getProdRevenuTotal211() {
        return this.prodRevenuTotal211;
    }

    public DmOResv prodRevenuTotal211(Long prodRevenuTotal211) {
        this.setProdRevenuTotal211(prodRevenuTotal211);
        return this;
    }

    public void setProdRevenuTotal211(Long prodRevenuTotal211) {
        this.prodRevenuTotal211 = prodRevenuTotal211;
    }

    public Long getProdChambreNbNuitees212() {
        return this.prodChambreNbNuitees212;
    }

    public DmOResv prodChambreNbNuitees212(Long prodChambreNbNuitees212) {
        this.setProdChambreNbNuitees212(prodChambreNbNuitees212);
        return this;
    }

    public void setProdChambreNbNuitees212(Long prodChambreNbNuitees212) {
        this.prodChambreNbNuitees212 = prodChambreNbNuitees212;
    }

    public LocalDate getTechCreateDate213() {
        return this.techCreateDate213;
    }

    public DmOResv techCreateDate213(LocalDate techCreateDate213) {
        this.setTechCreateDate213(techCreateDate213);
        return this;
    }

    public void setTechCreateDate213(LocalDate techCreateDate213) {
        this.techCreateDate213 = techCreateDate213;
    }

    public LocalDate getTechUpdateDate214() {
        return this.techUpdateDate214;
    }

    public DmOResv techUpdateDate214(LocalDate techUpdateDate214) {
        this.setTechUpdateDate214(techUpdateDate214);
        return this;
    }

    public void setTechUpdateDate214(LocalDate techUpdateDate214) {
        this.techUpdateDate214 = techUpdateDate214;
    }

    public Integer getNumLigne215() {
        return this.numLigne215;
    }

    public DmOResv numLigne215(Integer numLigne215) {
        this.setNumLigne215(numLigne215);
        return this;
    }

    public void setNumLigne215(Integer numLigne215) {
        this.numLigne215 = numLigne215;
    }

    public String getResort216() {
        return this.resort216;
    }

    public DmOResv resort216(String resort216) {
        this.setResort216(resort216);
        return this;
    }

    public void setResort216(String resort216) {
        this.resort216 = resort216;
    }

    public Integer getResvNameId217() {
        return this.resvNameId217;
    }

    public DmOResv resvNameId217(Integer resvNameId217) {
        this.setResvNameId217(resvNameId217);
        return this;
    }

    public void setResvNameId217(Integer resvNameId217) {
        this.resvNameId217 = resvNameId217;
    }

    public String getClientOId218() {
        return this.clientOId218;
    }

    public DmOResv clientOId218(String clientOId218) {
        this.setClientOId218(clientOId218);
        return this;
    }

    public void setClientOId218(String clientOId218) {
        this.clientOId218 = clientOId218;
    }

    public String getTypeChb219() {
        return this.typeChb219;
    }

    public DmOResv typeChb219(String typeChb219) {
        this.setTypeChb219(typeChb219);
        return this;
    }

    public void setTypeChb219(String typeChb219) {
        this.typeChb219 = typeChb219;
    }

    public String getConfirmationNo220() {
        return this.confirmationNo220;
    }

    public DmOResv confirmationNo220(String confirmationNo220) {
        this.setConfirmationNo220(confirmationNo220);
        return this;
    }

    public void setConfirmationNo220(String confirmationNo220) {
        this.confirmationNo220 = confirmationNo220;
    }

    public String getClientMdmId221() {
        return this.clientMdmId221;
    }

    public DmOResv clientMdmId221(String clientMdmId221) {
        this.setClientMdmId221(clientMdmId221);
        return this;
    }

    public void setClientMdmId221(String clientMdmId221) {
        this.clientMdmId221 = clientMdmId221;
    }

    public Integer getNameId222() {
        return this.nameId222;
    }

    public DmOResv nameId222(Integer nameId222) {
        this.setNameId222(nameId222);
        return this;
    }

    public void setNameId222(Integer nameId222) {
        this.nameId222 = nameId222;
    }

    public Integer getParentResvNameId223() {
        return this.parentResvNameId223;
    }

    public DmOResv parentResvNameId223(Integer parentResvNameId223) {
        this.setParentResvNameId223(parentResvNameId223);
        return this;
    }

    public void setParentResvNameId223(Integer parentResvNameId223) {
        this.parentResvNameId223 = parentResvNameId223;
    }

    public Integer getContactId224() {
        return this.contactId224;
    }

    public DmOResv contactId224(Integer contactId224) {
        this.setContactId224(contactId224);
        return this;
    }

    public void setContactId224(Integer contactId224) {
        this.contactId224 = contactId224;
    }

    public Integer getAgenceId225() {
        return this.agenceId225;
    }

    public DmOResv agenceId225(Integer agenceId225) {
        this.setAgenceId225(agenceId225);
        return this;
    }

    public void setAgenceId225(Integer agenceId225) {
        this.agenceId225 = agenceId225;
    }

    public String getAgenceNom226() {
        return this.agenceNom226;
    }

    public DmOResv agenceNom226(String agenceNom226) {
        this.setAgenceNom226(agenceNom226);
        return this;
    }

    public void setAgenceNom226(String agenceNom226) {
        this.agenceNom226 = agenceNom226;
    }

    public Integer getSocieteId227() {
        return this.societeId227;
    }

    public DmOResv societeId227(Integer societeId227) {
        this.setSocieteId227(societeId227);
        return this;
    }

    public void setSocieteId227(Integer societeId227) {
        this.societeId227 = societeId227;
    }

    public Integer getGroupeId228() {
        return this.groupeId228;
    }

    public DmOResv groupeId228(Integer groupeId228) {
        this.setGroupeId228(groupeId228);
        return this;
    }

    public void setGroupeId228(Integer groupeId228) {
        this.groupeId228 = groupeId228;
    }

    public Integer getNumBloc229() {
        return this.numBloc229;
    }

    public DmOResv numBloc229(Integer numBloc229) {
        this.setNumBloc229(numBloc229);
        return this;
    }

    public void setNumBloc229(Integer numBloc229) {
        this.numBloc229 = numBloc229;
    }

    public String getTypeResv230() {
        return this.typeResv230;
    }

    public DmOResv typeResv230(String typeResv230) {
        this.setTypeResv230(typeResv230);
        return this;
    }

    public void setTypeResv230(String typeResv230) {
        this.typeResv230 = typeResv230;
    }

    public String getStatutResv231() {
        return this.statutResv231;
    }

    public DmOResv statutResv231(String statutResv231) {
        this.setStatutResv231(statutResv231);
        return this;
    }

    public void setStatutResv231(String statutResv231) {
        this.statutResv231 = statutResv231;
    }

    public LocalDate getDateDebutResv232() {
        return this.dateDebutResv232;
    }

    public DmOResv dateDebutResv232(LocalDate dateDebutResv232) {
        this.setDateDebutResv232(dateDebutResv232);
        return this;
    }

    public void setDateDebutResv232(LocalDate dateDebutResv232) {
        this.dateDebutResv232 = dateDebutResv232;
    }

    public LocalDate getDateFinResv233() {
        return this.dateFinResv233;
    }

    public DmOResv dateFinResv233(LocalDate dateFinResv233) {
        this.setDateFinResv233(dateFinResv233);
        return this;
    }

    public void setDateFinResv233(LocalDate dateFinResv233) {
        this.dateFinResv233 = dateFinResv233;
    }

    public LocalDate getTruncDateDebutResv234() {
        return this.truncDateDebutResv234;
    }

    public DmOResv truncDateDebutResv234(LocalDate truncDateDebutResv234) {
        this.setTruncDateDebutResv234(truncDateDebutResv234);
        return this;
    }

    public void setTruncDateDebutResv234(LocalDate truncDateDebutResv234) {
        this.truncDateDebutResv234 = truncDateDebutResv234;
    }

    public LocalDate getTruncDateFinResv235() {
        return this.truncDateFinResv235;
    }

    public DmOResv truncDateFinResv235(LocalDate truncDateFinResv235) {
        this.setTruncDateFinResv235(truncDateFinResv235);
        return this;
    }

    public void setTruncDateFinResv235(LocalDate truncDateFinResv235) {
        this.truncDateFinResv235 = truncDateFinResv235;
    }

    public LocalDate getDateAnnResv236() {
        return this.dateAnnResv236;
    }

    public DmOResv dateAnnResv236(LocalDate dateAnnResv236) {
        this.setDateAnnResv236(dateAnnResv236);
        return this;
    }

    public void setDateAnnResv236(LocalDate dateAnnResv236) {
        this.dateAnnResv236 = dateAnnResv236;
    }

    public String getPseudoRoomYn237() {
        return this.pseudoRoomYn237;
    }

    public DmOResv pseudoRoomYn237(String pseudoRoomYn237) {
        this.setPseudoRoomYn237(pseudoRoomYn237);
        return this;
    }

    public void setPseudoRoomYn237(String pseudoRoomYn237) {
        this.pseudoRoomYn237 = pseudoRoomYn237;
    }

    public Integer getCreateurResv238() {
        return this.createurResv238;
    }

    public DmOResv createurResv238(Integer createurResv238) {
        this.setCreateurResv238(createurResv238);
        return this;
    }

    public void setCreateurResv238(Integer createurResv238) {
        this.createurResv238 = createurResv238;
    }

    public String getNomCreateurResv239() {
        return this.nomCreateurResv239;
    }

    public DmOResv nomCreateurResv239(String nomCreateurResv239) {
        this.setNomCreateurResv239(nomCreateurResv239);
        return this;
    }

    public void setNomCreateurResv239(String nomCreateurResv239) {
        this.nomCreateurResv239 = nomCreateurResv239;
    }

    public String getCodeGarantie240() {
        return this.codeGarantie240;
    }

    public DmOResv codeGarantie240(String codeGarantie240) {
        this.setCodeGarantie240(codeGarantie240);
        return this;
    }

    public void setCodeGarantie240(String codeGarantie240) {
        this.codeGarantie240 = codeGarantie240;
    }

    public String getFlgDed241() {
        return this.flgDed241;
    }

    public DmOResv flgDed241(String flgDed241) {
        this.setFlgDed241(flgDed241);
        return this;
    }

    public void setFlgDed241(String flgDed241) {
        this.flgDed241 = flgDed241;
    }

    public String getCodePays242() {
        return this.codePays242;
    }

    public DmOResv codePays242(String codePays242) {
        this.setCodePays242(codePays242);
        return this;
    }

    public void setCodePays242(String codePays242) {
        this.codePays242 = codePays242;
    }

    public String getLibPays243() {
        return this.libPays243;
    }

    public DmOResv libPays243(String libPays243) {
        this.setLibPays243(libPays243);
        return this;
    }

    public void setLibPays243(String libPays243) {
        this.libPays243 = libPays243;
    }

    public String getCodeNationalite244() {
        return this.codeNationalite244;
    }

    public DmOResv codeNationalite244(String codeNationalite244) {
        this.setCodeNationalite244(codeNationalite244);
        return this;
    }

    public void setCodeNationalite244(String codeNationalite244) {
        this.codeNationalite244 = codeNationalite244;
    }

    public String getLibNationalite245() {
        return this.libNationalite245;
    }

    public DmOResv libNationalite245(String libNationalite245) {
        this.setLibNationalite245(libNationalite245);
        return this;
    }

    public void setLibNationalite245(String libNationalite245) {
        this.libNationalite245 = libNationalite245;
    }

    public String getCodeSource246() {
        return this.codeSource246;
    }

    public DmOResv codeSource246(String codeSource246) {
        this.setCodeSource246(codeSource246);
        return this;
    }

    public void setCodeSource246(String codeSource246) {
        this.codeSource246 = codeSource246;
    }

    public String getLibSource247() {
        return this.libSource247;
    }

    public DmOResv libSource247(String libSource247) {
        this.setLibSource247(libSource247);
        return this;
    }

    public void setLibSource247(String libSource247) {
        this.libSource247 = libSource247;
    }

    public String getCodeGrandSource248() {
        return this.codeGrandSource248;
    }

    public DmOResv codeGrandSource248(String codeGrandSource248) {
        this.setCodeGrandSource248(codeGrandSource248);
        return this;
    }

    public void setCodeGrandSource248(String codeGrandSource248) {
        this.codeGrandSource248 = codeGrandSource248;
    }

    public String getCodeOrigine249() {
        return this.codeOrigine249;
    }

    public DmOResv codeOrigine249(String codeOrigine249) {
        this.setCodeOrigine249(codeOrigine249);
        return this;
    }

    public void setCodeOrigine249(String codeOrigine249) {
        this.codeOrigine249 = codeOrigine249;
    }

    public String getLibOrigine250() {
        return this.libOrigine250;
    }

    public DmOResv libOrigine250(String libOrigine250) {
        this.setLibOrigine250(libOrigine250);
        return this;
    }

    public void setLibOrigine250(String libOrigine250) {
        this.libOrigine250 = libOrigine250;
    }

    public String getCodeMarche251() {
        return this.codeMarche251;
    }

    public DmOResv codeMarche251(String codeMarche251) {
        this.setCodeMarche251(codeMarche251);
        return this;
    }

    public void setCodeMarche251(String codeMarche251) {
        this.codeMarche251 = codeMarche251;
    }

    public String getLibMarche252() {
        return this.libMarche252;
    }

    public DmOResv libMarche252(String libMarche252) {
        this.setLibMarche252(libMarche252);
        return this;
    }

    public void setLibMarche252(String libMarche252) {
        this.libMarche252 = libMarche252;
    }

    public String getCodeGrandMarche253() {
        return this.codeGrandMarche253;
    }

    public DmOResv codeGrandMarche253(String codeGrandMarche253) {
        this.setCodeGrandMarche253(codeGrandMarche253);
        return this;
    }

    public void setCodeGrandMarche253(String codeGrandMarche253) {
        this.codeGrandMarche253 = codeGrandMarche253;
    }

    public String getLibGrandMarche254() {
        return this.libGrandMarche254;
    }

    public DmOResv libGrandMarche254(String libGrandMarche254) {
        this.setLibGrandMarche254(libGrandMarche254);
        return this;
    }

    public void setLibGrandMarche254(String libGrandMarche254) {
        this.libGrandMarche254 = libGrandMarche254;
    }

    public String getCodePrix255() {
        return this.codePrix255;
    }

    public DmOResv codePrix255(String codePrix255) {
        this.setCodePrix255(codePrix255);
        return this;
    }

    public void setCodePrix255(String codePrix255) {
        this.codePrix255 = codePrix255;
    }

    public String getCategPrix256() {
        return this.categPrix256;
    }

    public DmOResv categPrix256(String categPrix256) {
        this.setCategPrix256(categPrix256);
        return this;
    }

    public void setCategPrix256(String categPrix256) {
        this.categPrix256 = categPrix256;
    }

    public String getLibPrix257() {
        return this.libPrix257;
    }

    public DmOResv libPrix257(String libPrix257) {
        this.setLibPrix257(libPrix257);
        return this;
    }

    public void setLibPrix257(String libPrix257) {
        this.libPrix257 = libPrix257;
    }

    public String getNumChb258() {
        return this.numChb258;
    }

    public DmOResv numChb258(String numChb258) {
        this.setNumChb258(numChb258);
        return this;
    }

    public void setNumChb258(String numChb258) {
        this.numChb258 = numChb258;
    }

    public String getDescriptionTypeChb259() {
        return this.descriptionTypeChb259;
    }

    public DmOResv descriptionTypeChb259(String descriptionTypeChb259) {
        this.setDescriptionTypeChb259(descriptionTypeChb259);
        return this;
    }

    public void setDescriptionTypeChb259(String descriptionTypeChb259) {
        this.descriptionTypeChb259 = descriptionTypeChb259;
    }

    public String getCodeTypeChb260() {
        return this.codeTypeChb260;
    }

    public DmOResv codeTypeChb260(String codeTypeChb260) {
        this.setCodeTypeChb260(codeTypeChb260);
        return this;
    }

    public void setCodeTypeChb260(String codeTypeChb260) {
        this.codeTypeChb260 = codeTypeChb260;
    }

    public String getClassChb261() {
        return this.classChb261;
    }

    public DmOResv classChb261(String classChb261) {
        this.setClassChb261(classChb261);
        return this;
    }

    public void setClassChb261(String classChb261) {
        this.classChb261 = classChb261;
    }

    public String getCaractChb262() {
        return this.caractChb262;
    }

    public DmOResv caractChb262(String caractChb262) {
        this.setCaractChb262(caractChb262);
        return this;
    }

    public void setCaractChb262(String caractChb262) {
        this.caractChb262 = caractChb262;
    }

    public String getTypeChbDeReservation263() {
        return this.typeChbDeReservation263;
    }

    public DmOResv typeChbDeReservation263(String typeChbDeReservation263) {
        this.setTypeChbDeReservation263(typeChbDeReservation263);
        return this;
    }

    public void setTypeChbDeReservation263(String typeChbDeReservation263) {
        this.typeChbDeReservation263 = typeChbDeReservation263;
    }

    public String getDescriptionTypeChbDeResv264() {
        return this.descriptionTypeChbDeResv264;
    }

    public DmOResv descriptionTypeChbDeResv264(String descriptionTypeChbDeResv264) {
        this.setDescriptionTypeChbDeResv264(descriptionTypeChbDeResv264);
        return this;
    }

    public void setDescriptionTypeChbDeResv264(String descriptionTypeChbDeResv264) {
        this.descriptionTypeChbDeResv264 = descriptionTypeChbDeResv264;
    }

    public String getCodeTypeChbDeResv265() {
        return this.codeTypeChbDeResv265;
    }

    public DmOResv codeTypeChbDeResv265(String codeTypeChbDeResv265) {
        this.setCodeTypeChbDeResv265(codeTypeChbDeResv265);
        return this;
    }

    public void setCodeTypeChbDeResv265(String codeTypeChbDeResv265) {
        this.codeTypeChbDeResv265 = codeTypeChbDeResv265;
    }

    public String getStatutDeReservation266() {
        return this.statutDeReservation266;
    }

    public DmOResv statutDeReservation266(String statutDeReservation266) {
        this.setStatutDeReservation266(statutDeReservation266);
        return this;
    }

    public void setStatutDeReservation266(String statutDeReservation266) {
        this.statutDeReservation266 = statutDeReservation266;
    }

    public String getCircuitDistribution267() {
        return this.circuitDistribution267;
    }

    public DmOResv circuitDistribution267(String circuitDistribution267) {
        this.setCircuitDistribution267(circuitDistribution267);
        return this;
    }

    public void setCircuitDistribution267(String circuitDistribution267) {
        this.circuitDistribution267 = circuitDistribution267;
    }

    public String getCircuitDistribUserRegroup268() {
        return this.circuitDistribUserRegroup268;
    }

    public DmOResv circuitDistribUserRegroup268(String circuitDistribUserRegroup268) {
        this.setCircuitDistribUserRegroup268(circuitDistribUserRegroup268);
        return this;
    }

    public void setCircuitDistribUserRegroup268(String circuitDistribUserRegroup268) {
        this.circuitDistribUserRegroup268 = circuitDistribUserRegroup268;
    }

    public String getNumCrs269() {
        return this.numCrs269;
    }

    public DmOResv numCrs269(String numCrs269) {
        this.setNumCrs269(numCrs269);
        return this;
    }

    public void setNumCrs269(String numCrs269) {
        this.numCrs269 = numCrs269;
    }

    public String getTypeRefCrs270() {
        return this.typeRefCrs270;
    }

    public DmOResv typeRefCrs270(String typeRefCrs270) {
        this.setTypeRefCrs270(typeRefCrs270);
        return this;
    }

    public void setTypeRefCrs270(String typeRefCrs270) {
        this.typeRefCrs270 = typeRefCrs270;
    }

    public LocalDate getCrsInsertDate271() {
        return this.crsInsertDate271;
    }

    public DmOResv crsInsertDate271(LocalDate crsInsertDate271) {
        this.setCrsInsertDate271(crsInsertDate271);
        return this;
    }

    public void setCrsInsertDate271(LocalDate crsInsertDate271) {
        this.crsInsertDate271 = crsInsertDate271;
    }

    public LocalDate getDateCreaResv272() {
        return this.dateCreaResv272;
    }

    public DmOResv dateCreaResv272(LocalDate dateCreaResv272) {
        this.setDateCreaResv272(dateCreaResv272);
        return this;
    }

    public void setDateCreaResv272(LocalDate dateCreaResv272) {
        this.dateCreaResv272 = dateCreaResv272;
    }

    public LocalDate getDatePremier273() {
        return this.datePremier273;
    }

    public DmOResv datePremier273(LocalDate datePremier273) {
        this.setDatePremier273(datePremier273);
        return this;
    }

    public void setDatePremier273(LocalDate datePremier273) {
        this.datePremier273 = datePremier273;
    }

    public String getStatutPremier274() {
        return this.statutPremier274;
    }

    public DmOResv statutPremier274(String statutPremier274) {
        this.setStatutPremier274(statutPremier274);
        return this;
    }

    public void setStatutPremier274(String statutPremier274) {
        this.statutPremier274 = statutPremier274;
    }

    public LocalDate getDateDernier275() {
        return this.dateDernier275;
    }

    public DmOResv dateDernier275(LocalDate dateDernier275) {
        this.setDateDernier275(dateDernier275);
        return this;
    }

    public void setDateDernier275(LocalDate dateDernier275) {
        this.dateDernier275 = dateDernier275;
    }

    public String getStatutDernier276() {
        return this.statutDernier276;
    }

    public DmOResv statutDernier276(String statutDernier276) {
        this.setStatutDernier276(statutDernier276);
        return this;
    }

    public void setStatutDernier276(String statutDernier276) {
        this.statutDernier276 = statutDernier276;
    }

    public LocalDate getDateDernierPseudo277() {
        return this.dateDernierPseudo277;
    }

    public DmOResv dateDernierPseudo277(LocalDate dateDernierPseudo277) {
        this.setDateDernierPseudo277(dateDernierPseudo277);
        return this;
    }

    public void setDateDernierPseudo277(LocalDate dateDernierPseudo277) {
        this.dateDernierPseudo277 = dateDernierPseudo277;
    }

    public String getStatutDernierPseudo278() {
        return this.statutDernierPseudo278;
    }

    public DmOResv statutDernierPseudo278(String statutDernierPseudo278) {
        this.setStatutDernierPseudo278(statutDernierPseudo278);
        return this;
    }

    public void setStatutDernierPseudo278(String statutDernierPseudo278) {
        this.statutDernierPseudo278 = statutDernierPseudo278;
    }

    public Integer getDiffDtCreaAnn279() {
        return this.diffDtCreaAnn279;
    }

    public DmOResv diffDtCreaAnn279(Integer diffDtCreaAnn279) {
        this.setDiffDtCreaAnn279(diffDtCreaAnn279);
        return this;
    }

    public void setDiffDtCreaAnn279(Integer diffDtCreaAnn279) {
        this.diffDtCreaAnn279 = diffDtCreaAnn279;
    }

    public Integer getDiffDtArrAnn280() {
        return this.diffDtArrAnn280;
    }

    public DmOResv diffDtArrAnn280(Integer diffDtArrAnn280) {
        this.setDiffDtArrAnn280(diffDtArrAnn280);
        return this;
    }

    public void setDiffDtArrAnn280(Integer diffDtArrAnn280) {
        this.diffDtArrAnn280 = diffDtArrAnn280;
    }

    public Integer getLeadtime281() {
        return this.leadtime281;
    }

    public DmOResv leadtime281(Integer leadtime281) {
        this.setLeadtime281(leadtime281);
        return this;
    }

    public void setLeadtime281(Integer leadtime281) {
        this.leadtime281 = leadtime281;
    }

    public Integer getLos282() {
        return this.los282;
    }

    public DmOResv los282(Integer los282) {
        this.setLos282(los282);
        return this;
    }

    public void setLos282(Integer los282) {
        this.los282 = los282;
    }

    public String getOccupantsGroupe283() {
        return this.occupantsGroupe283;
    }

    public DmOResv occupantsGroupe283(String occupantsGroupe283) {
        this.setOccupantsGroupe283(occupantsGroupe283);
        return this;
    }

    public void setOccupantsGroupe283(String occupantsGroupe283) {
        this.occupantsGroupe283 = occupantsGroupe283;
    }

    public Integer getNbNuitee284() {
        return this.nbNuitee284;
    }

    public DmOResv nbNuitee284(Integer nbNuitee284) {
        this.setNbNuitee284(nbNuitee284);
        return this;
    }

    public void setNbNuitee284(Integer nbNuitee284) {
        this.nbNuitee284 = nbNuitee284;
    }

    public Integer getNbNuiteeNnDed285() {
        return this.nbNuiteeNnDed285;
    }

    public DmOResv nbNuiteeNnDed285(Integer nbNuiteeNnDed285) {
        this.setNbNuiteeNnDed285(nbNuiteeNnDed285);
        return this;
    }

    public void setNbNuiteeNnDed285(Integer nbNuiteeNnDed285) {
        this.nbNuiteeNnDed285 = nbNuiteeNnDed285;
    }

    public Integer getNbResvAnn286() {
        return this.nbResvAnn286;
    }

    public DmOResv nbResvAnn286(Integer nbResvAnn286) {
        this.setNbResvAnn286(nbResvAnn286);
        return this;
    }

    public void setNbResvAnn286(Integer nbResvAnn286) {
        this.nbResvAnn286 = nbResvAnn286;
    }

    public Integer getNbAdu287() {
        return this.nbAdu287;
    }

    public DmOResv nbAdu287(Integer nbAdu287) {
        this.setNbAdu287(nbAdu287);
        return this;
    }

    public void setNbAdu287(Integer nbAdu287) {
        this.nbAdu287 = nbAdu287;
    }

    public Integer getNbEnf288() {
        return this.nbEnf288;
    }

    public DmOResv nbEnf288(Integer nbEnf288) {
        this.setNbEnf288(nbEnf288);
        return this;
    }

    public void setNbEnf288(Integer nbEnf288) {
        this.nbEnf288 = nbEnf288;
    }

    public Integer getNbPersDayU289() {
        return this.nbPersDayU289;
    }

    public DmOResv nbPersDayU289(Integer nbPersDayU289) {
        this.setNbPersDayU289(nbPersDayU289);
        return this;
    }

    public void setNbPersDayU289(Integer nbPersDayU289) {
        this.nbPersDayU289 = nbPersDayU289;
    }

    public Integer getNbPersArr290() {
        return this.nbPersArr290;
    }

    public DmOResv nbPersArr290(Integer nbPersArr290) {
        this.setNbPersArr290(nbPersArr290);
        return this;
    }

    public void setNbPersArr290(Integer nbPersArr290) {
        this.nbPersArr290 = nbPersArr290;
    }

    public Integer getNbPersDep291() {
        return this.nbPersDep291;
    }

    public DmOResv nbPersDep291(Integer nbPersDep291) {
        this.setNbPersDep291(nbPersDep291);
        return this;
    }

    public void setNbPersDep291(Integer nbPersDep291) {
        this.nbPersDep291 = nbPersDep291;
    }

    public Integer getNbPersAnn292() {
        return this.nbPersAnn292;
    }

    public DmOResv nbPersAnn292(Integer nbPersAnn292) {
        this.setNbPersAnn292(nbPersAnn292);
        return this;
    }

    public void setNbPersAnn292(Integer nbPersAnn292) {
        this.nbPersAnn292 = nbPersAnn292;
    }

    public Integer getNbPersNoshow293() {
        return this.nbPersNoshow293;
    }

    public DmOResv nbPersNoshow293(Integer nbPersNoshow293) {
        this.setNbPersNoshow293(nbPersNoshow293);
        return this;
    }

    public void setNbPersNoshow293(Integer nbPersNoshow293) {
        this.nbPersNoshow293 = nbPersNoshow293;
    }

    public Integer getNbChbDayU294() {
        return this.nbChbDayU294;
    }

    public DmOResv nbChbDayU294(Integer nbChbDayU294) {
        this.setNbChbDayU294(nbChbDayU294);
        return this;
    }

    public void setNbChbDayU294(Integer nbChbDayU294) {
        this.nbChbDayU294 = nbChbDayU294;
    }

    public Integer getNbChbArr295() {
        return this.nbChbArr295;
    }

    public DmOResv nbChbArr295(Integer nbChbArr295) {
        this.setNbChbArr295(nbChbArr295);
        return this;
    }

    public void setNbChbArr295(Integer nbChbArr295) {
        this.nbChbArr295 = nbChbArr295;
    }

    public Integer getNbChbDep296() {
        return this.nbChbDep296;
    }

    public DmOResv nbChbDep296(Integer nbChbDep296) {
        this.setNbChbDep296(nbChbDep296);
        return this;
    }

    public void setNbChbDep296(Integer nbChbDep296) {
        this.nbChbDep296 = nbChbDep296;
    }

    public Integer getNbChbAnn297() {
        return this.nbChbAnn297;
    }

    public DmOResv nbChbAnn297(Integer nbChbAnn297) {
        this.setNbChbAnn297(nbChbAnn297);
        return this;
    }

    public void setNbChbAnn297(Integer nbChbAnn297) {
        this.nbChbAnn297 = nbChbAnn297;
    }

    public Integer getNbChbNoshow298() {
        return this.nbChbNoshow298;
    }

    public DmOResv nbChbNoshow298(Integer nbChbNoshow298) {
        this.setNbChbNoshow298(nbChbNoshow298);
        return this;
    }

    public void setNbChbNoshow298(Integer nbChbNoshow298) {
        this.nbChbNoshow298 = nbChbNoshow298;
    }

    public Long getRevenuNetChambre299() {
        return this.revenuNetChambre299;
    }

    public DmOResv revenuNetChambre299(Long revenuNetChambre299) {
        this.setRevenuNetChambre299(revenuNetChambre299);
        return this;
    }

    public void setRevenuNetChambre299(Long revenuNetChambre299) {
        this.revenuNetChambre299 = revenuNetChambre299;
    }

    public Long getRevenuTaxeChambre300() {
        return this.revenuTaxeChambre300;
    }

    public DmOResv revenuTaxeChambre300(Long revenuTaxeChambre300) {
        this.setRevenuTaxeChambre300(revenuTaxeChambre300);
        return this;
    }

    public void setRevenuTaxeChambre300(Long revenuTaxeChambre300) {
        this.revenuTaxeChambre300 = revenuTaxeChambre300;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof DmOResv)) {
            return false;
        }
        return getId() != null && getId().equals(((DmOResv) o).getId());
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "DmOResv{" +
            "id=" + getId() +
            ", numLigne1=" + getNumLigne1() +
            ", resort2='" + getResort2() + "'" +
            ", resvNameId3=" + getResvNameId3() +
            ", clientOId4='" + getClientOId4() + "'" +
            ", typeChb5='" + getTypeChb5() + "'" +
            ", confirmationNo6='" + getConfirmationNo6() + "'" +
            ", clientMdmId7='" + getClientMdmId7() + "'" +
            ", nameId8=" + getNameId8() +
            ", parentResvNameId9=" + getParentResvNameId9() +
            ", contactId10=" + getContactId10() +
            ", agenceId11=" + getAgenceId11() +
            ", agenceNom12='" + getAgenceNom12() + "'" +
            ", societeId13=" + getSocieteId13() +
            ", groupeId14=" + getGroupeId14() +
            ", numBloc15=" + getNumBloc15() +
            ", typeResv16='" + getTypeResv16() + "'" +
            ", statutResv17='" + getStatutResv17() + "'" +
            ", dateDebutResv18='" + getDateDebutResv18() + "'" +
            ", dateFinResv19='" + getDateFinResv19() + "'" +
            ", truncDateDebutResv20='" + getTruncDateDebutResv20() + "'" +
            ", truncDateFinResv21='" + getTruncDateFinResv21() + "'" +
            ", dateAnnResv22='" + getDateAnnResv22() + "'" +
            ", pseudoRoomYn23='" + getPseudoRoomYn23() + "'" +
            ", createurResv24=" + getCreateurResv24() +
            ", nomCreateurResv25='" + getNomCreateurResv25() + "'" +
            ", codeGarantie26='" + getCodeGarantie26() + "'" +
            ", flgDed27='" + getFlgDed27() + "'" +
            ", codePays28='" + getCodePays28() + "'" +
            ", libPays29='" + getLibPays29() + "'" +
            ", codeNationalite30='" + getCodeNationalite30() + "'" +
            ", libNationalite31='" + getLibNationalite31() + "'" +
            ", codeSource32='" + getCodeSource32() + "'" +
            ", libSource33='" + getLibSource33() + "'" +
            ", codeGrandSource34='" + getCodeGrandSource34() + "'" +
            ", codeOrigine35='" + getCodeOrigine35() + "'" +
            ", libOrigine36='" + getLibOrigine36() + "'" +
            ", codeMarche37='" + getCodeMarche37() + "'" +
            ", libMarche38='" + getLibMarche38() + "'" +
            ", codeGrandMarche39='" + getCodeGrandMarche39() + "'" +
            ", libGrandMarche40='" + getLibGrandMarche40() + "'" +
            ", codePrix41='" + getCodePrix41() + "'" +
            ", categPrix42='" + getCategPrix42() + "'" +
            ", libPrix43='" + getLibPrix43() + "'" +
            ", numChb44='" + getNumChb44() + "'" +
            ", descriptionTypeChb45='" + getDescriptionTypeChb45() + "'" +
            ", codeTypeChb46='" + getCodeTypeChb46() + "'" +
            ", classChb47='" + getClassChb47() + "'" +
            ", caractChb48='" + getCaractChb48() + "'" +
            ", typeChbDeReservation49='" + getTypeChbDeReservation49() + "'" +
            ", descriptionTypeChbDeResv50='" + getDescriptionTypeChbDeResv50() + "'" +
            ", codeTypeChbDeResv51='" + getCodeTypeChbDeResv51() + "'" +
            ", statutDeReservation52='" + getStatutDeReservation52() + "'" +
            ", circuitDistribution53='" + getCircuitDistribution53() + "'" +
            ", circuitDistribUserRegroup54='" + getCircuitDistribUserRegroup54() + "'" +
            ", numCrs55='" + getNumCrs55() + "'" +
            ", typeRefCrs56='" + getTypeRefCrs56() + "'" +
            ", crsInsertDate57='" + getCrsInsertDate57() + "'" +
            ", dateCreaResv58='" + getDateCreaResv58() + "'" +
            ", datePremier59='" + getDatePremier59() + "'" +
            ", statutPremier60='" + getStatutPremier60() + "'" +
            ", dateDernier61='" + getDateDernier61() + "'" +
            ", statutDernier62='" + getStatutDernier62() + "'" +
            ", dateDernierPseudo63='" + getDateDernierPseudo63() + "'" +
            ", statutDernierPseudo64='" + getStatutDernierPseudo64() + "'" +
            ", diffDtCreaAnn65=" + getDiffDtCreaAnn65() +
            ", diffDtArrAnn66=" + getDiffDtArrAnn66() +
            ", leadtime67=" + getLeadtime67() +
            ", los68=" + getLos68() +
            ", occupantsGroupe69='" + getOccupantsGroupe69() + "'" +
            ", nbNuitee70=" + getNbNuitee70() +
            ", nbNuiteeNnDed71=" + getNbNuiteeNnDed71() +
            ", nbResvAnn72=" + getNbResvAnn72() +
            ", nbAdu73=" + getNbAdu73() +
            ", nbEnf74=" + getNbEnf74() +
            ", nbPersDayU75=" + getNbPersDayU75() +
            ", nbPersArr76=" + getNbPersArr76() +
            ", nbPersDep77=" + getNbPersDep77() +
            ", nbPersAnn78=" + getNbPersAnn78() +
            ", nbPersNoshow79=" + getNbPersNoshow79() +
            ", nbChbDayU80=" + getNbChbDayU80() +
            ", nbChbArr81=" + getNbChbArr81() +
            ", nbChbDep82=" + getNbChbDep82() +
            ", nbChbAnn83=" + getNbChbAnn83() +
            ", nbChbNoshow84=" + getNbChbNoshow84() +
            ", revenuNetChambre85=" + getRevenuNetChambre85() +
            ", revenuTaxeChambre86=" + getRevenuTaxeChambre86() +
            ", revenuNetChambreGlobal87=" + getRevenuNetChambreGlobal87() +
            ", revenuTaxeChambreGlobal88=" + getRevenuTaxeChambreGlobal88() +
            ", revenuNetBq89=" + getRevenuNetBq89() +
            ", revenuTaxeBq90=" + getRevenuTaxeBq90() +
            ", revenuNetBqGlobal91=" + getRevenuNetBqGlobal91() +
            ", revenuTaxeBqGlobal92=" + getRevenuTaxeBqGlobal92() +
            ", revenuNetExtra93=" + getRevenuNetExtra93() +
            ", revenuTaxeExtra94=" + getRevenuTaxeExtra94() +
            ", revenuNetExtraGlobal95=" + getRevenuNetExtraGlobal95() +
            ", revenuTaxeExtraGlobal96=" + getRevenuTaxeExtraGlobal96() +
            ", revenuNetTotal97=" + getRevenuNetTotal97() +
            ", revenuTaxeTotal98=" + getRevenuTaxeTotal98() +
            ", revenuNetTotalGlobal99=" + getRevenuNetTotalGlobal99() +
            ", revenuTaxeTotalGlobal100=" + getRevenuTaxeTotalGlobal100() +
            ", prodRevenuChambre101=" + getProdRevenuChambre101() +
            ", prodRevenuBq102=" + getProdRevenuBq102() +
            ", prodRevenuExtra103=" + getProdRevenuExtra103() +
            ", prodRevenuTotal104=" + getProdRevenuTotal104() +
            ", prodChambreNbNuitees105=" + getProdChambreNbNuitees105() +
            ", techCreateDate106='" + getTechCreateDate106() + "'" +
            ", techUpdateDate107='" + getTechUpdateDate107() + "'" +
            ", numLigne108=" + getNumLigne108() +
            ", resort109='" + getResort109() + "'" +
            ", resvNameId110=" + getResvNameId110() +
            ", clientOId111='" + getClientOId111() + "'" +
            ", typeChb112='" + getTypeChb112() + "'" +
            ", confirmationNo113='" + getConfirmationNo113() + "'" +
            ", clientMdmId114='" + getClientMdmId114() + "'" +
            ", nameId115=" + getNameId115() +
            ", parentResvNameId116=" + getParentResvNameId116() +
            ", contactId117=" + getContactId117() +
            ", agenceId118=" + getAgenceId118() +
            ", agenceNom119='" + getAgenceNom119() + "'" +
            ", societeId120=" + getSocieteId120() +
            ", groupeId121=" + getGroupeId121() +
            ", numBloc122=" + getNumBloc122() +
            ", typeResv123='" + getTypeResv123() + "'" +
            ", statutResv124='" + getStatutResv124() + "'" +
            ", dateDebutResv125='" + getDateDebutResv125() + "'" +
            ", dateFinResv126='" + getDateFinResv126() + "'" +
            ", truncDateDebutResv127='" + getTruncDateDebutResv127() + "'" +
            ", truncDateFinResv128='" + getTruncDateFinResv128() + "'" +
            ", dateAnnResv129='" + getDateAnnResv129() + "'" +
            ", pseudoRoomYn130='" + getPseudoRoomYn130() + "'" +
            ", createurResv131=" + getCreateurResv131() +
            ", nomCreateurResv132='" + getNomCreateurResv132() + "'" +
            ", codeGarantie133='" + getCodeGarantie133() + "'" +
            ", flgDed134='" + getFlgDed134() + "'" +
            ", codePays135='" + getCodePays135() + "'" +
            ", libPays136='" + getLibPays136() + "'" +
            ", codeNationalite137='" + getCodeNationalite137() + "'" +
            ", libNationalite138='" + getLibNationalite138() + "'" +
            ", codeSource139='" + getCodeSource139() + "'" +
            ", libSource140='" + getLibSource140() + "'" +
            ", codeGrandSource141='" + getCodeGrandSource141() + "'" +
            ", codeOrigine142='" + getCodeOrigine142() + "'" +
            ", libOrigine143='" + getLibOrigine143() + "'" +
            ", codeMarche144='" + getCodeMarche144() + "'" +
            ", libMarche145='" + getLibMarche145() + "'" +
            ", codeGrandMarche146='" + getCodeGrandMarche146() + "'" +
            ", libGrandMarche147='" + getLibGrandMarche147() + "'" +
            ", codePrix148='" + getCodePrix148() + "'" +
            ", categPrix149='" + getCategPrix149() + "'" +
            ", libPrix150='" + getLibPrix150() + "'" +
            ", numChb151='" + getNumChb151() + "'" +
            ", descriptionTypeChb152='" + getDescriptionTypeChb152() + "'" +
            ", codeTypeChb153='" + getCodeTypeChb153() + "'" +
            ", classChb154='" + getClassChb154() + "'" +
            ", caractChb155='" + getCaractChb155() + "'" +
            ", typeChbDeReservation156='" + getTypeChbDeReservation156() + "'" +
            ", descriptionTypeChbDeResv157='" + getDescriptionTypeChbDeResv157() + "'" +
            ", codeTypeChbDeResv158='" + getCodeTypeChbDeResv158() + "'" +
            ", statutDeReservation159='" + getStatutDeReservation159() + "'" +
            ", circuitDistribution160='" + getCircuitDistribution160() + "'" +
            ", circuitDistribUserRegroup161='" + getCircuitDistribUserRegroup161() + "'" +
            ", numCrs162='" + getNumCrs162() + "'" +
            ", typeRefCrs163='" + getTypeRefCrs163() + "'" +
            ", crsInsertDate164='" + getCrsInsertDate164() + "'" +
            ", dateCreaResv165='" + getDateCreaResv165() + "'" +
            ", datePremier166='" + getDatePremier166() + "'" +
            ", statutPremier167='" + getStatutPremier167() + "'" +
            ", dateDernier168='" + getDateDernier168() + "'" +
            ", statutDernier169='" + getStatutDernier169() + "'" +
            ", dateDernierPseudo170='" + getDateDernierPseudo170() + "'" +
            ", statutDernierPseudo171='" + getStatutDernierPseudo171() + "'" +
            ", diffDtCreaAnn172=" + getDiffDtCreaAnn172() +
            ", diffDtArrAnn173=" + getDiffDtArrAnn173() +
            ", leadtime174=" + getLeadtime174() +
            ", los175=" + getLos175() +
            ", occupantsGroupe176='" + getOccupantsGroupe176() + "'" +
            ", nbNuitee177=" + getNbNuitee177() +
            ", nbNuiteeNnDed178=" + getNbNuiteeNnDed178() +
            ", nbResvAnn179=" + getNbResvAnn179() +
            ", nbAdu180=" + getNbAdu180() +
            ", nbEnf181=" + getNbEnf181() +
            ", nbPersDayU182=" + getNbPersDayU182() +
            ", nbPersArr183=" + getNbPersArr183() +
            ", nbPersDep184=" + getNbPersDep184() +
            ", nbPersAnn185=" + getNbPersAnn185() +
            ", nbPersNoshow186=" + getNbPersNoshow186() +
            ", nbChbDayU187=" + getNbChbDayU187() +
            ", nbChbArr188=" + getNbChbArr188() +
            ", nbChbDep189=" + getNbChbDep189() +
            ", nbChbAnn190=" + getNbChbAnn190() +
            ", nbChbNoshow191=" + getNbChbNoshow191() +
            ", revenuNetChambre192=" + getRevenuNetChambre192() +
            ", revenuTaxeChambre193=" + getRevenuTaxeChambre193() +
            ", revenuNetChambreGlobal194=" + getRevenuNetChambreGlobal194() +
            ", revenuTaxeChambreGlobal195=" + getRevenuTaxeChambreGlobal195() +
            ", revenuNetBq196=" + getRevenuNetBq196() +
            ", revenuTaxeBq197=" + getRevenuTaxeBq197() +
            ", revenuNetBqGlobal198=" + getRevenuNetBqGlobal198() +
            ", revenuTaxeBqGlobal199=" + getRevenuTaxeBqGlobal199() +
            ", revenuNetExtra200=" + getRevenuNetExtra200() +
            ", revenuTaxeExtra201=" + getRevenuTaxeExtra201() +
            ", revenuNetExtraGlobal202=" + getRevenuNetExtraGlobal202() +
            ", revenuTaxeExtraGlobal203=" + getRevenuTaxeExtraGlobal203() +
            ", revenuNetTotal204=" + getRevenuNetTotal204() +
            ", revenuTaxeTotal205=" + getRevenuTaxeTotal205() +
            ", revenuNetTotalGlobal206=" + getRevenuNetTotalGlobal206() +
            ", revenuTaxeTotalGlobal207=" + getRevenuTaxeTotalGlobal207() +
            ", prodRevenuChambre208=" + getProdRevenuChambre208() +
            ", prodRevenuBq209=" + getProdRevenuBq209() +
            ", prodRevenuExtra210=" + getProdRevenuExtra210() +
            ", prodRevenuTotal211=" + getProdRevenuTotal211() +
            ", prodChambreNbNuitees212=" + getProdChambreNbNuitees212() +
            ", techCreateDate213='" + getTechCreateDate213() + "'" +
            ", techUpdateDate214='" + getTechUpdateDate214() + "'" +
            ", numLigne215=" + getNumLigne215() +
            ", resort216='" + getResort216() + "'" +
            ", resvNameId217=" + getResvNameId217() +
            ", clientOId218='" + getClientOId218() + "'" +
            ", typeChb219='" + getTypeChb219() + "'" +
            ", confirmationNo220='" + getConfirmationNo220() + "'" +
            ", clientMdmId221='" + getClientMdmId221() + "'" +
            ", nameId222=" + getNameId222() +
            ", parentResvNameId223=" + getParentResvNameId223() +
            ", contactId224=" + getContactId224() +
            ", agenceId225=" + getAgenceId225() +
            ", agenceNom226='" + getAgenceNom226() + "'" +
            ", societeId227=" + getSocieteId227() +
            ", groupeId228=" + getGroupeId228() +
            ", numBloc229=" + getNumBloc229() +
            ", typeResv230='" + getTypeResv230() + "'" +
            ", statutResv231='" + getStatutResv231() + "'" +
            ", dateDebutResv232='" + getDateDebutResv232() + "'" +
            ", dateFinResv233='" + getDateFinResv233() + "'" +
            ", truncDateDebutResv234='" + getTruncDateDebutResv234() + "'" +
            ", truncDateFinResv235='" + getTruncDateFinResv235() + "'" +
            ", dateAnnResv236='" + getDateAnnResv236() + "'" +
            ", pseudoRoomYn237='" + getPseudoRoomYn237() + "'" +
            ", createurResv238=" + getCreateurResv238() +
            ", nomCreateurResv239='" + getNomCreateurResv239() + "'" +
            ", codeGarantie240='" + getCodeGarantie240() + "'" +
            ", flgDed241='" + getFlgDed241() + "'" +
            ", codePays242='" + getCodePays242() + "'" +
            ", libPays243='" + getLibPays243() + "'" +
            ", codeNationalite244='" + getCodeNationalite244() + "'" +
            ", libNationalite245='" + getLibNationalite245() + "'" +
            ", codeSource246='" + getCodeSource246() + "'" +
            ", libSource247='" + getLibSource247() + "'" +
            ", codeGrandSource248='" + getCodeGrandSource248() + "'" +
            ", codeOrigine249='" + getCodeOrigine249() + "'" +
            ", libOrigine250='" + getLibOrigine250() + "'" +
            ", codeMarche251='" + getCodeMarche251() + "'" +
            ", libMarche252='" + getLibMarche252() + "'" +
            ", codeGrandMarche253='" + getCodeGrandMarche253() + "'" +
            ", libGrandMarche254='" + getLibGrandMarche254() + "'" +
            ", codePrix255='" + getCodePrix255() + "'" +
            ", categPrix256='" + getCategPrix256() + "'" +
            ", libPrix257='" + getLibPrix257() + "'" +
            ", numChb258='" + getNumChb258() + "'" +
            ", descriptionTypeChb259='" + getDescriptionTypeChb259() + "'" +
            ", codeTypeChb260='" + getCodeTypeChb260() + "'" +
            ", classChb261='" + getClassChb261() + "'" +
            ", caractChb262='" + getCaractChb262() + "'" +
            ", typeChbDeReservation263='" + getTypeChbDeReservation263() + "'" +
            ", descriptionTypeChbDeResv264='" + getDescriptionTypeChbDeResv264() + "'" +
            ", codeTypeChbDeResv265='" + getCodeTypeChbDeResv265() + "'" +
            ", statutDeReservation266='" + getStatutDeReservation266() + "'" +
            ", circuitDistribution267='" + getCircuitDistribution267() + "'" +
            ", circuitDistribUserRegroup268='" + getCircuitDistribUserRegroup268() + "'" +
            ", numCrs269='" + getNumCrs269() + "'" +
            ", typeRefCrs270='" + getTypeRefCrs270() + "'" +
            ", crsInsertDate271='" + getCrsInsertDate271() + "'" +
            ", dateCreaResv272='" + getDateCreaResv272() + "'" +
            ", datePremier273='" + getDatePremier273() + "'" +
            ", statutPremier274='" + getStatutPremier274() + "'" +
            ", dateDernier275='" + getDateDernier275() + "'" +
            ", statutDernier276='" + getStatutDernier276() + "'" +
            ", dateDernierPseudo277='" + getDateDernierPseudo277() + "'" +
            ", statutDernierPseudo278='" + getStatutDernierPseudo278() + "'" +
            ", diffDtCreaAnn279=" + getDiffDtCreaAnn279() +
            ", diffDtArrAnn280=" + getDiffDtArrAnn280() +
            ", leadtime281=" + getLeadtime281() +
            ", los282=" + getLos282() +
            ", occupantsGroupe283='" + getOccupantsGroupe283() + "'" +
            ", nbNuitee284=" + getNbNuitee284() +
            ", nbNuiteeNnDed285=" + getNbNuiteeNnDed285() +
            ", nbResvAnn286=" + getNbResvAnn286() +
            ", nbAdu287=" + getNbAdu287() +
            ", nbEnf288=" + getNbEnf288() +
            ", nbPersDayU289=" + getNbPersDayU289() +
            ", nbPersArr290=" + getNbPersArr290() +
            ", nbPersDep291=" + getNbPersDep291() +
            ", nbPersAnn292=" + getNbPersAnn292() +
            ", nbPersNoshow293=" + getNbPersNoshow293() +
            ", nbChbDayU294=" + getNbChbDayU294() +
            ", nbChbArr295=" + getNbChbArr295() +
            ", nbChbDep296=" + getNbChbDep296() +
            ", nbChbAnn297=" + getNbChbAnn297() +
            ", nbChbNoshow298=" + getNbChbNoshow298() +
            ", revenuNetChambre299=" + getRevenuNetChambre299() +
            ", revenuTaxeChambre300=" + getRevenuTaxeChambre300() +
            "}";
    }
}
