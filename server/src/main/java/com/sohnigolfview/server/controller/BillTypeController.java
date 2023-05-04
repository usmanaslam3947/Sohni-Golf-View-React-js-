package com.sohnigolfview.server.controller;

import com.sohnigolfview.server.base.response.Response;
import com.sohnigolfview.server.service.BillTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class BillTypeController extends BaseController{

    @Autowired
    private BillTypeService billTypeService;

    @PostMapping(value = "/getAllBillTypes")
    public Response getAllBillTypes() throws Exception{
        return billTypeService.getAllBillTypes();
    }
}
