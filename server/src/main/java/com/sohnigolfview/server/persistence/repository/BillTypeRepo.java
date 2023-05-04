package com.sohnigolfview.server.persistence.repository;

import com.sohnigolfview.server.persistence.model.BillType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface BillTypeRepo extends JpaRepository<BillType,Integer> {
//    @Query(value = "select id,type from bill_types",nativeQuery = true)
//    List<BillType> getAllBillTypes();
}
