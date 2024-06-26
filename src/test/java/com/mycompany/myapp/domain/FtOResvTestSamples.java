package com.mycompany.myapp.domain;

import java.util.Random;
import java.util.UUID;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.concurrent.atomic.AtomicLong;

public class FtOResvTestSamples {

    private static final Random random = new Random();
    private static final AtomicLong longCount = new AtomicLong(random.nextInt() + (2 * Integer.MAX_VALUE));
    private static final AtomicInteger intCount = new AtomicInteger(random.nextInt() + (2 * Short.MAX_VALUE));

    public static FtOResv getFtOResvSample1() {
        return new FtOResv()
            .id(1L)
            .numLigne(1)
            .resort("resort1")
            .resvNameId(1)
            .clientOId("clientOId1")
            .typeChb("typeChb1")
            .numOrdre(1)
            .confirmationNo("confirmationNo1")
            .clientMdmId("clientMdmId1")
            .nameId(1)
            .nameIdLigne(1)
            .contactId(1)
            .agenceId(1)
            .agenceNom("agenceNom1")
            .societeId(1)
            .groupeId(1)
            .membreId(1)
            .sourceProfileId(1)
            .numBloc(1)
            .statutResv("statutResv1")
            .statutVip("statutVip1")
            .pseudoRoomYn("pseudoRoomYn1")
            .complementaireYn("complementaireYn1")
            .interneYn("interneYn1")
            .walkinYn("walkinYn1")
            .createurResv(1)
            .nomCreateurResv("nomCreateurResv1")
            .codePays("codePays1")
            .libPays("libPays1")
            .codeNationalite("codeNationalite1")
            .libNationalite("libNationalite1")
            .codeSource("codeSource1")
            .libSource("libSource1")
            .codeGrandSource("codeGrandSource1")
            .codeOrigine("codeOrigine1")
            .libOrigine("libOrigine1")
            .codeMarche("codeMarche1")
            .libMarche("libMarche1")
            .codeGrandMarche("codeGrandMarche1")
            .libGrandMarche("libGrandMarche1")
            .codePrix("codePrix1")
            .categPrix("categPrix1")
            .libPrix("libPrix1")
            .numChb("numChb1")
            .typeChbLigne("typeChbLigne1")
            .descriptionTypeChb("descriptionTypeChb1")
            .codeTypeChb("codeTypeChb1")
            .classChb("classChb1")
            .statutChbResv("statutChbResv1")
            .typeChbDeReservation("typeChbDeReservation1")
            .descriptionTypeChbDeResv("descriptionTypeChbDeResv1")
            .codeTypeChbDeResv("codeTypeChbDeResv1")
            .circuitDistribution("circuitDistribution1")
            .circuitDistribUserRegroup("circuitDistribUserRegroup1")
            .nbResvAnn(1)
            .nbNuitee(1)
            .nbNuiteeNnDed(1)
            .nbNuiteeGlobal(1)
            .nbOccupationMultiple(1)
            .nbAduGlobal(1)
            .nbEnfGlobal(1)
            .nbPersDayUGlobal(1)
            .nbPersArrGlobal(1)
            .nbPersDepGlobal(1)
            .nbPersAnn(1)
            .nbPersNoshow(1)
            .nbChbDayUGlobal(1)
            .nbChbArrGlobal(1)
            .nbChbDepGlobal(1)
            .nbChbAnn(1)
            .nbChbNoshow(1)
            .revenuNetChambreGlobal(1L)
            .revenuTaxeChambreGlobal(1L)
            .revenuNetBqGlobal(1L)
            .revenuTaxeBqGlobal(1L)
            .revenuNetExtraGlobal(1L)
            .revenuTaxeExtraGlobal(1L)
            .revenuNetTotalGlobal(1L)
            .revenuTaxeTotalGlobal(1L)
            .prodRevenuChambre(1L)
            .prodRevenuBq(1L)
            .prodRevenuExtra(1L)
            .prodRevenuTotal(1L)
            .prodChambreNbNuitees(1L)
            .datesSejourRensYn("datesSejourRensYn1")
            .techEventType("techEventType1")
            .techResvInvType("techResvInvType1")
            .techOrigine("techOrigine1")
            .techGrpNumOrdre(1)
            .resvNameIdPrincipal(1);
    }

    public static FtOResv getFtOResvSample2() {
        return new FtOResv()
            .id(2L)
            .numLigne(2)
            .resort("resort2")
            .resvNameId(2)
            .clientOId("clientOId2")
            .typeChb("typeChb2")
            .numOrdre(2)
            .confirmationNo("confirmationNo2")
            .clientMdmId("clientMdmId2")
            .nameId(2)
            .nameIdLigne(2)
            .contactId(2)
            .agenceId(2)
            .agenceNom("agenceNom2")
            .societeId(2)
            .groupeId(2)
            .membreId(2)
            .sourceProfileId(2)
            .numBloc(2)
            .statutResv("statutResv2")
            .statutVip("statutVip2")
            .pseudoRoomYn("pseudoRoomYn2")
            .complementaireYn("complementaireYn2")
            .interneYn("interneYn2")
            .walkinYn("walkinYn2")
            .createurResv(2)
            .nomCreateurResv("nomCreateurResv2")
            .codePays("codePays2")
            .libPays("libPays2")
            .codeNationalite("codeNationalite2")
            .libNationalite("libNationalite2")
            .codeSource("codeSource2")
            .libSource("libSource2")
            .codeGrandSource("codeGrandSource2")
            .codeOrigine("codeOrigine2")
            .libOrigine("libOrigine2")
            .codeMarche("codeMarche2")
            .libMarche("libMarche2")
            .codeGrandMarche("codeGrandMarche2")
            .libGrandMarche("libGrandMarche2")
            .codePrix("codePrix2")
            .categPrix("categPrix2")
            .libPrix("libPrix2")
            .numChb("numChb2")
            .typeChbLigne("typeChbLigne2")
            .descriptionTypeChb("descriptionTypeChb2")
            .codeTypeChb("codeTypeChb2")
            .classChb("classChb2")
            .statutChbResv("statutChbResv2")
            .typeChbDeReservation("typeChbDeReservation2")
            .descriptionTypeChbDeResv("descriptionTypeChbDeResv2")
            .codeTypeChbDeResv("codeTypeChbDeResv2")
            .circuitDistribution("circuitDistribution2")
            .circuitDistribUserRegroup("circuitDistribUserRegroup2")
            .nbResvAnn(2)
            .nbNuitee(2)
            .nbNuiteeNnDed(2)
            .nbNuiteeGlobal(2)
            .nbOccupationMultiple(2)
            .nbAduGlobal(2)
            .nbEnfGlobal(2)
            .nbPersDayUGlobal(2)
            .nbPersArrGlobal(2)
            .nbPersDepGlobal(2)
            .nbPersAnn(2)
            .nbPersNoshow(2)
            .nbChbDayUGlobal(2)
            .nbChbArrGlobal(2)
            .nbChbDepGlobal(2)
            .nbChbAnn(2)
            .nbChbNoshow(2)
            .revenuNetChambreGlobal(2L)
            .revenuTaxeChambreGlobal(2L)
            .revenuNetBqGlobal(2L)
            .revenuTaxeBqGlobal(2L)
            .revenuNetExtraGlobal(2L)
            .revenuTaxeExtraGlobal(2L)
            .revenuNetTotalGlobal(2L)
            .revenuTaxeTotalGlobal(2L)
            .prodRevenuChambre(2L)
            .prodRevenuBq(2L)
            .prodRevenuExtra(2L)
            .prodRevenuTotal(2L)
            .prodChambreNbNuitees(2L)
            .datesSejourRensYn("datesSejourRensYn2")
            .techEventType("techEventType2")
            .techResvInvType("techResvInvType2")
            .techOrigine("techOrigine2")
            .techGrpNumOrdre(2)
            .resvNameIdPrincipal(2);
    }

    public static FtOResv getFtOResvRandomSampleGenerator() {
        return new FtOResv()
            .id(longCount.incrementAndGet())
            .numLigne(intCount.incrementAndGet())
            .resort(UUID.randomUUID().toString())
            .resvNameId(intCount.incrementAndGet())
            .clientOId(UUID.randomUUID().toString())
            .typeChb(UUID.randomUUID().toString())
            .numOrdre(intCount.incrementAndGet())
            .confirmationNo(UUID.randomUUID().toString())
            .clientMdmId(UUID.randomUUID().toString())
            .nameId(intCount.incrementAndGet())
            .nameIdLigne(intCount.incrementAndGet())
            .contactId(intCount.incrementAndGet())
            .agenceId(intCount.incrementAndGet())
            .agenceNom(UUID.randomUUID().toString())
            .societeId(intCount.incrementAndGet())
            .groupeId(intCount.incrementAndGet())
            .membreId(intCount.incrementAndGet())
            .sourceProfileId(intCount.incrementAndGet())
            .numBloc(intCount.incrementAndGet())
            .statutResv(UUID.randomUUID().toString())
            .statutVip(UUID.randomUUID().toString())
            .pseudoRoomYn(UUID.randomUUID().toString())
            .complementaireYn(UUID.randomUUID().toString())
            .interneYn(UUID.randomUUID().toString())
            .walkinYn(UUID.randomUUID().toString())
            .createurResv(intCount.incrementAndGet())
            .nomCreateurResv(UUID.randomUUID().toString())
            .codePays(UUID.randomUUID().toString())
            .libPays(UUID.randomUUID().toString())
            .codeNationalite(UUID.randomUUID().toString())
            .libNationalite(UUID.randomUUID().toString())
            .codeSource(UUID.randomUUID().toString())
            .libSource(UUID.randomUUID().toString())
            .codeGrandSource(UUID.randomUUID().toString())
            .codeOrigine(UUID.randomUUID().toString())
            .libOrigine(UUID.randomUUID().toString())
            .codeMarche(UUID.randomUUID().toString())
            .libMarche(UUID.randomUUID().toString())
            .codeGrandMarche(UUID.randomUUID().toString())
            .libGrandMarche(UUID.randomUUID().toString())
            .codePrix(UUID.randomUUID().toString())
            .categPrix(UUID.randomUUID().toString())
            .libPrix(UUID.randomUUID().toString())
            .numChb(UUID.randomUUID().toString())
            .typeChbLigne(UUID.randomUUID().toString())
            .descriptionTypeChb(UUID.randomUUID().toString())
            .codeTypeChb(UUID.randomUUID().toString())
            .classChb(UUID.randomUUID().toString())
            .statutChbResv(UUID.randomUUID().toString())
            .typeChbDeReservation(UUID.randomUUID().toString())
            .descriptionTypeChbDeResv(UUID.randomUUID().toString())
            .codeTypeChbDeResv(UUID.randomUUID().toString())
            .circuitDistribution(UUID.randomUUID().toString())
            .circuitDistribUserRegroup(UUID.randomUUID().toString())
            .nbResvAnn(intCount.incrementAndGet())
            .nbNuitee(intCount.incrementAndGet())
            .nbNuiteeNnDed(intCount.incrementAndGet())
            .nbNuiteeGlobal(intCount.incrementAndGet())
            .nbOccupationMultiple(intCount.incrementAndGet())
            .nbAduGlobal(intCount.incrementAndGet())
            .nbEnfGlobal(intCount.incrementAndGet())
            .nbPersDayUGlobal(intCount.incrementAndGet())
            .nbPersArrGlobal(intCount.incrementAndGet())
            .nbPersDepGlobal(intCount.incrementAndGet())
            .nbPersAnn(intCount.incrementAndGet())
            .nbPersNoshow(intCount.incrementAndGet())
            .nbChbDayUGlobal(intCount.incrementAndGet())
            .nbChbArrGlobal(intCount.incrementAndGet())
            .nbChbDepGlobal(intCount.incrementAndGet())
            .nbChbAnn(intCount.incrementAndGet())
            .nbChbNoshow(intCount.incrementAndGet())
            .revenuNetChambreGlobal(longCount.incrementAndGet())
            .revenuTaxeChambreGlobal(longCount.incrementAndGet())
            .revenuNetBqGlobal(longCount.incrementAndGet())
            .revenuTaxeBqGlobal(longCount.incrementAndGet())
            .revenuNetExtraGlobal(longCount.incrementAndGet())
            .revenuTaxeExtraGlobal(longCount.incrementAndGet())
            .revenuNetTotalGlobal(longCount.incrementAndGet())
            .revenuTaxeTotalGlobal(longCount.incrementAndGet())
            .prodRevenuChambre(longCount.incrementAndGet())
            .prodRevenuBq(longCount.incrementAndGet())
            .prodRevenuExtra(longCount.incrementAndGet())
            .prodRevenuTotal(longCount.incrementAndGet())
            .prodChambreNbNuitees(longCount.incrementAndGet())
            .datesSejourRensYn(UUID.randomUUID().toString())
            .techEventType(UUID.randomUUID().toString())
            .techResvInvType(UUID.randomUUID().toString())
            .techOrigine(UUID.randomUUID().toString())
            .techGrpNumOrdre(intCount.incrementAndGet())
            .resvNameIdPrincipal(intCount.incrementAndGet());
    }
}
