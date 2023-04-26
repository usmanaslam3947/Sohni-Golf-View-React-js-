package com.sohnigolfview.server.service;

import com.sohnigolfview.server.base.response.Response;
import com.sohnigolfview.server.persistence.model.Apartment;
import com.sohnigolfview.server.persistence.model.ApartmentBill;
import com.sohnigolfview.server.persistence.model.Bill;

import java.util.Date;

public interface ApartmentBillService {
    Response getAllApartBill() throws Exception;
    Response getBillsByApartment(Apartment apartment) throws Exception;

    Response createApartmentBills(ApartmentBill apartmentBill) throws Exception;
    Response processApartmentBills(String date) throws Exception;

    Response payApartmentBills(ApartmentBill model);
}
