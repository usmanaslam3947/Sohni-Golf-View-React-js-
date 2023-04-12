package com.sohnigolfview.server.persistence.repository;

import com.sohnigolfview.server.persistence.model.Bill;
import com.sohnigolfview.server.persistence.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.Date;
import java.util.List;

public interface UserRepo extends JpaRepository<User,Integer> {
    @Query(value = "SELECT * FROM users u",nativeQuery = true)
    List<User> getAllUsers();

    @Query(value = "SELECT * from users u where status=:status",nativeQuery = true)
    List<User> getUsersByStatus(@Param("status") Integer status);


    @Query(value = "SELECT * FROM users WHERE id=:userId",nativeQuery = true)
    User getUserById(@Param("userId") Integer userId);

////    @Query(value = "INSERT INTO apartments(apartment_name,contact,status,person_name,password) VALUES(:apart_name,:cont,:status,:person_name,:password)",nativeQuery = true)
////    List<Apartment> createApartment(@Param("apart_name") String name,@Param("cont") String contact,@Param("status") Integer status,@Param("person_name") String person_name,@Param("password") String password);
//
//    @Transactional
//    @Modifying
//    @Query("UPDATE Bill SET type=:type,amount=:amount,due_date=:due_date,status=:status WHERE id=:billId")
//    int updateBill(@Param("type") String type, @Param("amount") Long amount, @Param("due_date") Date dueDate, @Param("status") Integer status, @Param("billId") Integer billId);
//
    @Transactional
    @Modifying
    @Query("UPDATE User SET status=:status WHERE id=:userId")
    int changeUserStatus(@Param("status") Integer status,@Param("userId") Integer UserId);

    @Query(value = "select * from users where user_name=:userName and password=:pass",nativeQuery = true)
    List<User> login(@Param("userName") String userName,@Param("pass") String password);

//    org.springframework.security.core.userdetails.User findByUserName(String userName);
}
