package com.sohnigolfview.server.service.implementation;

import com.sohnigolfview.server.base.response.Response;
import com.sohnigolfview.server.persistence.model.BillType;
import com.sohnigolfview.server.persistence.repository.BillTypeRepo;
import com.sohnigolfview.server.service.BillTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BillTypeServiceImplementation extends BaseServiceImplementation implements BillTypeService {
    @Autowired
    BillTypeRepo billTypeRepo;

    @Override
    public Response getAllBillTypes() throws Exception {
        try{
//            List<BillType> billTypes = billTypeRepo.getAllBillTypes();
            List<BillType> billTypes = billTypeRepo.findAll();
            if (billTypes.size() > 0){
                response.setData(billTypes);
                setSuccessMsg("Bill types retrieved successfully.");
            }else{
                setErrorMsg("Unable to retrieve bill types.");
            }
        }catch (Exception e){
            setException(e);
        }
        return response;
    }
}
