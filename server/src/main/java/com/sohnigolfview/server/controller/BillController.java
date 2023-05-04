package com.sohnigolfview.server.controller;

import com.sohnigolfview.server.base.response.Response;
import com.sohnigolfview.server.persistence.model.Apartment;
import com.sohnigolfview.server.persistence.model.Bill;
import com.sohnigolfview.server.service.ApartmentService;
import com.sohnigolfview.server.service.BillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Calendar;
import java.util.Date;

@RestController
@CrossOrigin
public class BillController extends BaseController{

    @Autowired
    private BillService billService;




    @PostMapping(value = "/getBills")
    public Response getBill() throws Exception {
//        return billService.getAllBill();
        return billService.getAllBill();
    }

    @PostMapping(value = "/getBillById")
    public Response getBillById(@RequestBody Bill bill) throws Exception {
        return billService.getBillById(bill);
    }

    @PostMapping(value = "/getBillsByStatus")
    public Response getBillByStatus(@RequestBody Bill bill) throws Exception {
        return billService.getBillByStatus(bill);
    }

    @PostMapping(value = "/createBill")
    public Response createBill(@RequestBody Bill bill) throws Exception{

        /* Making due date 5 day ahead of today's */
        Calendar calendar = Calendar.getInstance();
        calendar.add(Calendar.DAY_OF_YEAR,35);
        bill.setDue_date(calendar.getTime());
        /* Making due date 5 day ahead of today's */

        return billService.createBill(bill);
    }

    @PostMapping(value = "/updateBill")
    public Response updateBill(@RequestBody Bill bill) throws Exception{
        return billService.updateBill(bill);
    }

    @PostMapping(value = "/changeBillStatus")
    public Response changeBillStatus(@RequestBody Bill bill) throws Exception{
        return billService.changeBillStatus(bill);
    }
}
