package com.sohnigolfview.server.persistence.repository;

import com.sohnigolfview.server.base.response.Response;
import com.sohnigolfview.server.persistence.model.Apartment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

//@Repository
public interface ApartmentRepo extends JpaRepository<Apartment,Integer> {

    @Query(value = "SELECT * from apartments where status=:status",nativeQuery = true)
    List<Apartment> getApartmentsByStatus(@Param("status") Integer status);


    @Query(value = "SELECT * FROM apartments WHERE id=:apartId",nativeQuery = true)
    Apartment getApartmentById(@Param("apartId") Integer apartId);

//    @Query(value = "INSERT INTO apartments(apartment_name,contact,status,person_name,password) VALUES(:apart_name,:cont,:status,:person_name,:password)",nativeQuery = true)
//    List<Apartment> createApartment(@Param("apart_name") String name,@Param("cont") String contact,@Param("status") Integer status,@Param("person_name") String person_name,@Param("password") String password);
//
//
    @Query("UPDATE Apartment SET apartment_name=:apart_name,contact=:contact,status=:status,person_name=:person_name,password=:password WHERE id=:apartId")
    Apartment updateApartment(@Param("apart_name") String apartName,@Param("contact") String contact,@Param("status") Integer status,@Param("person_name") String personName,@Param("password") String password,@Param("apartId") Integer apartId);

    @Transactional
    @Modifying
    @Query("UPDATE Apartment SET status=:status WHERE id=:apartId")
    int changeApartmentStatus(@Param("status") Integer status,@Param("apartId") Integer apartId);



}
