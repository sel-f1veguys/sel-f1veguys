package com.f1veguys.sel.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Eco_Company")
public class EcoCompany {
    @Id
    private int id;
    private String name;
}