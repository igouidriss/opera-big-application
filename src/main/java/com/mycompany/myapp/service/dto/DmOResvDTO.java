package com.mycompany.myapp.service.dto;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Objects;

/**
 * A DTO for the {@link com.mycompany.myapp.domain.DmOResv} entity.
 */
@SuppressWarnings("common-java:DuplicatedBlocks")
public class DmOResvDTO implements Serializable {

    private Long id;

    private Integer numLigne1;

    private String resort2;

    private Integer resvNameId3;

    private String clientOId4;

    private String typeChb5;

    private String confirmationNo6;

    private String clientMdmId7;

    private Integer nameId8;

    private Integer parentResvNameId9;

    private Integer contactId10;

    private Integer agenceId11;

    private String agenceNom12;

    private Integer societeId13;

    private Integer groupeId14;

    private Integer numBloc15;

    private String typeResv16;

    private String statutResv17;

    private LocalDate dateDebutResv18;

    private LocalDate dateFinResv19;

    private LocalDate truncDateDebutResv20;

    private LocalDate truncDateFinResv21;

    private LocalDate dateAnnResv22;

    private String pseudoRoomYn23;

    private Integer createurResv24;

    private String nomCreateurResv25;

    private String codeGarantie26;

    private String flgDed27;

    private String codePays28;

    private String libPays29;

    private String codeNationalite30;

    private String libNationalite31;

    private String codeSource32;

    private String libSource33;

    private String codeGrandSource34;

    private String codeOrigine35;

    private String libOrigine36;

    private String codeMarche37;

    private String libMarche38;

    private String codeGrandMarche39;

    private String libGrandMarche40;

    private String codePrix41;

    private String categPrix42;

    private String libPrix43;

    private String numChb44;

    private String descriptionTypeChb45;

    private String codeTypeChb46;

    private String classChb47;

    private String caractChb48;

    private String typeChbDeReservation49;

    private String descriptionTypeChbDeResv50;

    private String codeTypeChbDeResv51;

    private String statutDeReservation52;

    private String circuitDistribution53;

    private String circuitDistribUserRegroup54;

    private String numCrs55;

    private String typeRefCrs56;

    private LocalDate crsInsertDate57;

    private LocalDate dateCreaResv58;

    private LocalDate datePremier59;

    private String statutPremier60;

    private LocalDate dateDernier61;

    private String statutDernier62;

    private LocalDate dateDernierPseudo63;

    private String statutDernierPseudo64;

    private Integer diffDtCreaAnn65;

    private Integer diffDtArrAnn66;

    private Integer leadtime67;

    private Integer los68;

    private String occupantsGroupe69;

    private Integer nbNuitee70;

    private Integer nbNuiteeNnDed71;

    private Integer nbResvAnn72;

    private Integer nbAdu73;

    private Integer nbEnf74;

    private Integer nbPersDayU75;

    private Integer nbPersArr76;

    private Integer nbPersDep77;

    private Integer nbPersAnn78;

    private Integer nbPersNoshow79;

    private Integer nbChbDayU80;

    private Integer nbChbArr81;

    private Integer nbChbDep82;

    private Integer nbChbAnn83;

    private Integer nbChbNoshow84;

    private Long revenuNetChambre85;

    private Long revenuTaxeChambre86;

    private Long revenuNetChambreGlobal87;

    private Long revenuTaxeChambreGlobal88;

    private Long revenuNetBq89;

    private Long revenuTaxeBq90;

    private Long revenuNetBqGlobal91;

    private Long revenuTaxeBqGlobal92;

    private Long revenuNetExtra93;

    private Long revenuTaxeExtra94;

    private Long revenuNetExtraGlobal95;

    private Long revenuTaxeExtraGlobal96;

    private Long revenuNetTotal97;

    private Long revenuTaxeTotal98;

    private Long revenuNetTotalGlobal99;

    private Long revenuTaxeTotalGlobal100;

    private Long prodRevenuChambre101;

    private Long prodRevenuBq102;

    private Long prodRevenuExtra103;

    private Long prodRevenuTotal104;

    private Long prodChambreNbNuitees105;

    private LocalDate techCreateDate106;

    private LocalDate techUpdateDate107;

    private Integer numLigne108;

    private String resort109;

    private Integer resvNameId110;

    private String clientOId111;

    private String typeChb112;

    private String confirmationNo113;

    private String clientMdmId114;

    private Integer nameId115;

    private Integer parentResvNameId116;

    private Integer contactId117;

    private Integer agenceId118;

    private String agenceNom119;

    private Integer societeId120;

    private Integer groupeId121;

    private Integer numBloc122;

    private String typeResv123;

    private String statutResv124;

    private LocalDate dateDebutResv125;

    private LocalDate dateFinResv126;

    private LocalDate truncDateDebutResv127;

    private LocalDate truncDateFinResv128;

    private LocalDate dateAnnResv129;

    private String pseudoRoomYn130;

    private Integer createurResv131;

    private String nomCreateurResv132;

    private String codeGarantie133;

    private String flgDed134;

    private String codePays135;

    private String libPays136;

    private String codeNationalite137;

    private String libNationalite138;

    private String codeSource139;

    private String libSource140;

    private String codeGrandSource141;

    private String codeOrigine142;

    private String libOrigine143;

    private String codeMarche144;

    private String libMarche145;

    private String codeGrandMarche146;

    private String libGrandMarche147;

    private String codePrix148;

    private String categPrix149;

    private String libPrix150;

    private String numChb151;

    private String descriptionTypeChb152;

    private String codeTypeChb153;

    private String classChb154;

    private String caractChb155;

    private String typeChbDeReservation156;

    private String descriptionTypeChbDeResv157;

    private String codeTypeChbDeResv158;

    private String statutDeReservation159;

    private String circuitDistribution160;

    private String circuitDistribUserRegroup161;

    private String numCrs162;

    private String typeRefCrs163;

    private LocalDate crsInsertDate164;

    private LocalDate dateCreaResv165;

    private LocalDate datePremier166;

    private String statutPremier167;

    private LocalDate dateDernier168;

    private String statutDernier169;

    private LocalDate dateDernierPseudo170;

    private String statutDernierPseudo171;

    private Integer diffDtCreaAnn172;

    private Integer diffDtArrAnn173;

    private Integer leadtime174;

    private Integer los175;

    private String occupantsGroupe176;

    private Integer nbNuitee177;

    private Integer nbNuiteeNnDed178;

    private Integer nbResvAnn179;

    private Integer nbAdu180;

    private Integer nbEnf181;

    private Integer nbPersDayU182;

    private Integer nbPersArr183;

    private Integer nbPersDep184;

    private Integer nbPersAnn185;

    private Integer nbPersNoshow186;

    private Integer nbChbDayU187;

    private Integer nbChbArr188;

    private Integer nbChbDep189;

    private Integer nbChbAnn190;

    private Integer nbChbNoshow191;

    private Long revenuNetChambre192;

    private Long revenuTaxeChambre193;

    private Long revenuNetChambreGlobal194;

    private Long revenuTaxeChambreGlobal195;

    private Long revenuNetBq196;

    private Long revenuTaxeBq197;

    private Long revenuNetBqGlobal198;

    private Long revenuTaxeBqGlobal199;

    private Long revenuNetExtra200;

    private Long revenuTaxeExtra201;

    private Long revenuNetExtraGlobal202;

    private Long revenuTaxeExtraGlobal203;

    private Long revenuNetTotal204;

    private Long revenuTaxeTotal205;

    private Long revenuNetTotalGlobal206;

    private Long revenuTaxeTotalGlobal207;

    private Long prodRevenuChambre208;

    private Long prodRevenuBq209;

    private Long prodRevenuExtra210;

    private Long prodRevenuTotal211;

    private Long prodChambreNbNuitees212;

    private LocalDate techCreateDate213;

    private LocalDate techUpdateDate214;

    private Integer numLigne215;

    private String resort216;

    private Integer resvNameId217;

    private String clientOId218;

    private String typeChb219;

    private String confirmationNo220;

    private String clientMdmId221;

    private Integer nameId222;

    private Integer parentResvNameId223;

    private Integer contactId224;

    private Integer agenceId225;

    private String agenceNom226;

    private Integer societeId227;

    private Integer groupeId228;

    private Integer numBloc229;

    private String typeResv230;

    private String statutResv231;

    private LocalDate dateDebutResv232;

    private LocalDate dateFinResv233;

    private LocalDate truncDateDebutResv234;

    private LocalDate truncDateFinResv235;

    private LocalDate dateAnnResv236;

    private String pseudoRoomYn237;

    private Integer createurResv238;

    private String nomCreateurResv239;

    private String codeGarantie240;

    private String flgDed241;

    private String codePays242;

    private String libPays243;

    private String codeNationalite244;

    private String libNationalite245;

    private String codeSource246;

    private String libSource247;

    private String codeGrandSource248;

    private String codeOrigine249;

    private String libOrigine250;

    private String codeMarche251;

    private String libMarche252;

    private String codeGrandMarche253;

    private String libGrandMarche254;

    private String codePrix255;

    private String categPrix256;

    private String libPrix257;

    private String numChb258;

    private String descriptionTypeChb259;

    private String codeTypeChb260;

    private String classChb261;

    private String caractChb262;

    private String typeChbDeReservation263;

    private String descriptionTypeChbDeResv264;

    private String codeTypeChbDeResv265;

    private String statutDeReservation266;

    private String circuitDistribution267;

    private String circuitDistribUserRegroup268;

    private String numCrs269;

    private String typeRefCrs270;

    private LocalDate crsInsertDate271;

    private LocalDate dateCreaResv272;

    private LocalDate datePremier273;

    private String statutPremier274;

    private LocalDate dateDernier275;

    private String statutDernier276;

    private LocalDate dateDernierPseudo277;

    private String statutDernierPseudo278;

    private Integer diffDtCreaAnn279;

    private Integer diffDtArrAnn280;

    private Integer leadtime281;

    private Integer los282;

    private String occupantsGroupe283;

    private Integer nbNuitee284;

    private Integer nbNuiteeNnDed285;

    private Integer nbResvAnn286;

    private Integer nbAdu287;

    private Integer nbEnf288;

    private Integer nbPersDayU289;

    private Integer nbPersArr290;

    private Integer nbPersDep291;

    private Integer nbPersAnn292;

    private Integer nbPersNoshow293;

    private Integer nbChbDayU294;

    private Integer nbChbArr295;

    private Integer nbChbDep296;

    private Integer nbChbAnn297;

    private Integer nbChbNoshow298;

    private Long revenuNetChambre299;

    private Long revenuTaxeChambre300;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getNumLigne1() {
        return numLigne1;
    }

    public void setNumLigne1(Integer numLigne1) {
        this.numLigne1 = numLigne1;
    }

    public String getResort2() {
        return resort2;
    }

    public void setResort2(String resort2) {
        this.resort2 = resort2;
    }

    public Integer getResvNameId3() {
        return resvNameId3;
    }

    public void setResvNameId3(Integer resvNameId3) {
        this.resvNameId3 = resvNameId3;
    }

    public String getClientOId4() {
        return clientOId4;
    }

    public void setClientOId4(String clientOId4) {
        this.clientOId4 = clientOId4;
    }

    public String getTypeChb5() {
        return typeChb5;
    }

    public void setTypeChb5(String typeChb5) {
        this.typeChb5 = typeChb5;
    }

    public String getConfirmationNo6() {
        return confirmationNo6;
    }

    public void setConfirmationNo6(String confirmationNo6) {
        this.confirmationNo6 = confirmationNo6;
    }

    public String getClientMdmId7() {
        return clientMdmId7;
    }

    public void setClientMdmId7(String clientMdmId7) {
        this.clientMdmId7 = clientMdmId7;
    }

    public Integer getNameId8() {
        return nameId8;
    }

    public void setNameId8(Integer nameId8) {
        this.nameId8 = nameId8;
    }

    public Integer getParentResvNameId9() {
        return parentResvNameId9;
    }

    public void setParentResvNameId9(Integer parentResvNameId9) {
        this.parentResvNameId9 = parentResvNameId9;
    }

    public Integer getContactId10() {
        return contactId10;
    }

    public void setContactId10(Integer contactId10) {
        this.contactId10 = contactId10;
    }

    public Integer getAgenceId11() {
        return agenceId11;
    }

    public void setAgenceId11(Integer agenceId11) {
        this.agenceId11 = agenceId11;
    }

    public String getAgenceNom12() {
        return agenceNom12;
    }

    public void setAgenceNom12(String agenceNom12) {
        this.agenceNom12 = agenceNom12;
    }

    public Integer getSocieteId13() {
        return societeId13;
    }

    public void setSocieteId13(Integer societeId13) {
        this.societeId13 = societeId13;
    }

    public Integer getGroupeId14() {
        return groupeId14;
    }

    public void setGroupeId14(Integer groupeId14) {
        this.groupeId14 = groupeId14;
    }

    public Integer getNumBloc15() {
        return numBloc15;
    }

    public void setNumBloc15(Integer numBloc15) {
        this.numBloc15 = numBloc15;
    }

    public String getTypeResv16() {
        return typeResv16;
    }

    public void setTypeResv16(String typeResv16) {
        this.typeResv16 = typeResv16;
    }

    public String getStatutResv17() {
        return statutResv17;
    }

    public void setStatutResv17(String statutResv17) {
        this.statutResv17 = statutResv17;
    }

    public LocalDate getDateDebutResv18() {
        return dateDebutResv18;
    }

    public void setDateDebutResv18(LocalDate dateDebutResv18) {
        this.dateDebutResv18 = dateDebutResv18;
    }

    public LocalDate getDateFinResv19() {
        return dateFinResv19;
    }

    public void setDateFinResv19(LocalDate dateFinResv19) {
        this.dateFinResv19 = dateFinResv19;
    }

    public LocalDate getTruncDateDebutResv20() {
        return truncDateDebutResv20;
    }

    public void setTruncDateDebutResv20(LocalDate truncDateDebutResv20) {
        this.truncDateDebutResv20 = truncDateDebutResv20;
    }

    public LocalDate getTruncDateFinResv21() {
        return truncDateFinResv21;
    }

    public void setTruncDateFinResv21(LocalDate truncDateFinResv21) {
        this.truncDateFinResv21 = truncDateFinResv21;
    }

    public LocalDate getDateAnnResv22() {
        return dateAnnResv22;
    }

    public void setDateAnnResv22(LocalDate dateAnnResv22) {
        this.dateAnnResv22 = dateAnnResv22;
    }

    public String getPseudoRoomYn23() {
        return pseudoRoomYn23;
    }

    public void setPseudoRoomYn23(String pseudoRoomYn23) {
        this.pseudoRoomYn23 = pseudoRoomYn23;
    }

    public Integer getCreateurResv24() {
        return createurResv24;
    }

    public void setCreateurResv24(Integer createurResv24) {
        this.createurResv24 = createurResv24;
    }

    public String getNomCreateurResv25() {
        return nomCreateurResv25;
    }

    public void setNomCreateurResv25(String nomCreateurResv25) {
        this.nomCreateurResv25 = nomCreateurResv25;
    }

    public String getCodeGarantie26() {
        return codeGarantie26;
    }

    public void setCodeGarantie26(String codeGarantie26) {
        this.codeGarantie26 = codeGarantie26;
    }

    public String getFlgDed27() {
        return flgDed27;
    }

    public void setFlgDed27(String flgDed27) {
        this.flgDed27 = flgDed27;
    }

    public String getCodePays28() {
        return codePays28;
    }

    public void setCodePays28(String codePays28) {
        this.codePays28 = codePays28;
    }

    public String getLibPays29() {
        return libPays29;
    }

    public void setLibPays29(String libPays29) {
        this.libPays29 = libPays29;
    }

    public String getCodeNationalite30() {
        return codeNationalite30;
    }

    public void setCodeNationalite30(String codeNationalite30) {
        this.codeNationalite30 = codeNationalite30;
    }

    public String getLibNationalite31() {
        return libNationalite31;
    }

    public void setLibNationalite31(String libNationalite31) {
        this.libNationalite31 = libNationalite31;
    }

    public String getCodeSource32() {
        return codeSource32;
    }

    public void setCodeSource32(String codeSource32) {
        this.codeSource32 = codeSource32;
    }

    public String getLibSource33() {
        return libSource33;
    }

    public void setLibSource33(String libSource33) {
        this.libSource33 = libSource33;
    }

    public String getCodeGrandSource34() {
        return codeGrandSource34;
    }

    public void setCodeGrandSource34(String codeGrandSource34) {
        this.codeGrandSource34 = codeGrandSource34;
    }

    public String getCodeOrigine35() {
        return codeOrigine35;
    }

    public void setCodeOrigine35(String codeOrigine35) {
        this.codeOrigine35 = codeOrigine35;
    }

    public String getLibOrigine36() {
        return libOrigine36;
    }

    public void setLibOrigine36(String libOrigine36) {
        this.libOrigine36 = libOrigine36;
    }

    public String getCodeMarche37() {
        return codeMarche37;
    }

    public void setCodeMarche37(String codeMarche37) {
        this.codeMarche37 = codeMarche37;
    }

    public String getLibMarche38() {
        return libMarche38;
    }

    public void setLibMarche38(String libMarche38) {
        this.libMarche38 = libMarche38;
    }

    public String getCodeGrandMarche39() {
        return codeGrandMarche39;
    }

    public void setCodeGrandMarche39(String codeGrandMarche39) {
        this.codeGrandMarche39 = codeGrandMarche39;
    }

    public String getLibGrandMarche40() {
        return libGrandMarche40;
    }

    public void setLibGrandMarche40(String libGrandMarche40) {
        this.libGrandMarche40 = libGrandMarche40;
    }

    public String getCodePrix41() {
        return codePrix41;
    }

    public void setCodePrix41(String codePrix41) {
        this.codePrix41 = codePrix41;
    }

    public String getCategPrix42() {
        return categPrix42;
    }

    public void setCategPrix42(String categPrix42) {
        this.categPrix42 = categPrix42;
    }

    public String getLibPrix43() {
        return libPrix43;
    }

    public void setLibPrix43(String libPrix43) {
        this.libPrix43 = libPrix43;
    }

    public String getNumChb44() {
        return numChb44;
    }

    public void setNumChb44(String numChb44) {
        this.numChb44 = numChb44;
    }

    public String getDescriptionTypeChb45() {
        return descriptionTypeChb45;
    }

    public void setDescriptionTypeChb45(String descriptionTypeChb45) {
        this.descriptionTypeChb45 = descriptionTypeChb45;
    }

    public String getCodeTypeChb46() {
        return codeTypeChb46;
    }

    public void setCodeTypeChb46(String codeTypeChb46) {
        this.codeTypeChb46 = codeTypeChb46;
    }

    public String getClassChb47() {
        return classChb47;
    }

    public void setClassChb47(String classChb47) {
        this.classChb47 = classChb47;
    }

    public String getCaractChb48() {
        return caractChb48;
    }

    public void setCaractChb48(String caractChb48) {
        this.caractChb48 = caractChb48;
    }

    public String getTypeChbDeReservation49() {
        return typeChbDeReservation49;
    }

    public void setTypeChbDeReservation49(String typeChbDeReservation49) {
        this.typeChbDeReservation49 = typeChbDeReservation49;
    }

    public String getDescriptionTypeChbDeResv50() {
        return descriptionTypeChbDeResv50;
    }

    public void setDescriptionTypeChbDeResv50(String descriptionTypeChbDeResv50) {
        this.descriptionTypeChbDeResv50 = descriptionTypeChbDeResv50;
    }

    public String getCodeTypeChbDeResv51() {
        return codeTypeChbDeResv51;
    }

    public void setCodeTypeChbDeResv51(String codeTypeChbDeResv51) {
        this.codeTypeChbDeResv51 = codeTypeChbDeResv51;
    }

    public String getStatutDeReservation52() {
        return statutDeReservation52;
    }

    public void setStatutDeReservation52(String statutDeReservation52) {
        this.statutDeReservation52 = statutDeReservation52;
    }

    public String getCircuitDistribution53() {
        return circuitDistribution53;
    }

    public void setCircuitDistribution53(String circuitDistribution53) {
        this.circuitDistribution53 = circuitDistribution53;
    }

    public String getCircuitDistribUserRegroup54() {
        return circuitDistribUserRegroup54;
    }

    public void setCircuitDistribUserRegroup54(String circuitDistribUserRegroup54) {
        this.circuitDistribUserRegroup54 = circuitDistribUserRegroup54;
    }

    public String getNumCrs55() {
        return numCrs55;
    }

    public void setNumCrs55(String numCrs55) {
        this.numCrs55 = numCrs55;
    }

    public String getTypeRefCrs56() {
        return typeRefCrs56;
    }

    public void setTypeRefCrs56(String typeRefCrs56) {
        this.typeRefCrs56 = typeRefCrs56;
    }

    public LocalDate getCrsInsertDate57() {
        return crsInsertDate57;
    }

    public void setCrsInsertDate57(LocalDate crsInsertDate57) {
        this.crsInsertDate57 = crsInsertDate57;
    }

    public LocalDate getDateCreaResv58() {
        return dateCreaResv58;
    }

    public void setDateCreaResv58(LocalDate dateCreaResv58) {
        this.dateCreaResv58 = dateCreaResv58;
    }

    public LocalDate getDatePremier59() {
        return datePremier59;
    }

    public void setDatePremier59(LocalDate datePremier59) {
        this.datePremier59 = datePremier59;
    }

    public String getStatutPremier60() {
        return statutPremier60;
    }

    public void setStatutPremier60(String statutPremier60) {
        this.statutPremier60 = statutPremier60;
    }

    public LocalDate getDateDernier61() {
        return dateDernier61;
    }

    public void setDateDernier61(LocalDate dateDernier61) {
        this.dateDernier61 = dateDernier61;
    }

    public String getStatutDernier62() {
        return statutDernier62;
    }

    public void setStatutDernier62(String statutDernier62) {
        this.statutDernier62 = statutDernier62;
    }

    public LocalDate getDateDernierPseudo63() {
        return dateDernierPseudo63;
    }

    public void setDateDernierPseudo63(LocalDate dateDernierPseudo63) {
        this.dateDernierPseudo63 = dateDernierPseudo63;
    }

    public String getStatutDernierPseudo64() {
        return statutDernierPseudo64;
    }

    public void setStatutDernierPseudo64(String statutDernierPseudo64) {
        this.statutDernierPseudo64 = statutDernierPseudo64;
    }

    public Integer getDiffDtCreaAnn65() {
        return diffDtCreaAnn65;
    }

    public void setDiffDtCreaAnn65(Integer diffDtCreaAnn65) {
        this.diffDtCreaAnn65 = diffDtCreaAnn65;
    }

    public Integer getDiffDtArrAnn66() {
        return diffDtArrAnn66;
    }

    public void setDiffDtArrAnn66(Integer diffDtArrAnn66) {
        this.diffDtArrAnn66 = diffDtArrAnn66;
    }

    public Integer getLeadtime67() {
        return leadtime67;
    }

    public void setLeadtime67(Integer leadtime67) {
        this.leadtime67 = leadtime67;
    }

    public Integer getLos68() {
        return los68;
    }

    public void setLos68(Integer los68) {
        this.los68 = los68;
    }

    public String getOccupantsGroupe69() {
        return occupantsGroupe69;
    }

    public void setOccupantsGroupe69(String occupantsGroupe69) {
        this.occupantsGroupe69 = occupantsGroupe69;
    }

    public Integer getNbNuitee70() {
        return nbNuitee70;
    }

    public void setNbNuitee70(Integer nbNuitee70) {
        this.nbNuitee70 = nbNuitee70;
    }

    public Integer getNbNuiteeNnDed71() {
        return nbNuiteeNnDed71;
    }

    public void setNbNuiteeNnDed71(Integer nbNuiteeNnDed71) {
        this.nbNuiteeNnDed71 = nbNuiteeNnDed71;
    }

    public Integer getNbResvAnn72() {
        return nbResvAnn72;
    }

    public void setNbResvAnn72(Integer nbResvAnn72) {
        this.nbResvAnn72 = nbResvAnn72;
    }

    public Integer getNbAdu73() {
        return nbAdu73;
    }

    public void setNbAdu73(Integer nbAdu73) {
        this.nbAdu73 = nbAdu73;
    }

    public Integer getNbEnf74() {
        return nbEnf74;
    }

    public void setNbEnf74(Integer nbEnf74) {
        this.nbEnf74 = nbEnf74;
    }

    public Integer getNbPersDayU75() {
        return nbPersDayU75;
    }

    public void setNbPersDayU75(Integer nbPersDayU75) {
        this.nbPersDayU75 = nbPersDayU75;
    }

    public Integer getNbPersArr76() {
        return nbPersArr76;
    }

    public void setNbPersArr76(Integer nbPersArr76) {
        this.nbPersArr76 = nbPersArr76;
    }

    public Integer getNbPersDep77() {
        return nbPersDep77;
    }

    public void setNbPersDep77(Integer nbPersDep77) {
        this.nbPersDep77 = nbPersDep77;
    }

    public Integer getNbPersAnn78() {
        return nbPersAnn78;
    }

    public void setNbPersAnn78(Integer nbPersAnn78) {
        this.nbPersAnn78 = nbPersAnn78;
    }

    public Integer getNbPersNoshow79() {
        return nbPersNoshow79;
    }

    public void setNbPersNoshow79(Integer nbPersNoshow79) {
        this.nbPersNoshow79 = nbPersNoshow79;
    }

    public Integer getNbChbDayU80() {
        return nbChbDayU80;
    }

    public void setNbChbDayU80(Integer nbChbDayU80) {
        this.nbChbDayU80 = nbChbDayU80;
    }

    public Integer getNbChbArr81() {
        return nbChbArr81;
    }

    public void setNbChbArr81(Integer nbChbArr81) {
        this.nbChbArr81 = nbChbArr81;
    }

    public Integer getNbChbDep82() {
        return nbChbDep82;
    }

    public void setNbChbDep82(Integer nbChbDep82) {
        this.nbChbDep82 = nbChbDep82;
    }

    public Integer getNbChbAnn83() {
        return nbChbAnn83;
    }

    public void setNbChbAnn83(Integer nbChbAnn83) {
        this.nbChbAnn83 = nbChbAnn83;
    }

    public Integer getNbChbNoshow84() {
        return nbChbNoshow84;
    }

    public void setNbChbNoshow84(Integer nbChbNoshow84) {
        this.nbChbNoshow84 = nbChbNoshow84;
    }

    public Long getRevenuNetChambre85() {
        return revenuNetChambre85;
    }

    public void setRevenuNetChambre85(Long revenuNetChambre85) {
        this.revenuNetChambre85 = revenuNetChambre85;
    }

    public Long getRevenuTaxeChambre86() {
        return revenuTaxeChambre86;
    }

    public void setRevenuTaxeChambre86(Long revenuTaxeChambre86) {
        this.revenuTaxeChambre86 = revenuTaxeChambre86;
    }

    public Long getRevenuNetChambreGlobal87() {
        return revenuNetChambreGlobal87;
    }

    public void setRevenuNetChambreGlobal87(Long revenuNetChambreGlobal87) {
        this.revenuNetChambreGlobal87 = revenuNetChambreGlobal87;
    }

    public Long getRevenuTaxeChambreGlobal88() {
        return revenuTaxeChambreGlobal88;
    }

    public void setRevenuTaxeChambreGlobal88(Long revenuTaxeChambreGlobal88) {
        this.revenuTaxeChambreGlobal88 = revenuTaxeChambreGlobal88;
    }

    public Long getRevenuNetBq89() {
        return revenuNetBq89;
    }

    public void setRevenuNetBq89(Long revenuNetBq89) {
        this.revenuNetBq89 = revenuNetBq89;
    }

    public Long getRevenuTaxeBq90() {
        return revenuTaxeBq90;
    }

    public void setRevenuTaxeBq90(Long revenuTaxeBq90) {
        this.revenuTaxeBq90 = revenuTaxeBq90;
    }

    public Long getRevenuNetBqGlobal91() {
        return revenuNetBqGlobal91;
    }

    public void setRevenuNetBqGlobal91(Long revenuNetBqGlobal91) {
        this.revenuNetBqGlobal91 = revenuNetBqGlobal91;
    }

    public Long getRevenuTaxeBqGlobal92() {
        return revenuTaxeBqGlobal92;
    }

    public void setRevenuTaxeBqGlobal92(Long revenuTaxeBqGlobal92) {
        this.revenuTaxeBqGlobal92 = revenuTaxeBqGlobal92;
    }

    public Long getRevenuNetExtra93() {
        return revenuNetExtra93;
    }

    public void setRevenuNetExtra93(Long revenuNetExtra93) {
        this.revenuNetExtra93 = revenuNetExtra93;
    }

    public Long getRevenuTaxeExtra94() {
        return revenuTaxeExtra94;
    }

    public void setRevenuTaxeExtra94(Long revenuTaxeExtra94) {
        this.revenuTaxeExtra94 = revenuTaxeExtra94;
    }

    public Long getRevenuNetExtraGlobal95() {
        return revenuNetExtraGlobal95;
    }

    public void setRevenuNetExtraGlobal95(Long revenuNetExtraGlobal95) {
        this.revenuNetExtraGlobal95 = revenuNetExtraGlobal95;
    }

    public Long getRevenuTaxeExtraGlobal96() {
        return revenuTaxeExtraGlobal96;
    }

    public void setRevenuTaxeExtraGlobal96(Long revenuTaxeExtraGlobal96) {
        this.revenuTaxeExtraGlobal96 = revenuTaxeExtraGlobal96;
    }

    public Long getRevenuNetTotal97() {
        return revenuNetTotal97;
    }

    public void setRevenuNetTotal97(Long revenuNetTotal97) {
        this.revenuNetTotal97 = revenuNetTotal97;
    }

    public Long getRevenuTaxeTotal98() {
        return revenuTaxeTotal98;
    }

    public void setRevenuTaxeTotal98(Long revenuTaxeTotal98) {
        this.revenuTaxeTotal98 = revenuTaxeTotal98;
    }

    public Long getRevenuNetTotalGlobal99() {
        return revenuNetTotalGlobal99;
    }

    public void setRevenuNetTotalGlobal99(Long revenuNetTotalGlobal99) {
        this.revenuNetTotalGlobal99 = revenuNetTotalGlobal99;
    }

    public Long getRevenuTaxeTotalGlobal100() {
        return revenuTaxeTotalGlobal100;
    }

    public void setRevenuTaxeTotalGlobal100(Long revenuTaxeTotalGlobal100) {
        this.revenuTaxeTotalGlobal100 = revenuTaxeTotalGlobal100;
    }

    public Long getProdRevenuChambre101() {
        return prodRevenuChambre101;
    }

    public void setProdRevenuChambre101(Long prodRevenuChambre101) {
        this.prodRevenuChambre101 = prodRevenuChambre101;
    }

    public Long getProdRevenuBq102() {
        return prodRevenuBq102;
    }

    public void setProdRevenuBq102(Long prodRevenuBq102) {
        this.prodRevenuBq102 = prodRevenuBq102;
    }

    public Long getProdRevenuExtra103() {
        return prodRevenuExtra103;
    }

    public void setProdRevenuExtra103(Long prodRevenuExtra103) {
        this.prodRevenuExtra103 = prodRevenuExtra103;
    }

    public Long getProdRevenuTotal104() {
        return prodRevenuTotal104;
    }

    public void setProdRevenuTotal104(Long prodRevenuTotal104) {
        this.prodRevenuTotal104 = prodRevenuTotal104;
    }

    public Long getProdChambreNbNuitees105() {
        return prodChambreNbNuitees105;
    }

    public void setProdChambreNbNuitees105(Long prodChambreNbNuitees105) {
        this.prodChambreNbNuitees105 = prodChambreNbNuitees105;
    }

    public LocalDate getTechCreateDate106() {
        return techCreateDate106;
    }

    public void setTechCreateDate106(LocalDate techCreateDate106) {
        this.techCreateDate106 = techCreateDate106;
    }

    public LocalDate getTechUpdateDate107() {
        return techUpdateDate107;
    }

    public void setTechUpdateDate107(LocalDate techUpdateDate107) {
        this.techUpdateDate107 = techUpdateDate107;
    }

    public Integer getNumLigne108() {
        return numLigne108;
    }

    public void setNumLigne108(Integer numLigne108) {
        this.numLigne108 = numLigne108;
    }

    public String getResort109() {
        return resort109;
    }

    public void setResort109(String resort109) {
        this.resort109 = resort109;
    }

    public Integer getResvNameId110() {
        return resvNameId110;
    }

    public void setResvNameId110(Integer resvNameId110) {
        this.resvNameId110 = resvNameId110;
    }

    public String getClientOId111() {
        return clientOId111;
    }

    public void setClientOId111(String clientOId111) {
        this.clientOId111 = clientOId111;
    }

    public String getTypeChb112() {
        return typeChb112;
    }

    public void setTypeChb112(String typeChb112) {
        this.typeChb112 = typeChb112;
    }

    public String getConfirmationNo113() {
        return confirmationNo113;
    }

    public void setConfirmationNo113(String confirmationNo113) {
        this.confirmationNo113 = confirmationNo113;
    }

    public String getClientMdmId114() {
        return clientMdmId114;
    }

    public void setClientMdmId114(String clientMdmId114) {
        this.clientMdmId114 = clientMdmId114;
    }

    public Integer getNameId115() {
        return nameId115;
    }

    public void setNameId115(Integer nameId115) {
        this.nameId115 = nameId115;
    }

    public Integer getParentResvNameId116() {
        return parentResvNameId116;
    }

    public void setParentResvNameId116(Integer parentResvNameId116) {
        this.parentResvNameId116 = parentResvNameId116;
    }

    public Integer getContactId117() {
        return contactId117;
    }

    public void setContactId117(Integer contactId117) {
        this.contactId117 = contactId117;
    }

    public Integer getAgenceId118() {
        return agenceId118;
    }

    public void setAgenceId118(Integer agenceId118) {
        this.agenceId118 = agenceId118;
    }

    public String getAgenceNom119() {
        return agenceNom119;
    }

    public void setAgenceNom119(String agenceNom119) {
        this.agenceNom119 = agenceNom119;
    }

    public Integer getSocieteId120() {
        return societeId120;
    }

    public void setSocieteId120(Integer societeId120) {
        this.societeId120 = societeId120;
    }

    public Integer getGroupeId121() {
        return groupeId121;
    }

    public void setGroupeId121(Integer groupeId121) {
        this.groupeId121 = groupeId121;
    }

    public Integer getNumBloc122() {
        return numBloc122;
    }

    public void setNumBloc122(Integer numBloc122) {
        this.numBloc122 = numBloc122;
    }

    public String getTypeResv123() {
        return typeResv123;
    }

    public void setTypeResv123(String typeResv123) {
        this.typeResv123 = typeResv123;
    }

    public String getStatutResv124() {
        return statutResv124;
    }

    public void setStatutResv124(String statutResv124) {
        this.statutResv124 = statutResv124;
    }

    public LocalDate getDateDebutResv125() {
        return dateDebutResv125;
    }

    public void setDateDebutResv125(LocalDate dateDebutResv125) {
        this.dateDebutResv125 = dateDebutResv125;
    }

    public LocalDate getDateFinResv126() {
        return dateFinResv126;
    }

    public void setDateFinResv126(LocalDate dateFinResv126) {
        this.dateFinResv126 = dateFinResv126;
    }

    public LocalDate getTruncDateDebutResv127() {
        return truncDateDebutResv127;
    }

    public void setTruncDateDebutResv127(LocalDate truncDateDebutResv127) {
        this.truncDateDebutResv127 = truncDateDebutResv127;
    }

    public LocalDate getTruncDateFinResv128() {
        return truncDateFinResv128;
    }

    public void setTruncDateFinResv128(LocalDate truncDateFinResv128) {
        this.truncDateFinResv128 = truncDateFinResv128;
    }

    public LocalDate getDateAnnResv129() {
        return dateAnnResv129;
    }

    public void setDateAnnResv129(LocalDate dateAnnResv129) {
        this.dateAnnResv129 = dateAnnResv129;
    }

    public String getPseudoRoomYn130() {
        return pseudoRoomYn130;
    }

    public void setPseudoRoomYn130(String pseudoRoomYn130) {
        this.pseudoRoomYn130 = pseudoRoomYn130;
    }

    public Integer getCreateurResv131() {
        return createurResv131;
    }

    public void setCreateurResv131(Integer createurResv131) {
        this.createurResv131 = createurResv131;
    }

    public String getNomCreateurResv132() {
        return nomCreateurResv132;
    }

    public void setNomCreateurResv132(String nomCreateurResv132) {
        this.nomCreateurResv132 = nomCreateurResv132;
    }

    public String getCodeGarantie133() {
        return codeGarantie133;
    }

    public void setCodeGarantie133(String codeGarantie133) {
        this.codeGarantie133 = codeGarantie133;
    }

    public String getFlgDed134() {
        return flgDed134;
    }

    public void setFlgDed134(String flgDed134) {
        this.flgDed134 = flgDed134;
    }

    public String getCodePays135() {
        return codePays135;
    }

    public void setCodePays135(String codePays135) {
        this.codePays135 = codePays135;
    }

    public String getLibPays136() {
        return libPays136;
    }

    public void setLibPays136(String libPays136) {
        this.libPays136 = libPays136;
    }

    public String getCodeNationalite137() {
        return codeNationalite137;
    }

    public void setCodeNationalite137(String codeNationalite137) {
        this.codeNationalite137 = codeNationalite137;
    }

    public String getLibNationalite138() {
        return libNationalite138;
    }

    public void setLibNationalite138(String libNationalite138) {
        this.libNationalite138 = libNationalite138;
    }

    public String getCodeSource139() {
        return codeSource139;
    }

    public void setCodeSource139(String codeSource139) {
        this.codeSource139 = codeSource139;
    }

    public String getLibSource140() {
        return libSource140;
    }

    public void setLibSource140(String libSource140) {
        this.libSource140 = libSource140;
    }

    public String getCodeGrandSource141() {
        return codeGrandSource141;
    }

    public void setCodeGrandSource141(String codeGrandSource141) {
        this.codeGrandSource141 = codeGrandSource141;
    }

    public String getCodeOrigine142() {
        return codeOrigine142;
    }

    public void setCodeOrigine142(String codeOrigine142) {
        this.codeOrigine142 = codeOrigine142;
    }

    public String getLibOrigine143() {
        return libOrigine143;
    }

    public void setLibOrigine143(String libOrigine143) {
        this.libOrigine143 = libOrigine143;
    }

    public String getCodeMarche144() {
        return codeMarche144;
    }

    public void setCodeMarche144(String codeMarche144) {
        this.codeMarche144 = codeMarche144;
    }

    public String getLibMarche145() {
        return libMarche145;
    }

    public void setLibMarche145(String libMarche145) {
        this.libMarche145 = libMarche145;
    }

    public String getCodeGrandMarche146() {
        return codeGrandMarche146;
    }

    public void setCodeGrandMarche146(String codeGrandMarche146) {
        this.codeGrandMarche146 = codeGrandMarche146;
    }

    public String getLibGrandMarche147() {
        return libGrandMarche147;
    }

    public void setLibGrandMarche147(String libGrandMarche147) {
        this.libGrandMarche147 = libGrandMarche147;
    }

    public String getCodePrix148() {
        return codePrix148;
    }

    public void setCodePrix148(String codePrix148) {
        this.codePrix148 = codePrix148;
    }

    public String getCategPrix149() {
        return categPrix149;
    }

    public void setCategPrix149(String categPrix149) {
        this.categPrix149 = categPrix149;
    }

    public String getLibPrix150() {
        return libPrix150;
    }

    public void setLibPrix150(String libPrix150) {
        this.libPrix150 = libPrix150;
    }

    public String getNumChb151() {
        return numChb151;
    }

    public void setNumChb151(String numChb151) {
        this.numChb151 = numChb151;
    }

    public String getDescriptionTypeChb152() {
        return descriptionTypeChb152;
    }

    public void setDescriptionTypeChb152(String descriptionTypeChb152) {
        this.descriptionTypeChb152 = descriptionTypeChb152;
    }

    public String getCodeTypeChb153() {
        return codeTypeChb153;
    }

    public void setCodeTypeChb153(String codeTypeChb153) {
        this.codeTypeChb153 = codeTypeChb153;
    }

    public String getClassChb154() {
        return classChb154;
    }

    public void setClassChb154(String classChb154) {
        this.classChb154 = classChb154;
    }

    public String getCaractChb155() {
        return caractChb155;
    }

    public void setCaractChb155(String caractChb155) {
        this.caractChb155 = caractChb155;
    }

    public String getTypeChbDeReservation156() {
        return typeChbDeReservation156;
    }

    public void setTypeChbDeReservation156(String typeChbDeReservation156) {
        this.typeChbDeReservation156 = typeChbDeReservation156;
    }

    public String getDescriptionTypeChbDeResv157() {
        return descriptionTypeChbDeResv157;
    }

    public void setDescriptionTypeChbDeResv157(String descriptionTypeChbDeResv157) {
        this.descriptionTypeChbDeResv157 = descriptionTypeChbDeResv157;
    }

    public String getCodeTypeChbDeResv158() {
        return codeTypeChbDeResv158;
    }

    public void setCodeTypeChbDeResv158(String codeTypeChbDeResv158) {
        this.codeTypeChbDeResv158 = codeTypeChbDeResv158;
    }

    public String getStatutDeReservation159() {
        return statutDeReservation159;
    }

    public void setStatutDeReservation159(String statutDeReservation159) {
        this.statutDeReservation159 = statutDeReservation159;
    }

    public String getCircuitDistribution160() {
        return circuitDistribution160;
    }

    public void setCircuitDistribution160(String circuitDistribution160) {
        this.circuitDistribution160 = circuitDistribution160;
    }

    public String getCircuitDistribUserRegroup161() {
        return circuitDistribUserRegroup161;
    }

    public void setCircuitDistribUserRegroup161(String circuitDistribUserRegroup161) {
        this.circuitDistribUserRegroup161 = circuitDistribUserRegroup161;
    }

    public String getNumCrs162() {
        return numCrs162;
    }

    public void setNumCrs162(String numCrs162) {
        this.numCrs162 = numCrs162;
    }

    public String getTypeRefCrs163() {
        return typeRefCrs163;
    }

    public void setTypeRefCrs163(String typeRefCrs163) {
        this.typeRefCrs163 = typeRefCrs163;
    }

    public LocalDate getCrsInsertDate164() {
        return crsInsertDate164;
    }

    public void setCrsInsertDate164(LocalDate crsInsertDate164) {
        this.crsInsertDate164 = crsInsertDate164;
    }

    public LocalDate getDateCreaResv165() {
        return dateCreaResv165;
    }

    public void setDateCreaResv165(LocalDate dateCreaResv165) {
        this.dateCreaResv165 = dateCreaResv165;
    }

    public LocalDate getDatePremier166() {
        return datePremier166;
    }

    public void setDatePremier166(LocalDate datePremier166) {
        this.datePremier166 = datePremier166;
    }

    public String getStatutPremier167() {
        return statutPremier167;
    }

    public void setStatutPremier167(String statutPremier167) {
        this.statutPremier167 = statutPremier167;
    }

    public LocalDate getDateDernier168() {
        return dateDernier168;
    }

    public void setDateDernier168(LocalDate dateDernier168) {
        this.dateDernier168 = dateDernier168;
    }

    public String getStatutDernier169() {
        return statutDernier169;
    }

    public void setStatutDernier169(String statutDernier169) {
        this.statutDernier169 = statutDernier169;
    }

    public LocalDate getDateDernierPseudo170() {
        return dateDernierPseudo170;
    }

    public void setDateDernierPseudo170(LocalDate dateDernierPseudo170) {
        this.dateDernierPseudo170 = dateDernierPseudo170;
    }

    public String getStatutDernierPseudo171() {
        return statutDernierPseudo171;
    }

    public void setStatutDernierPseudo171(String statutDernierPseudo171) {
        this.statutDernierPseudo171 = statutDernierPseudo171;
    }

    public Integer getDiffDtCreaAnn172() {
        return diffDtCreaAnn172;
    }

    public void setDiffDtCreaAnn172(Integer diffDtCreaAnn172) {
        this.diffDtCreaAnn172 = diffDtCreaAnn172;
    }

    public Integer getDiffDtArrAnn173() {
        return diffDtArrAnn173;
    }

    public void setDiffDtArrAnn173(Integer diffDtArrAnn173) {
        this.diffDtArrAnn173 = diffDtArrAnn173;
    }

    public Integer getLeadtime174() {
        return leadtime174;
    }

    public void setLeadtime174(Integer leadtime174) {
        this.leadtime174 = leadtime174;
    }

    public Integer getLos175() {
        return los175;
    }

    public void setLos175(Integer los175) {
        this.los175 = los175;
    }

    public String getOccupantsGroupe176() {
        return occupantsGroupe176;
    }

    public void setOccupantsGroupe176(String occupantsGroupe176) {
        this.occupantsGroupe176 = occupantsGroupe176;
    }

    public Integer getNbNuitee177() {
        return nbNuitee177;
    }

    public void setNbNuitee177(Integer nbNuitee177) {
        this.nbNuitee177 = nbNuitee177;
    }

    public Integer getNbNuiteeNnDed178() {
        return nbNuiteeNnDed178;
    }

    public void setNbNuiteeNnDed178(Integer nbNuiteeNnDed178) {
        this.nbNuiteeNnDed178 = nbNuiteeNnDed178;
    }

    public Integer getNbResvAnn179() {
        return nbResvAnn179;
    }

    public void setNbResvAnn179(Integer nbResvAnn179) {
        this.nbResvAnn179 = nbResvAnn179;
    }

    public Integer getNbAdu180() {
        return nbAdu180;
    }

    public void setNbAdu180(Integer nbAdu180) {
        this.nbAdu180 = nbAdu180;
    }

    public Integer getNbEnf181() {
        return nbEnf181;
    }

    public void setNbEnf181(Integer nbEnf181) {
        this.nbEnf181 = nbEnf181;
    }

    public Integer getNbPersDayU182() {
        return nbPersDayU182;
    }

    public void setNbPersDayU182(Integer nbPersDayU182) {
        this.nbPersDayU182 = nbPersDayU182;
    }

    public Integer getNbPersArr183() {
        return nbPersArr183;
    }

    public void setNbPersArr183(Integer nbPersArr183) {
        this.nbPersArr183 = nbPersArr183;
    }

    public Integer getNbPersDep184() {
        return nbPersDep184;
    }

    public void setNbPersDep184(Integer nbPersDep184) {
        this.nbPersDep184 = nbPersDep184;
    }

    public Integer getNbPersAnn185() {
        return nbPersAnn185;
    }

    public void setNbPersAnn185(Integer nbPersAnn185) {
        this.nbPersAnn185 = nbPersAnn185;
    }

    public Integer getNbPersNoshow186() {
        return nbPersNoshow186;
    }

    public void setNbPersNoshow186(Integer nbPersNoshow186) {
        this.nbPersNoshow186 = nbPersNoshow186;
    }

    public Integer getNbChbDayU187() {
        return nbChbDayU187;
    }

    public void setNbChbDayU187(Integer nbChbDayU187) {
        this.nbChbDayU187 = nbChbDayU187;
    }

    public Integer getNbChbArr188() {
        return nbChbArr188;
    }

    public void setNbChbArr188(Integer nbChbArr188) {
        this.nbChbArr188 = nbChbArr188;
    }

    public Integer getNbChbDep189() {
        return nbChbDep189;
    }

    public void setNbChbDep189(Integer nbChbDep189) {
        this.nbChbDep189 = nbChbDep189;
    }

    public Integer getNbChbAnn190() {
        return nbChbAnn190;
    }

    public void setNbChbAnn190(Integer nbChbAnn190) {
        this.nbChbAnn190 = nbChbAnn190;
    }

    public Integer getNbChbNoshow191() {
        return nbChbNoshow191;
    }

    public void setNbChbNoshow191(Integer nbChbNoshow191) {
        this.nbChbNoshow191 = nbChbNoshow191;
    }

    public Long getRevenuNetChambre192() {
        return revenuNetChambre192;
    }

    public void setRevenuNetChambre192(Long revenuNetChambre192) {
        this.revenuNetChambre192 = revenuNetChambre192;
    }

    public Long getRevenuTaxeChambre193() {
        return revenuTaxeChambre193;
    }

    public void setRevenuTaxeChambre193(Long revenuTaxeChambre193) {
        this.revenuTaxeChambre193 = revenuTaxeChambre193;
    }

    public Long getRevenuNetChambreGlobal194() {
        return revenuNetChambreGlobal194;
    }

    public void setRevenuNetChambreGlobal194(Long revenuNetChambreGlobal194) {
        this.revenuNetChambreGlobal194 = revenuNetChambreGlobal194;
    }

    public Long getRevenuTaxeChambreGlobal195() {
        return revenuTaxeChambreGlobal195;
    }

    public void setRevenuTaxeChambreGlobal195(Long revenuTaxeChambreGlobal195) {
        this.revenuTaxeChambreGlobal195 = revenuTaxeChambreGlobal195;
    }

    public Long getRevenuNetBq196() {
        return revenuNetBq196;
    }

    public void setRevenuNetBq196(Long revenuNetBq196) {
        this.revenuNetBq196 = revenuNetBq196;
    }

    public Long getRevenuTaxeBq197() {
        return revenuTaxeBq197;
    }

    public void setRevenuTaxeBq197(Long revenuTaxeBq197) {
        this.revenuTaxeBq197 = revenuTaxeBq197;
    }

    public Long getRevenuNetBqGlobal198() {
        return revenuNetBqGlobal198;
    }

    public void setRevenuNetBqGlobal198(Long revenuNetBqGlobal198) {
        this.revenuNetBqGlobal198 = revenuNetBqGlobal198;
    }

    public Long getRevenuTaxeBqGlobal199() {
        return revenuTaxeBqGlobal199;
    }

    public void setRevenuTaxeBqGlobal199(Long revenuTaxeBqGlobal199) {
        this.revenuTaxeBqGlobal199 = revenuTaxeBqGlobal199;
    }

    public Long getRevenuNetExtra200() {
        return revenuNetExtra200;
    }

    public void setRevenuNetExtra200(Long revenuNetExtra200) {
        this.revenuNetExtra200 = revenuNetExtra200;
    }

    public Long getRevenuTaxeExtra201() {
        return revenuTaxeExtra201;
    }

    public void setRevenuTaxeExtra201(Long revenuTaxeExtra201) {
        this.revenuTaxeExtra201 = revenuTaxeExtra201;
    }

    public Long getRevenuNetExtraGlobal202() {
        return revenuNetExtraGlobal202;
    }

    public void setRevenuNetExtraGlobal202(Long revenuNetExtraGlobal202) {
        this.revenuNetExtraGlobal202 = revenuNetExtraGlobal202;
    }

    public Long getRevenuTaxeExtraGlobal203() {
        return revenuTaxeExtraGlobal203;
    }

    public void setRevenuTaxeExtraGlobal203(Long revenuTaxeExtraGlobal203) {
        this.revenuTaxeExtraGlobal203 = revenuTaxeExtraGlobal203;
    }

    public Long getRevenuNetTotal204() {
        return revenuNetTotal204;
    }

    public void setRevenuNetTotal204(Long revenuNetTotal204) {
        this.revenuNetTotal204 = revenuNetTotal204;
    }

    public Long getRevenuTaxeTotal205() {
        return revenuTaxeTotal205;
    }

    public void setRevenuTaxeTotal205(Long revenuTaxeTotal205) {
        this.revenuTaxeTotal205 = revenuTaxeTotal205;
    }

    public Long getRevenuNetTotalGlobal206() {
        return revenuNetTotalGlobal206;
    }

    public void setRevenuNetTotalGlobal206(Long revenuNetTotalGlobal206) {
        this.revenuNetTotalGlobal206 = revenuNetTotalGlobal206;
    }

    public Long getRevenuTaxeTotalGlobal207() {
        return revenuTaxeTotalGlobal207;
    }

    public void setRevenuTaxeTotalGlobal207(Long revenuTaxeTotalGlobal207) {
        this.revenuTaxeTotalGlobal207 = revenuTaxeTotalGlobal207;
    }

    public Long getProdRevenuChambre208() {
        return prodRevenuChambre208;
    }

    public void setProdRevenuChambre208(Long prodRevenuChambre208) {
        this.prodRevenuChambre208 = prodRevenuChambre208;
    }

    public Long getProdRevenuBq209() {
        return prodRevenuBq209;
    }

    public void setProdRevenuBq209(Long prodRevenuBq209) {
        this.prodRevenuBq209 = prodRevenuBq209;
    }

    public Long getProdRevenuExtra210() {
        return prodRevenuExtra210;
    }

    public void setProdRevenuExtra210(Long prodRevenuExtra210) {
        this.prodRevenuExtra210 = prodRevenuExtra210;
    }

    public Long getProdRevenuTotal211() {
        return prodRevenuTotal211;
    }

    public void setProdRevenuTotal211(Long prodRevenuTotal211) {
        this.prodRevenuTotal211 = prodRevenuTotal211;
    }

    public Long getProdChambreNbNuitees212() {
        return prodChambreNbNuitees212;
    }

    public void setProdChambreNbNuitees212(Long prodChambreNbNuitees212) {
        this.prodChambreNbNuitees212 = prodChambreNbNuitees212;
    }

    public LocalDate getTechCreateDate213() {
        return techCreateDate213;
    }

    public void setTechCreateDate213(LocalDate techCreateDate213) {
        this.techCreateDate213 = techCreateDate213;
    }

    public LocalDate getTechUpdateDate214() {
        return techUpdateDate214;
    }

    public void setTechUpdateDate214(LocalDate techUpdateDate214) {
        this.techUpdateDate214 = techUpdateDate214;
    }

    public Integer getNumLigne215() {
        return numLigne215;
    }

    public void setNumLigne215(Integer numLigne215) {
        this.numLigne215 = numLigne215;
    }

    public String getResort216() {
        return resort216;
    }

    public void setResort216(String resort216) {
        this.resort216 = resort216;
    }

    public Integer getResvNameId217() {
        return resvNameId217;
    }

    public void setResvNameId217(Integer resvNameId217) {
        this.resvNameId217 = resvNameId217;
    }

    public String getClientOId218() {
        return clientOId218;
    }

    public void setClientOId218(String clientOId218) {
        this.clientOId218 = clientOId218;
    }

    public String getTypeChb219() {
        return typeChb219;
    }

    public void setTypeChb219(String typeChb219) {
        this.typeChb219 = typeChb219;
    }

    public String getConfirmationNo220() {
        return confirmationNo220;
    }

    public void setConfirmationNo220(String confirmationNo220) {
        this.confirmationNo220 = confirmationNo220;
    }

    public String getClientMdmId221() {
        return clientMdmId221;
    }

    public void setClientMdmId221(String clientMdmId221) {
        this.clientMdmId221 = clientMdmId221;
    }

    public Integer getNameId222() {
        return nameId222;
    }

    public void setNameId222(Integer nameId222) {
        this.nameId222 = nameId222;
    }

    public Integer getParentResvNameId223() {
        return parentResvNameId223;
    }

    public void setParentResvNameId223(Integer parentResvNameId223) {
        this.parentResvNameId223 = parentResvNameId223;
    }

    public Integer getContactId224() {
        return contactId224;
    }

    public void setContactId224(Integer contactId224) {
        this.contactId224 = contactId224;
    }

    public Integer getAgenceId225() {
        return agenceId225;
    }

    public void setAgenceId225(Integer agenceId225) {
        this.agenceId225 = agenceId225;
    }

    public String getAgenceNom226() {
        return agenceNom226;
    }

    public void setAgenceNom226(String agenceNom226) {
        this.agenceNom226 = agenceNom226;
    }

    public Integer getSocieteId227() {
        return societeId227;
    }

    public void setSocieteId227(Integer societeId227) {
        this.societeId227 = societeId227;
    }

    public Integer getGroupeId228() {
        return groupeId228;
    }

    public void setGroupeId228(Integer groupeId228) {
        this.groupeId228 = groupeId228;
    }

    public Integer getNumBloc229() {
        return numBloc229;
    }

    public void setNumBloc229(Integer numBloc229) {
        this.numBloc229 = numBloc229;
    }

    public String getTypeResv230() {
        return typeResv230;
    }

    public void setTypeResv230(String typeResv230) {
        this.typeResv230 = typeResv230;
    }

    public String getStatutResv231() {
        return statutResv231;
    }

    public void setStatutResv231(String statutResv231) {
        this.statutResv231 = statutResv231;
    }

    public LocalDate getDateDebutResv232() {
        return dateDebutResv232;
    }

    public void setDateDebutResv232(LocalDate dateDebutResv232) {
        this.dateDebutResv232 = dateDebutResv232;
    }

    public LocalDate getDateFinResv233() {
        return dateFinResv233;
    }

    public void setDateFinResv233(LocalDate dateFinResv233) {
        this.dateFinResv233 = dateFinResv233;
    }

    public LocalDate getTruncDateDebutResv234() {
        return truncDateDebutResv234;
    }

    public void setTruncDateDebutResv234(LocalDate truncDateDebutResv234) {
        this.truncDateDebutResv234 = truncDateDebutResv234;
    }

    public LocalDate getTruncDateFinResv235() {
        return truncDateFinResv235;
    }

    public void setTruncDateFinResv235(LocalDate truncDateFinResv235) {
        this.truncDateFinResv235 = truncDateFinResv235;
    }

    public LocalDate getDateAnnResv236() {
        return dateAnnResv236;
    }

    public void setDateAnnResv236(LocalDate dateAnnResv236) {
        this.dateAnnResv236 = dateAnnResv236;
    }

    public String getPseudoRoomYn237() {
        return pseudoRoomYn237;
    }

    public void setPseudoRoomYn237(String pseudoRoomYn237) {
        this.pseudoRoomYn237 = pseudoRoomYn237;
    }

    public Integer getCreateurResv238() {
        return createurResv238;
    }

    public void setCreateurResv238(Integer createurResv238) {
        this.createurResv238 = createurResv238;
    }

    public String getNomCreateurResv239() {
        return nomCreateurResv239;
    }

    public void setNomCreateurResv239(String nomCreateurResv239) {
        this.nomCreateurResv239 = nomCreateurResv239;
    }

    public String getCodeGarantie240() {
        return codeGarantie240;
    }

    public void setCodeGarantie240(String codeGarantie240) {
        this.codeGarantie240 = codeGarantie240;
    }

    public String getFlgDed241() {
        return flgDed241;
    }

    public void setFlgDed241(String flgDed241) {
        this.flgDed241 = flgDed241;
    }

    public String getCodePays242() {
        return codePays242;
    }

    public void setCodePays242(String codePays242) {
        this.codePays242 = codePays242;
    }

    public String getLibPays243() {
        return libPays243;
    }

    public void setLibPays243(String libPays243) {
        this.libPays243 = libPays243;
    }

    public String getCodeNationalite244() {
        return codeNationalite244;
    }

    public void setCodeNationalite244(String codeNationalite244) {
        this.codeNationalite244 = codeNationalite244;
    }

    public String getLibNationalite245() {
        return libNationalite245;
    }

    public void setLibNationalite245(String libNationalite245) {
        this.libNationalite245 = libNationalite245;
    }

    public String getCodeSource246() {
        return codeSource246;
    }

    public void setCodeSource246(String codeSource246) {
        this.codeSource246 = codeSource246;
    }

    public String getLibSource247() {
        return libSource247;
    }

    public void setLibSource247(String libSource247) {
        this.libSource247 = libSource247;
    }

    public String getCodeGrandSource248() {
        return codeGrandSource248;
    }

    public void setCodeGrandSource248(String codeGrandSource248) {
        this.codeGrandSource248 = codeGrandSource248;
    }

    public String getCodeOrigine249() {
        return codeOrigine249;
    }

    public void setCodeOrigine249(String codeOrigine249) {
        this.codeOrigine249 = codeOrigine249;
    }

    public String getLibOrigine250() {
        return libOrigine250;
    }

    public void setLibOrigine250(String libOrigine250) {
        this.libOrigine250 = libOrigine250;
    }

    public String getCodeMarche251() {
        return codeMarche251;
    }

    public void setCodeMarche251(String codeMarche251) {
        this.codeMarche251 = codeMarche251;
    }

    public String getLibMarche252() {
        return libMarche252;
    }

    public void setLibMarche252(String libMarche252) {
        this.libMarche252 = libMarche252;
    }

    public String getCodeGrandMarche253() {
        return codeGrandMarche253;
    }

    public void setCodeGrandMarche253(String codeGrandMarche253) {
        this.codeGrandMarche253 = codeGrandMarche253;
    }

    public String getLibGrandMarche254() {
        return libGrandMarche254;
    }

    public void setLibGrandMarche254(String libGrandMarche254) {
        this.libGrandMarche254 = libGrandMarche254;
    }

    public String getCodePrix255() {
        return codePrix255;
    }

    public void setCodePrix255(String codePrix255) {
        this.codePrix255 = codePrix255;
    }

    public String getCategPrix256() {
        return categPrix256;
    }

    public void setCategPrix256(String categPrix256) {
        this.categPrix256 = categPrix256;
    }

    public String getLibPrix257() {
        return libPrix257;
    }

    public void setLibPrix257(String libPrix257) {
        this.libPrix257 = libPrix257;
    }

    public String getNumChb258() {
        return numChb258;
    }

    public void setNumChb258(String numChb258) {
        this.numChb258 = numChb258;
    }

    public String getDescriptionTypeChb259() {
        return descriptionTypeChb259;
    }

    public void setDescriptionTypeChb259(String descriptionTypeChb259) {
        this.descriptionTypeChb259 = descriptionTypeChb259;
    }

    public String getCodeTypeChb260() {
        return codeTypeChb260;
    }

    public void setCodeTypeChb260(String codeTypeChb260) {
        this.codeTypeChb260 = codeTypeChb260;
    }

    public String getClassChb261() {
        return classChb261;
    }

    public void setClassChb261(String classChb261) {
        this.classChb261 = classChb261;
    }

    public String getCaractChb262() {
        return caractChb262;
    }

    public void setCaractChb262(String caractChb262) {
        this.caractChb262 = caractChb262;
    }

    public String getTypeChbDeReservation263() {
        return typeChbDeReservation263;
    }

    public void setTypeChbDeReservation263(String typeChbDeReservation263) {
        this.typeChbDeReservation263 = typeChbDeReservation263;
    }

    public String getDescriptionTypeChbDeResv264() {
        return descriptionTypeChbDeResv264;
    }

    public void setDescriptionTypeChbDeResv264(String descriptionTypeChbDeResv264) {
        this.descriptionTypeChbDeResv264 = descriptionTypeChbDeResv264;
    }

    public String getCodeTypeChbDeResv265() {
        return codeTypeChbDeResv265;
    }

    public void setCodeTypeChbDeResv265(String codeTypeChbDeResv265) {
        this.codeTypeChbDeResv265 = codeTypeChbDeResv265;
    }

    public String getStatutDeReservation266() {
        return statutDeReservation266;
    }

    public void setStatutDeReservation266(String statutDeReservation266) {
        this.statutDeReservation266 = statutDeReservation266;
    }

    public String getCircuitDistribution267() {
        return circuitDistribution267;
    }

    public void setCircuitDistribution267(String circuitDistribution267) {
        this.circuitDistribution267 = circuitDistribution267;
    }

    public String getCircuitDistribUserRegroup268() {
        return circuitDistribUserRegroup268;
    }

    public void setCircuitDistribUserRegroup268(String circuitDistribUserRegroup268) {
        this.circuitDistribUserRegroup268 = circuitDistribUserRegroup268;
    }

    public String getNumCrs269() {
        return numCrs269;
    }

    public void setNumCrs269(String numCrs269) {
        this.numCrs269 = numCrs269;
    }

    public String getTypeRefCrs270() {
        return typeRefCrs270;
    }

    public void setTypeRefCrs270(String typeRefCrs270) {
        this.typeRefCrs270 = typeRefCrs270;
    }

    public LocalDate getCrsInsertDate271() {
        return crsInsertDate271;
    }

    public void setCrsInsertDate271(LocalDate crsInsertDate271) {
        this.crsInsertDate271 = crsInsertDate271;
    }

    public LocalDate getDateCreaResv272() {
        return dateCreaResv272;
    }

    public void setDateCreaResv272(LocalDate dateCreaResv272) {
        this.dateCreaResv272 = dateCreaResv272;
    }

    public LocalDate getDatePremier273() {
        return datePremier273;
    }

    public void setDatePremier273(LocalDate datePremier273) {
        this.datePremier273 = datePremier273;
    }

    public String getStatutPremier274() {
        return statutPremier274;
    }

    public void setStatutPremier274(String statutPremier274) {
        this.statutPremier274 = statutPremier274;
    }

    public LocalDate getDateDernier275() {
        return dateDernier275;
    }

    public void setDateDernier275(LocalDate dateDernier275) {
        this.dateDernier275 = dateDernier275;
    }

    public String getStatutDernier276() {
        return statutDernier276;
    }

    public void setStatutDernier276(String statutDernier276) {
        this.statutDernier276 = statutDernier276;
    }

    public LocalDate getDateDernierPseudo277() {
        return dateDernierPseudo277;
    }

    public void setDateDernierPseudo277(LocalDate dateDernierPseudo277) {
        this.dateDernierPseudo277 = dateDernierPseudo277;
    }

    public String getStatutDernierPseudo278() {
        return statutDernierPseudo278;
    }

    public void setStatutDernierPseudo278(String statutDernierPseudo278) {
        this.statutDernierPseudo278 = statutDernierPseudo278;
    }

    public Integer getDiffDtCreaAnn279() {
        return diffDtCreaAnn279;
    }

    public void setDiffDtCreaAnn279(Integer diffDtCreaAnn279) {
        this.diffDtCreaAnn279 = diffDtCreaAnn279;
    }

    public Integer getDiffDtArrAnn280() {
        return diffDtArrAnn280;
    }

    public void setDiffDtArrAnn280(Integer diffDtArrAnn280) {
        this.diffDtArrAnn280 = diffDtArrAnn280;
    }

    public Integer getLeadtime281() {
        return leadtime281;
    }

    public void setLeadtime281(Integer leadtime281) {
        this.leadtime281 = leadtime281;
    }

    public Integer getLos282() {
        return los282;
    }

    public void setLos282(Integer los282) {
        this.los282 = los282;
    }

    public String getOccupantsGroupe283() {
        return occupantsGroupe283;
    }

    public void setOccupantsGroupe283(String occupantsGroupe283) {
        this.occupantsGroupe283 = occupantsGroupe283;
    }

    public Integer getNbNuitee284() {
        return nbNuitee284;
    }

    public void setNbNuitee284(Integer nbNuitee284) {
        this.nbNuitee284 = nbNuitee284;
    }

    public Integer getNbNuiteeNnDed285() {
        return nbNuiteeNnDed285;
    }

    public void setNbNuiteeNnDed285(Integer nbNuiteeNnDed285) {
        this.nbNuiteeNnDed285 = nbNuiteeNnDed285;
    }

    public Integer getNbResvAnn286() {
        return nbResvAnn286;
    }

    public void setNbResvAnn286(Integer nbResvAnn286) {
        this.nbResvAnn286 = nbResvAnn286;
    }

    public Integer getNbAdu287() {
        return nbAdu287;
    }

    public void setNbAdu287(Integer nbAdu287) {
        this.nbAdu287 = nbAdu287;
    }

    public Integer getNbEnf288() {
        return nbEnf288;
    }

    public void setNbEnf288(Integer nbEnf288) {
        this.nbEnf288 = nbEnf288;
    }

    public Integer getNbPersDayU289() {
        return nbPersDayU289;
    }

    public void setNbPersDayU289(Integer nbPersDayU289) {
        this.nbPersDayU289 = nbPersDayU289;
    }

    public Integer getNbPersArr290() {
        return nbPersArr290;
    }

    public void setNbPersArr290(Integer nbPersArr290) {
        this.nbPersArr290 = nbPersArr290;
    }

    public Integer getNbPersDep291() {
        return nbPersDep291;
    }

    public void setNbPersDep291(Integer nbPersDep291) {
        this.nbPersDep291 = nbPersDep291;
    }

    public Integer getNbPersAnn292() {
        return nbPersAnn292;
    }

    public void setNbPersAnn292(Integer nbPersAnn292) {
        this.nbPersAnn292 = nbPersAnn292;
    }

    public Integer getNbPersNoshow293() {
        return nbPersNoshow293;
    }

    public void setNbPersNoshow293(Integer nbPersNoshow293) {
        this.nbPersNoshow293 = nbPersNoshow293;
    }

    public Integer getNbChbDayU294() {
        return nbChbDayU294;
    }

    public void setNbChbDayU294(Integer nbChbDayU294) {
        this.nbChbDayU294 = nbChbDayU294;
    }

    public Integer getNbChbArr295() {
        return nbChbArr295;
    }

    public void setNbChbArr295(Integer nbChbArr295) {
        this.nbChbArr295 = nbChbArr295;
    }

    public Integer getNbChbDep296() {
        return nbChbDep296;
    }

    public void setNbChbDep296(Integer nbChbDep296) {
        this.nbChbDep296 = nbChbDep296;
    }

    public Integer getNbChbAnn297() {
        return nbChbAnn297;
    }

    public void setNbChbAnn297(Integer nbChbAnn297) {
        this.nbChbAnn297 = nbChbAnn297;
    }

    public Integer getNbChbNoshow298() {
        return nbChbNoshow298;
    }

    public void setNbChbNoshow298(Integer nbChbNoshow298) {
        this.nbChbNoshow298 = nbChbNoshow298;
    }

    public Long getRevenuNetChambre299() {
        return revenuNetChambre299;
    }

    public void setRevenuNetChambre299(Long revenuNetChambre299) {
        this.revenuNetChambre299 = revenuNetChambre299;
    }

    public Long getRevenuTaxeChambre300() {
        return revenuTaxeChambre300;
    }

    public void setRevenuTaxeChambre300(Long revenuTaxeChambre300) {
        this.revenuTaxeChambre300 = revenuTaxeChambre300;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof DmOResvDTO)) {
            return false;
        }

        DmOResvDTO dmOResvDTO = (DmOResvDTO) o;
        if (this.id == null) {
            return false;
        }
        return Objects.equals(this.id, dmOResvDTO.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.id);
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "DmOResvDTO{" +
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
