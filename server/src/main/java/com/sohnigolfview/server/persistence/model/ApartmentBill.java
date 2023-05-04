package com.sohnigolfview.server.persistence.model;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Blob;


@Entity
@Table(name = "apartment_bills")
public class ApartmentBill implements Serializable {

    @Column(name = "system_user")
    private Integer systemUser;

    @Column(name = "payee_name")
    private String payeeName;

    public Integer getSystemUser() {
        return systemUser;
    }

    public void setSystemUser(Integer systemUser) {
        this.systemUser = systemUser;
    }

    public String getPayeeName() {
        return payeeName;
    }

    public void setPayeeName(String payeeName) {
        this.payeeName = payeeName;
    }

    public String getPayeeCnic() {
        return payeeCnic;
    }

    public void setPayeeCnic(String payeeCnic) {
        this.payeeCnic = payeeCnic;
    }

    @Column(name = "payee_cnic")
    private String payeeCnic;

    @Lob
    @Column(name = "cnic_image",columnDefinition = "LONGTEXT")
    private String cnicImage;

    public String getCnicImage() {
        return cnicImage;
    }

    public void setCnicImage(String cnicImage) {
        this.cnicImage = cnicImage;
    }

    @Column(name = "status")
    private Integer status;

    @Column(name = "paid_amount")
    private Integer paidAmount;

    @Column(name = "amount")
    private Long amount;

    public Long getAmount() {
        return amount;
    }

    public void setAmount(Long amount) {
        this.amount = amount;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public Integer getPaidAmount() {
        return paidAmount;
    }

    public void setPaidAmount(Integer paidAmount) {
        this.paidAmount = paidAmount;
    }

    @Column(name = "apartment_id")
    private Integer apartmentId;

    @Column(name = "bill_id")
    private Integer billId;

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "apartment_id",insertable = false,updatable = false)
    @Fetch(FetchMode.JOIN)
    private Apartment apartment;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "bill_id",insertable = false,updatable = false)
    @Fetch(FetchMode.JOIN)
    private Bill bill;

    public Apartment getApartment() {
        return apartment;
    }

    public void setApartment(Apartment apartment) {
        this.apartment = apartment;
    }

    public Bill getBill() {
        return bill;
    }

    public void setBill(Bill bill) {
        this.bill = bill;
    }

    public Integer getApartmentId() {
        return apartmentId;
    }

    public void setApartmentId(Integer apartmentId) {
        this.apartmentId = apartmentId;
    }

    public Integer getBillId() {
        return billId;
    }

    public void setBillId(Integer billId) {
        this.billId = billId;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
}
