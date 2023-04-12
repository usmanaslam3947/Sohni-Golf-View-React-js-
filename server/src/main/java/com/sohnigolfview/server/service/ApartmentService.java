package com.sohnigolfview.server.service;

import com.sohnigolfview.server.base.response.Response;
import com.sohnigolfview.server.persistence.model.Apartment;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface ApartmentService {
    Response getAllApartment() throws Exception;

    Response getApartmentById(Apartment model) throws Exception;

    Response getApartmentByStatus(Apartment model) throws Exception;

    Response createApartment(Apartment apartment) throws Exception;

    Response updateApartment(Apartment apartment) throws Exception;

    Response changeApartmentStatus(Apartment apartment);
}
