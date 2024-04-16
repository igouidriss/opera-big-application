package com.mycompany.myapp.domain;

import java.util.Random;
import java.util.UUID;
import java.util.concurrent.atomic.AtomicLong;

public class DmClientMdmAddrCntryTestSamples {

    private static final Random random = new Random();
    private static final AtomicLong longCount = new AtomicLong(random.nextInt() + (2 * Integer.MAX_VALUE));

    public static DmClientMdmAddrCntry getDmClientMdmAddrCntrySample1() {
        return new DmClientMdmAddrCntry()
            .id(1L)
            .prtyFk("prtyFk1")
            .frstCntryFrmt("frstCntryFrmt1")
            .frstContinent("frstContinent1")
            .scndCntryFrmt("scndCntryFrmt1")
            .scndContinent("scndContinent1")
            .thrdCntryFrmt("thrdCntryFrmt1")
            .thrdContinent("thrdContinent1")
            .frthCntryFrmt("frthCntryFrmt1")
            .frthContinent("frthContinent1")
            .techLineage("techLineage1")
            .techMapping("techMapping1")
            .techComment("techComment1");
    }

    public static DmClientMdmAddrCntry getDmClientMdmAddrCntrySample2() {
        return new DmClientMdmAddrCntry()
            .id(2L)
            .prtyFk("prtyFk2")
            .frstCntryFrmt("frstCntryFrmt2")
            .frstContinent("frstContinent2")
            .scndCntryFrmt("scndCntryFrmt2")
            .scndContinent("scndContinent2")
            .thrdCntryFrmt("thrdCntryFrmt2")
            .thrdContinent("thrdContinent2")
            .frthCntryFrmt("frthCntryFrmt2")
            .frthContinent("frthContinent2")
            .techLineage("techLineage2")
            .techMapping("techMapping2")
            .techComment("techComment2");
    }

    public static DmClientMdmAddrCntry getDmClientMdmAddrCntryRandomSampleGenerator() {
        return new DmClientMdmAddrCntry()
            .id(longCount.incrementAndGet())
            .prtyFk(UUID.randomUUID().toString())
            .frstCntryFrmt(UUID.randomUUID().toString())
            .frstContinent(UUID.randomUUID().toString())
            .scndCntryFrmt(UUID.randomUUID().toString())
            .scndContinent(UUID.randomUUID().toString())
            .thrdCntryFrmt(UUID.randomUUID().toString())
            .thrdContinent(UUID.randomUUID().toString())
            .frthCntryFrmt(UUID.randomUUID().toString())
            .frthContinent(UUID.randomUUID().toString())
            .techLineage(UUID.randomUUID().toString())
            .techMapping(UUID.randomUUID().toString())
            .techComment(UUID.randomUUID().toString());
    }
}
