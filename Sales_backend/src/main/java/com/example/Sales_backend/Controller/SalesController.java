	package com.example.Sales_backend.Controller;

import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Sales_backend.Model.Sales;
import com.example.Sales_backend.Repository.SalesRepository;
import com.example.Sales_backend.Service.SalesService;

@RestController
@RequestMapping("/api/sales") 
@CrossOrigin(origins = "http://localhost:4200")  // Allowing CORS for this controller only

public class SalesController {
	@Autowired
    private SalesService salesService;
	@Autowired
	private SalesRepository salesRepository;

    // Get all sales records
    @GetMapping
    public List<Sales> getAllSales() {
    	//List<Sales> salesList = salesRepository.findAll();
        // Sort by salesDate ascending (you can choose any field here)
        return salesService.getAllSales();
    }

    // Get sale record by ID
    @GetMapping("/{id}")
    public Sales getSalesById(@PathVariable Long id) {
        return salesService.getSalesById(id);
    }

    // Save a new sale record
    @PostMapping
    public Sales saveSales(@RequestBody Sales sales) {
        return salesService.saveSales(sales);
    }
    
    @GetMapping("/analytics/leadingProductBySalesAmount")
    public Sales getLeadingProductBySalesAmount() {
        return salesService.getLeadingProductBySalesAmount();
    }
    @GetMapping("/analytics/leadingProductByUnitsSold")
    public Sales getLeadingProductByUnitsSold() {
        return salesService.getLeadingProductByUnitsSold();
    }
    
    @GetMapping("/analytics/leadingProductByCity")
    public Map<String, Sales> getLeadingProductByCity() {
        return salesService.getLeadingProductByCity();
    }
    

}
