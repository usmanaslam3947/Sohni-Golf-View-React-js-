package com.sohnigolfview.server.service.implementation;

import com.sohnigolfview.server.base.response.Response;
import com.sohnigolfview.server.persistence.model.Apartment;
import com.sohnigolfview.server.persistence.model.ApartmentBill;
import com.sohnigolfview.server.persistence.model.Bill;
import com.sohnigolfview.server.persistence.repository.ApartBillRepo;
import com.sohnigolfview.server.persistence.repository.ApartmentRepo;
import com.sohnigolfview.server.persistence.repository.BillRepo;
import com.sohnigolfview.server.service.ApartmentBillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.net.URLDecoder;
import java.util.Date;
import java.util.List;

@Service
public class ApartmentBillServiceImplementation extends BaseServiceImplementation implements ApartmentBillService {

    @Autowired
    ApartBillRepo apartBillRepo;

    @Autowired
    BillRepo billRepo;

    @Autowired
    ApartmentRepo apartmentRepo;


    @Override
    public Response getAllApartBill() throws Exception {
        try {
            List<ApartmentBill> apartmentBills =  apartBillRepo.getAllApartBill();
            if (apartmentBills.size() > 0) {
                response.setData(apartmentBills);
                setSuccessMsg();
            } else {
                setErrorMsg();
            }
        }catch (Exception exception){
            setException(exception);
        }
        return response;
    }

    @Override
    public Response getBillsByApartment(Apartment apartment) throws Exception {
        try{
            List<ApartmentBill> billsByApartment = apartBillRepo.getBillsByApartment(apartment.getId(), apartment.getStatus());
            if (billsByApartment.size() > 0){
                response.setData(billsByApartment);
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
    public Response createApartmentBills(ApartmentBill model) throws Exception {
        try{
//            int insertionStatus = apartBillRepo.createApartBill(apartmentBill.getApartmentId(), apartmentBill.getBillId(), apartmentBill.getStatus(), apartmentBill.getPaidAmount());
            ApartmentBill apartmentBill = apartBillRepo.save(model);
            if (apartmentBill != null){
                response.setData(apartmentBill);
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
    public Response processApartmentBills(String date) throws Exception {
        try{
            List<Bill> bills = billRepo.getBillsByCreatedDate(date);
            if (bills.size()>0){
                List<Apartment> apartments = apartmentRepo.findAll();
                for (Apartment apartment:apartments) {
                    for (Bill bill:bills) {
                        ApartmentBill apartmentBill = new ApartmentBill();
                        apartmentBill.setApartmentId(apartment.getId());
                        apartmentBill.setBillId(bill.getId());
                        apartmentBill.setStatus(0);
                        apartmentBill.setPaidAmount(0);
                        apartBillRepo.save(apartmentBill);
                    }
                }
                List<ApartmentBill> apartmentBills = apartBillRepo.findAll();
                if (apartmentBills.size()>0){
                    response.setData(apartmentBills);
                    setSuccessMsg();
                }else{
                    setErrorMsg();
                }
            }else{
                setErrorMsg();
            }
        }catch (Exception exception){
            setException(exception);
        }
        return response;
    }

    @Transactional
    @Override
    public Response payApartmentBills(ApartmentBill model) throws Exception {
        try{
//            int result = apartBillRepo.payApartmentBill(model.getStatus(), model.getPaidAmount(), model.getId());
            ApartmentBill apartmentBill = entityManager.merge(model);
            if(apartmentBill != null){
                response.setData(apartmentBill);
                setSuccessMsg();
            }else{
                setErrorMsg();
            }
        }catch (Exception e){
            setException(e);
        }
        return response;
    }


}
