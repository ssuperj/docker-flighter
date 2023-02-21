package com.green.flighter.test;

public enum RoleType {
    USER("user"),
    MANAGER("manager");

    private String value;

    private RoleType(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}
