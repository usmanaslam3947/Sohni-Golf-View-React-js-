package com.sohnigolfview.server.service.implementation;

import com.sohnigolfview.server.base.response.Response;
import com.sohnigolfview.server.persistence.model.Bill;
import com.sohnigolfview.server.persistence.repository.BillRepo;
import com.sohnigolfview.server.service.BillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class BillServiceImplementation extends BaseServiceImplementation implements BillService {
    @Autowired
    BillRepo billRepo;

    @Override
    public Response getAllBill() throws Exception {
        try{
            List<Bill> bills = billRepo.getAllBills();
//            List<Bill> bills = billRepo.findAll();

            if (bills.size() > 0){
                response.setData(bills);
                setSuccessMsg("Bills retrieved successfully");
            }else{
                setErrorMsg();
            }
        }catch (Exception exception){
            setException(exception);
        }
        return response;
    }

    @Override
    public Response getBillById(Bill model) throws Exception {
        try{
            Bill bill = billRepo.getBillById(model.getId());
            if (bill != null){
                response.setData(bill);
                setSuccessMsg("Bills successfully retrieved by id.");
            }else{
                setErrorMsg();
            }
        }catch (Exception exception){
            setException(exception);
        }
        return response;
    }

    @Override
    public Response getBillByStatus(Bill model) throws Exception {
        try{
            List<Bill> bills = billRepo.getBillsByStatus(model.getStatus());
            if (bills.size() > 0){
                response.setData(bills);
                setSuccessMsg("Bills successfully retrieved by status.");
            }else{
                setErrorMsg();
            }
        }catch (Exception exception){
            setException(exception);
        }
        return response;
    }

    @Override
    public Response createBill(Bill model) throws Exception {
        try{
            Bill bill = billRepo.save(model);
            if (bill != null){
                response.setData(billRepo.getAllBills());
                setSuccessMsg("Bill created successfully.");
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
    public Response updateBill(Bill model) throws Exception {

        try{
            int billStatus = billRepo.updateBill(model.getType(),model.getAmount(),model.getCreated_date(),model.getDue_date(), model.getId());
//            Bill bill = entityManager.merge(model);
            if (billStatus > 0 ){
                response.setData(billRepo.getBillById(model.getId()));
                setSuccessMsg("Bill updated successfully.");
            }else{
                setErrorMsg();
            }
        }catch (Exception exception){
            setException(exception);
        }
        return response;
    }

    @Override
    public Response changeBillStatus(Bill model) throws Exception {
        try{
            int billStatus = billRepo.changeBillStatus(model.getStatus(), model.getId());
            if (billStatus > 0){
//                response.setData(billRepo.getBillById(model.getId()));
                response.setData(billRepo.getAllBills());

                setSuccessMsg("Bill status changed successfully.");
            }else{
                setErrorMsg();
            }
        }catch (Exception exception){
            setException(exception);
        }
        return response;
    }
}
