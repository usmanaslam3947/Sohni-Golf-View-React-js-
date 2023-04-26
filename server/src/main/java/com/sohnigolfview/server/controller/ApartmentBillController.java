package com.sohnigolfview.server.controller;

import com.sohnigolfview.server.base.response.Response;
import com.sohnigolfview.server.persistence.model.Apartment;
import com.sohnigolfview.server.persistence.model.ApartmentBill;
import com.sohnigolfview.server.persistence.model.Bill;
import com.sohnigolfview.server.service.ApartmentBillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
@CrossOrigin
public class ApartmentBillController {

    @Autowired
    ApartmentBillService apartmentBillService;

    @PostMapping(value = "/getAllApartBill")
    public Response getAllApartBill() throws Exception{
        return apartmentBillService.getAllApartBill();
    }

    @PostMapping(value = "/getBillsByApartment")
    public Response getBillsByApartment(@RequestBody Apartment apartment) throws Exception{
        return apartmentBillService.getBillsByApartment(apartment);
    }

    @PostMapping(value = "/createApartBills")
    public Response createApartmentBills(@RequestBody ApartmentBill apartmentBill) throws Exception{
        return apartmentBillService.createApartmentBills(apartmentBill);
    }
    @PostMapping(value = "/processApartmentBills")
    public Response processApartmentBills(@RequestBody String bill) throws Exception{
        return apartmentBillService.processApartmentBills(bill);
    }

    @PostMapping(value = "/payApartmentBill")
    public Response payApartBill(@RequestBody ApartmentBill apartmentBill){
        return apartmentBillService.payApartmentBills(apartmentBill);
    }
}
