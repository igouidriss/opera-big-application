package com.mycompany.myapp.domain;

import java.util.Random;
import java.util.UUID;
import java.util.concurrent.atomic.AtomicLong;

public class DmClientMdmNtnltyCntryTestSamples {

    private static final Random random = new Random();
    private static final AtomicLong longCount = new AtomicLong(random.nextInt() + (2 * Integer.MAX_VALUE));

    public static DmClientMdmNtnltyCntry getDmClientMdmNtnltyCntrySample1() {
        return new DmClientMdmNtnltyCntry()
            .id(1L)
            .prtyFk("prtyFk1")
            .frstNtnltFrmt("frstNtnltFrmt1")
            .frstContinent("frstContinent1")
            .scndNtnltFrmt("scndNtnltFrmt1")
            .scndContinent("scndContinent1")
            .thrdNtnltFrmt("thrdNtnltFrmt1")
            .thrdContinent("thrdContinent1")
            .frthNtnltFrmt("frthNtnltFrmt1")
            .frthContinent("frthContinent1")
            .techLineage("techLineage1")
            .techMapping("techMapping1")
            .techComment("techComment1");
    }

    public static DmClientMdmNtnltyCntry getDmClientMdmNtnltyCntrySample2() {
        return new DmClientMdmNtnltyCntry()
            .id(2L)
            .prtyFk("prtyFk2")
            .frstNtnltFrmt("frstNtnltFrmt2")
            .frstContinent("frstContinent2")
            .scndNtnltFrmt("scndNtnltFrmt2")
            .scndContinent("scndContinent2")
            .thrdNtnltFrmt("thrdNtnltFrmt2")
            .thrdContinent("thrdContinent2")
            .frthNtnltFrmt("frthNtnltFrmt2")
            .frthContinent("frthContinent2")
            .techLineage("techLineage2")
            .techMapping("techMapping2")
            .techComment("techComment2");
    }

    public static DmClientMdmNtnltyCntry getDmClientMdmNtnltyCntryRandomSampleGenerator() {
        return new DmClientMdmNtnltyCntry()
            .id(longCount.incrementAndGet())
            .prtyFk(UUID.randomUUID().toString())
            .frstNtnltFrmt(UUID.randomUUID().toString())
            .frstContinent(UUID.randomUUID().toString())
            .scndNtnltFrmt(UUID.randomUUID().toString())
            .scndContinent(UUID.randomUUID().toString())
            .thrdNtnltFrmt(UUID.randomUUID().toString())
            .thrdContinent(UUID.randomUUID().toString())
            .frthNtnltFrmt(UUID.randomUUID().toString())
            .frthContinent(UUID.randomUUID().toString())
            .techLineage(UUID.randomUUID().toString())
            .techMapping(UUID.randomUUID().toString())
            .techComment(UUID.randomUUID().toString());
    }
}
