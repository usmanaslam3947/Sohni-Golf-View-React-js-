package com.sohnigolfview.server.persistence.repository;

import com.sohnigolfview.server.persistence.model.Bill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.Date;
import java.util.List;

public interface BillRepo extends JpaRepository<Bill,Integer> {

    @Query(value = "SELECT * FROM bills b inner join bill_types bt on b.type = bt.id",nativeQuery = true)
    List<Bill> getAllBills();

    @Query(value = "SELECT * from bills b where status=:status",nativeQuery = true)
    List<Bill> getBillsByStatus(@Param("status") Integer status);


    @Query(value = "SELECT * FROM bills WHERE id=:billId",nativeQuery = true)
    Bill getBillById(@Param("billId") Integer billId);

//    @Query(value = "INSERT INTO apartments(apartment_name,contact,status,person_name,password) VALUES(:apart_name,:cont,:status,:person_name,:password)",nativeQuery = true)
//    List<Apartment> createApartment(@Param("apart_name") String name,@Param("cont") String contact,@Param("status") Integer status,@Param("person_name") String person_name,@Param("password") String password);

    @Transactional
    @Modifying
    @Query("UPDATE Bill SET type=:type,amount=:amount,created_date=:created_date,due_date=:due_date WHERE id=:billId")
    int updateBill(@Param("type") Integer type, @Param("amount") Long amount,@Param("created_date") Date createdDate, @Param("due_date") Date dueDate, @Param("billId") Integer billId);

    @Transactional
    @Modifying
    @Query("UPDATE Bill SET status=:status WHERE id=:billId")
    int changeBillStatus(@Param("status") Integer status,@Param("billId") Integer billId);

    @Query(value = "select * from bills where created_date=:createdDate",nativeQuery = true)
    List<Bill> getBillsByCreatedDate(@Param("createdDate") String createdDate);



}
