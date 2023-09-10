package com.sohnigolfview.server.service.implementation;

import com.sohnigolfview.server.base.response.Response;
import com.sohnigolfview.server.persistence.model.ApartmentSheet;
import com.sohnigolfview.server.persistence.repository.ApartmentSheetRepo;
import com.sohnigolfview.server.service.ApartmentSheetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ApartmentSheetServiceImplementation extends BaseServiceImplementation implements ApartmentSheetService {

    @Autowired
    ApartmentSheetRepo apartmentSheetRepo;

    @Override
    public Response getApartmentSheet(Integer apartId) throws Exception{
        try{
            List<ApartmentSheet> apartmentSheets = apartmentSheetRepo.getApartmentSheet(apartId);
            if (apartmentSheets.size() > 0){
                response.setData(apartmentSheets);
                setSuccessMsg("Apartment sheets retrieved successfully");
            }else{
                setErrorMsg("Unable to retrieve apartment sheet");
            }
        }catch (Exception e){
            setException(e);
        }
        return response;
    }

    @Override
    public Response createApartmentSheet(List<ApartmentSheet> apartmentSheets) throws Exception{
        try{
            Boolean failure = false;
            for (ApartmentSheet apartmentSheet: apartmentSheets) {
                try {
                    apartmentSheet.setSave(1);
                    apartmentSheetRepo.save(apartmentSheet);
                }catch (Exception e){
                    System.out.println("Exception : " + e);
                    failure = true;
                }
            }
            if (!failure){
                setSuccessMsg("Sheet successfully saved");
            }else{
                setErrorMsg("Error saving sheets");
            }
        }catch (Exception e){
            setException(e);
        }
        return response;
    }
}
