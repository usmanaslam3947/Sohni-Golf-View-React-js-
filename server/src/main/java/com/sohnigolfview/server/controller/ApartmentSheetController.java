package com.sohnigolfview.server.controller;

import com.sohnigolfview.server.base.response.Response;
import com.sohnigolfview.server.persistence.model.ApartmentSheet;
import com.sohnigolfview.server.service.ApartmentSheetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class ApartmentSheetController extends BaseController{

    @Autowired
    ApartmentSheetService apartmentSheetService;

    @PostMapping(value = "/getApartmentSheet")
    public Response getApartmentSheet(@RequestParam Integer apartId) throws Exception{
        return apartmentSheetService.getApartmentSheet(apartId);
    }


    @PostMapping(value = "/createApartmentSheet")
    public Response createApartmentSheet(@RequestBody List<ApartmentSheet> apartmentSheets) throws Exception{
        return apartmentSheetService.createApartmentSheet(apartmentSheets);
    }
}
