package com.sohnigolfview.server.controller;

import com.sohnigolfview.server.base.response.Response;
import com.sohnigolfview.server.config.Config;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;


public class BaseController {
    protected String hashPassword(String plainPass){
//        String salt = "abcd1234";
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
//        String hashedPassword = encoder.encode(plainPass+salt);
        String hashedPassword = encoder.encode(plainPass);
        System.out.println(hashedPassword);
        return hashedPassword;
    }



    Response response = new Response();



    public void setException(Exception exception){
        response.setData(null);
        System.out.println("Exception : "+exception);
        response.getMessage().setCode(Config.errCode);
        response.getMessage().setMessage(Config.errMsg);
        response.getMessage().setDescription(Config.errMsg);
    }

    public void setSuccessMsg(){
        response.getMessage().setCode(Config.successCode);
        response.getMessage().setMessage(Config.successMsg);
        response.getMessage().setDescription(Config.successMsg);
    }

    public void setErrorMsg(){
        response.setData(null);
        response.getMessage().setCode(Config.notFoundCode);
        response.getMessage().setMessage(Config.notFoundMsg);
        response.getMessage().setDescription(Config.notFoundMsg);
    }
}
