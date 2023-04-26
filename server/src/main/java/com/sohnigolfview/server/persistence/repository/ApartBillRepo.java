package com.sohnigolfview.server.persistence.repository;

import com.sohnigolfview.server.persistence.model.ApartmentBill;
import com.sohnigolfview.server.persistence.model.Bill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.Date;
import java.util.List;

@Repository
public interface ApartBillRepo extends JpaRepository<ApartmentBill, Integer> {
    @Query(value = "select ab.id,ab.apartment_id,a.apartment_name,ab.bill_id,b.type,b.due_date,ab.status,b.created_date,b.amount,ab.paid_amount,ab.payee_cnic,ab.payee_name,ab.system_user,ab.cnic_image from apartment_bills ab inner join apartments a on ab.apartment_id = a.id inner join bills b on ab.bill_id = b.id",nativeQuery = true)
    List<ApartmentBill> getAllApartBill();

    @Query(value = "select ab.id,ab.apartment_id,a.apartment_name,ab.bill_id,b.type,b.due_date,ab.status,b.created_date,b.amount,ab.paid_amount from apartment_bills ab inner join apartments a on ab.apartment_id = a.id inner join bills b on ab.bill_id = b.id where ab.apartment_id =:apartId and ab.status=:status",nativeQuery = true)
    List<ApartmentBill> getBillsByApartment(@Param("apartId") Integer apartId,@Param("status") Integer status);


//    @Query(value = "update apartment_bills set status=:status,paid_amount=:paidAmount where id=:id",nativeQuery = true)
//    int payApartmentBill(@Param("status") Integer status,@Param("paidAmount") Integer paidAmount,@Param("id") Integer id);


    //    @Query(value = "SELECT * from bills where id=36",nativeQuery = true)
//    List<Bill> getBillsByCreatedDate();

    //    @Query(value = "insert into apartment_bills(apartment_id,bill_id,status,paid_amount) values(:apartId,:billId,:status,:paidAmount)",nativeQuery = true)
//    int createApartBill(@Param("apartId") Integer apartId,@Param("billId") Integer billId,@Param("status") Integer status,@Param("paidAmount") Integer paidAmount);

}
