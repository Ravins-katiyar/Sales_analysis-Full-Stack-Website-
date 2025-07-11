package com.example.Sales_backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Sales_backend.Model.Sales;

public interface SalesRepository extends JpaRepository<Sales, Long>{

}
