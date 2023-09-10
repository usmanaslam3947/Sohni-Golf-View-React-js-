package com.sohnigolfview.server.controller;

import com.sohnigolfview.server.base.response.Response;
import com.sohnigolfview.server.persistence.model.Apartment;
import com.sohnigolfview.server.service.ApartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ApartmentController extends BaseController {

    @Autowired
    private ApartmentService apartmentService;

    @PostMapping(value = "/getApartments")
    public Response getApartment() throws Exception {
        return apartmentService.getAllApartment();
    }

    @PostMapping(value = "/getApartmentsById")
    public Response getApartmentById(@RequestBody Apartment apartment) throws Exception {
        return apartmentService.getApartmentById(apartment);
    }

    @PostMapping(value = "/getApartmentsByStatus")
    public Response getApartmentByStatus(@RequestBody Apartment apartment) throws Exception {
        return apartmentService.getApartmentByStatus(apartment);
    }

    @PostMapping(value = "/createApartment")
    public Response createApartment(@RequestBody Apartment apartment) throws Exception{
        apartment.setPassword(hashPassword(apartment.getPassword()));

        return apartmentService.createApartment(apartment);
    }

    @PostMapping(value = "/updateApartment")
    public Response updateApartment(@RequestBody Apartment apartment) throws Exception{
        apartment.setPassword(hashPassword(apartment.getPassword()));
        return apartmentService.updateApartment(apartment);
    }

    @PostMapping(value = "/changeApartmentStatus")
    public Response changeApartmentStatus(@RequestBody Apartment apartment) throws Exception{
        return apartmentService.changeApartmentStatus(apartment);
    }


}
