package com.sohnigolfview.server.service;

import com.sohnigolfview.server.base.response.Response;
import com.sohnigolfview.server.persistence.model.ApartmentSheet;

import java.util.List;

public interface ApartmentSheetService {

    Response getApartmentSheet(Integer apartId) throws Exception;

    Response createApartmentSheet(List<ApartmentSheet> apartmentSheets) throws Exception;
}
