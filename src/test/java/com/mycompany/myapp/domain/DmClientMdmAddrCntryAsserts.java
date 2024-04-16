package com.mycompany.myapp.domain;

import static org.assertj.core.api.Assertions.assertThat;

public class DmClientMdmAddrCntryAsserts {

    /**
     * Asserts that the entity has all properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertDmClientMdmAddrCntryAllPropertiesEquals(DmClientMdmAddrCntry expected, DmClientMdmAddrCntry actual) {
        assertDmClientMdmAddrCntryAutoGeneratedPropertiesEquals(expected, actual);
        assertDmClientMdmAddrCntryAllUpdatablePropertiesEquals(expected, actual);
    }

    /**
     * Asserts that the entity has all updatable properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertDmClientMdmAddrCntryAllUpdatablePropertiesEquals(DmClientMdmAddrCntry expected, DmClientMdmAddrCntry actual) {
        assertDmClientMdmAddrCntryUpdatableFieldsEquals(expected, actual);
        assertDmClientMdmAddrCntryUpdatableRelationshipsEquals(expected, actual);
    }

    /**
     * Asserts that the entity has all the auto generated properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertDmClientMdmAddrCntryAutoGeneratedPropertiesEquals(DmClientMdmAddrCntry expected, DmClientMdmAddrCntry actual) {
        assertThat(expected)
            .as("Verify DmClientMdmAddrCntry auto generated properties")
            .satisfies(e -> assertThat(e.getId()).as("check id").isEqualTo(actual.getId()));
    }

    /**
     * Asserts that the entity has all the updatable fields set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertDmClientMdmAddrCntryUpdatableFieldsEquals(DmClientMdmAddrCntry expected, DmClientMdmAddrCntry actual) {
        assertThat(expected)
            .as("Verify DmClientMdmAddrCntry relevant properties")
            .satisfies(e -> assertThat(e.getPrtyFk()).as("check prtyFk").isEqualTo(actual.getPrtyFk()))
            .satisfies(e -> assertThat(e.getFrstCntryFrmt()).as("check frstCntryFrmt").isEqualTo(actual.getFrstCntryFrmt()))
            .satisfies(e -> assertThat(e.getFrstContinent()).as("check frstContinent").isEqualTo(actual.getFrstContinent()))
            .satisfies(e -> assertThat(e.getScndCntryFrmt()).as("check scndCntryFrmt").isEqualTo(actual.getScndCntryFrmt()))
            .satisfies(e -> assertThat(e.getScndContinent()).as("check scndContinent").isEqualTo(actual.getScndContinent()))
            .satisfies(e -> assertThat(e.getThrdCntryFrmt()).as("check thrdCntryFrmt").isEqualTo(actual.getThrdCntryFrmt()))
            .satisfies(e -> assertThat(e.getThrdContinent()).as("check thrdContinent").isEqualTo(actual.getThrdContinent()))
            .satisfies(e -> assertThat(e.getFrthCntryFrmt()).as("check frthCntryFrmt").isEqualTo(actual.getFrthCntryFrmt()))
            .satisfies(e -> assertThat(e.getFrthContinent()).as("check frthContinent").isEqualTo(actual.getFrthContinent()))
            .satisfies(e -> assertThat(e.getTechLineage()).as("check techLineage").isEqualTo(actual.getTechLineage()))
            .satisfies(e -> assertThat(e.getTechCreatedDate()).as("check techCreatedDate").isEqualTo(actual.getTechCreatedDate()))
            .satisfies(e -> assertThat(e.getTechUpdatedDate()).as("check techUpdatedDate").isEqualTo(actual.getTechUpdatedDate()))
            .satisfies(e -> assertThat(e.getTechMapping()).as("check techMapping").isEqualTo(actual.getTechMapping()))
            .satisfies(e -> assertThat(e.getTechComment()).as("check techComment").isEqualTo(actual.getTechComment()));
    }

    /**
     * Asserts that the entity has all the updatable relationships set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertDmClientMdmAddrCntryUpdatableRelationshipsEquals(DmClientMdmAddrCntry expected, DmClientMdmAddrCntry actual) {}
}