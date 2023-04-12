package com.sohnigolfview.server.service;

import com.sohnigolfview.server.base.response.Response;
import com.sohnigolfview.server.persistence.model.Apartment;
import com.sohnigolfview.server.persistence.model.Bill;

public interface BillService {
    Response getAllBill() throws Exception;

    Response getBillById(Bill model) throws Exception;

    Response getBillByStatus(Bill model) throws Exception;

    Response createBill(Bill model) throws Exception;

    Response updateBill(Bill model) throws Exception;

    Response changeBillStatus(Bill model) throws Exception;
}
