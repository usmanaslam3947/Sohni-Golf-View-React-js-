package com.sohnigolfview.server.service.implementation;

import com.sohnigolfview.server.base.response.Response;
import com.sohnigolfview.server.persistence.model.Apartment;
import com.sohnigolfview.server.persistence.repository.ApartmentRepo;
import com.sohnigolfview.server.service.ApartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class ApartmentServiceImplementation extends BaseServiceImplementation implements ApartmentService {

    @Autowired
    ApartmentRepo apartmentRepo;
//
//    @Autowired
//    EntityManager entityManager;
//
//    Response response = new Response();



    @Override
    public Response getAllApartment() {
        try {
            List<Apartment> apartments =  apartmentRepo.findAll();
            if (apartments.size() > 0) {
                response.setData(apartments);
                setSuccessMsg();
            } else {
                setErrorMsg();
            }
        }catch (Exception exception){
            setException(exception);
        }
//
        return response;
    }

    @Override
    public Response getApartmentById(Apartment model) throws Exception {
        Apartment apartment = apartmentRepo.getApartmentById(model.getId());
        try{
            if (apartment != null){
                response.setData(apartment);
                setSuccessMsg();
            }else{
                setErrorMsg();
            }
        }catch (Exception exception){
            setException(exception);
        }
        return response;
    }

    @Override
    public Response getApartmentByStatus(Apartment model) throws Exception {

        try{
            List<Apartment> apartmentsByStatus = apartmentRepo.getApartmentsByStatus(model.getStatus());
            if (apartmentsByStatus != null){
                response.setData(apartmentsByStatus);
                setSuccessMsg();
            }else{
                setErrorMsg();
            }
        }catch (Exception exception){
            setException(exception);
        }
        return response;
    }
//
    @Override
    public Response createApartment(Apartment apartment) throws Exception {
        try {
            Apartment newApartment = apartmentRepo.save(apartment);
            if (newApartment != null) {
                response.setData(apartmentRepo.findAll());
                setSuccessMsg();
            } else {
                setErrorMsg();
            }
        }catch (Exception exception){
            setException(exception);
        }
        return response;
    }

    @Transactional
    @Override
    public Response updateApartment(Apartment apartment) throws Exception {
        try {
//            Apartment updatedApartment = apartmentRepo.updateApartment(apartment.getApartment_name(), apartment.getContact(), apartment.getStatus(), apartment.getPerson_name(), apartment.getPassword(), apartment.getId());
            Apartment updatedApartment = entityManager.merge(apartment);
            if (updatedApartment != null){
//                response.setData(updatedApartment);
                response.setData(apartmentRepo.findAll());
                setSuccessMsg();
            }else{
                setErrorMsg();
            }
        }catch (Exception exception){
            setException(exception);
        }
        return response;
    }

    @Override
    public Response changeApartmentStatus(Apartment apartment) {
        try {
            int changedApartment = apartmentRepo.changeApartmentStatus(apartment.getStatus(), apartment.getId());
            if (changedApartment > 0){
                response.setData(apartmentRepo.findAll());
                setSuccessMsg();
            }else{
                setErrorMsg();
            }
        }catch (Exception exception){
            setException(exception);
        }
        return response;
    }
}
