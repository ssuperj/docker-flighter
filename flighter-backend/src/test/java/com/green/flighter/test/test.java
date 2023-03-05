package com.green.flighter.test;

public class test {
    public static void main(String[] args) {
        RoleType userType = RoleType.USER;
        System.out.println(userType.ordinal()); // "user" 출력

        RoleType managerType = RoleType.MANAGER;
        System.out.println(managerType.ordinal()); // "manager" 출력
    }
}
