package com.sohnigolfview.server.persistence.repository;

import com.sohnigolfview.server.persistence.model.ApartmentSheet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ApartmentSheetRepo extends JpaRepository<ApartmentSheet,Integer> {
    @Query(value = "SELECT id,apart_id,date,description,reference_number,withdrawal,deposit,type,total,input_field,save from apartment_sheet where apart_id=:apartId",nativeQuery = true)
    List<ApartmentSheet> getApartmentSheet(@Param("apartId") Integer apartId);

//    @Query(value = "")
}
