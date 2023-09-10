package com.sohnigolfview.server.persistence.model;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "apartment_sheet")
public class ApartmentSheet implements Serializable {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "apart_id")
    private Integer apartId;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "apart_id",insertable = false,updatable = false)
    @Fetch(FetchMode.JOIN)
    private Apartment apartment;
    @Column(name = "date")
    private String date;
    @Column(name = "description")
    private String description;
    @Column(name = "reference_number")
    private Integer reference_number;
    @Column(name = "withdrawal")
    private Integer withdrawal;
    @Column(name = "deposit")
    private Integer deposit;
    @Column(name = "type")
    private Integer type;

    @Column(name = "total")
    private Integer total;

    @Column(name = "input_field")
    private Integer input_field;

    @Column(name = "save")
    private Integer save;

    public Integer getSave() {
        return save;
    }

    public void setSave(Integer save) {
        this.save = save;
    }

    public Integer getInput_field() {
        return input_field;
    }

    public void setInput_field(Integer input_field) {
        this.input_field = input_field;
    }

    public Integer getTotal() {
        return total;
    }

    public void setTotal(Integer total) {
        this.total = total;
    }

    public void setApartId(Integer apartId) {
        this.apartId = apartId;
    }

    public Integer getApartId() {
        return apartId;
    }

    public Apartment getApartment() {
        return apartment;
    }

    public void setApartment(Apartment apartment) {
        this.apartment = apartment;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getReference_number() {
        return reference_number;
    }

    public void setReference_number(Integer reference_number) {
        this.reference_number = reference_number;
    }

    public Integer getWithdrawal() {
        return withdrawal;
    }

    public void setWithdrawal(Integer withdrawal) {
        this.withdrawal = withdrawal;
    }

    public Integer getDeposit() {
        return deposit;
    }

    public void setDeposit(Integer deposit) {
        this.deposit = deposit;
    }

    public Integer getType() {
        return type;
    }

    public void setType(Integer type) {
        this.type = type;
    }
}
