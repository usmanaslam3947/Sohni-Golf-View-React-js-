package com.sohnigolfview.server.service.implementation;

import com.sohnigolfview.server.base.response.Response;
import com.sohnigolfview.server.config.Config;
import com.sohnigolfview.server.persistence.repository.ApartmentRepo;
import com.sohnigolfview.server.service.BaseService;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;

public class BaseServiceImplementation implements BaseService {


    @Autowired
    EntityManager entityManager;

    Response response = new Response();



    public void setException(Exception exception){
        response.setData(null);
        System.out.println("Exception : "+exception);
        response.getMessage().setCode(Config.errCode);
        response.getMessage().setMessage(Config.errMsg);
        response.getMessage().setDescription(Config.errMsg);
    }

    public void setSuccessMsg(String desc){
        response.getMessage().setCode(Config.successCode);
        response.getMessage().setMessage(Config.successMsg);
        response.getMessage().setDescription(desc);
    }

    public void setErrorMsg(){
        response.setData(null);
        response.getMessage().setCode(Config.notFoundCode);
        response.getMessage().setMessage(Config.notFoundMsg);
        response.getMessage().setDescription(Config.notFoundMsg);
    }

}
