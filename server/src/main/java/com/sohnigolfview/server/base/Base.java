package com.sohnigolfview.server.base;

public class Base {
    protected String hashPassword(String plainPass){
        String hashedPassword = plainPass+" Hashing Password";
        return hashedPassword;
    }
}
