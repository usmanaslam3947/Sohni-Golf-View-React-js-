package com.sohnigolfview.server.persistence.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "apartments")
public class Apartment implements Serializable {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "apartment_name")
    private String apartment_name;

    @Column(name = "contact")
    private String contact;

    @Column(name = "status")
    private Integer status;

    @Column(name = "person_name")
    private String person_name;

    @Column(name = "password")
    private String password;

    public Integer getId() {
        return id;
    }

    public String getApartment_name() {
        return apartment_name;
    }

    public String getContact() {
        return contact;
    }

    public Integer getStatus() {
        return status;
    }

    public String getPerson_name() {
        return person_name;
    }

    public String getPassword() {
        return password;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setApartment_name(String apartment_name) {
        this.apartment_name = apartment_name;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public void setPerson_name(String person_name) {
        this.person_name = person_name;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
