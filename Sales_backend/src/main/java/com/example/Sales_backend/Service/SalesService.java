package com.example.Sales_backend.Service;

import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.Sales_backend.Model.Sales;
import com.example.Sales_backend.Repository.SalesRepository;

@Service
public class SalesService {
	
	@Autowired
    private SalesRepository salesRepository;

    // Save a new sale record
    public Sales saveSales(Sales sales) {
        return salesRepository.save(sales);
    }

    // Get all sales records
    public List<Sales> getAllSales() {
        return salesRepository.findAll(Sort.by(Sort.Direction.ASC, "productName"));
    }

    // Get sale record by ID
    public Sales getSalesById(Long id) {
        return salesRepository.findById(id).orElse(null);
    }
    
    public Sales getLeadingProductBySalesAmount() {
        List<Sales> allSales = salesRepository.findAll();
        return allSales.stream()
                .max(Comparator.comparing(Sales::getSalesAmount))
                .orElseThrow(() -> new RuntimeException("No sales data found"));
    }
    
    public Sales getLeadingProductByUnitsSold() {
        List<Sales> allSales = salesRepository.findAll();
        return allSales.stream()
                .max(Comparator.comparing(Sales::getNoOfUnits))  
                .orElseThrow(() -> new RuntimeException("No sales data found"));
    }
    public Map<String, Sales> getLeadingProductByCity() {
        List<Sales> allSales = salesRepository.findAll();
        Map<String, Sales> leadingProductsByCity = new HashMap<>();

        for (Sales sale : allSales) {         // // map.merge(key, value, remappingFunction)
            leadingProductsByCity.merge(sale.getCity(), sale, 
            		(existing, newSale) -> existing.getSalesAmount() > newSale.getSalesAmount() ? existing : newSale);
        }

        return leadingProductsByCity;
    }
}
