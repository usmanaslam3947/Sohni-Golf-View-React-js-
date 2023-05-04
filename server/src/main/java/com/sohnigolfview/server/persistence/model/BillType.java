package com.sohnigolfview.server.persistence.model;

import javax.persistence.*;
import java.io.Serializable;


@Entity
@Table(name = "bill_types")
public class BillType implements Serializable {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    @Column(name = "type")
    private String type;

}
