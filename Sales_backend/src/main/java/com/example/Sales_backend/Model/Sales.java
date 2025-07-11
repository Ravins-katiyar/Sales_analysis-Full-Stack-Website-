package com.example.Sales_backend.Model;

import jakarta.persistence.*;

@Entity
@Table(name = "sales")
public class Sales {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String productName;
    
    private Integer noOfUnits;
    
    private Double pricePerUnit;
    
    private Double salesAmount;
    
    private String salesDate;
    
    private String city;
    
    public Sales() {
    }
    public Sales(Long id, String productName, Integer noOfUnits, Double pricePerUnit, Double salesAmount, String salesDate,String city) {
        this.id = id;
        this.productName = productName;
        this.noOfUnits = noOfUnits;
        this.pricePerUnit = pricePerUnit;
        this.salesAmount = salesAmount;
        this.salesDate = salesDate;
        this.city = city;
    }
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName.toLowerCase();
	}
	public Integer getNoOfUnits() {
		return noOfUnits;
	}
	public void setNoOfUnits(Integer noOfUnits) {
		this.noOfUnits = noOfUnits;
	}
	public Double getPricePerUnit() {
		return pricePerUnit;
	}
	public void setPricePerUnit(Double pricePerUnit) {
		this.pricePerUnit = pricePerUnit;
	}
	public Double getSalesAmount() {
		return salesAmount;
	}
	public void setSalesAmount(Double salesAmount) {
		this.salesAmount = salesAmount;
	}

	public String getSalesDate() {
		return salesDate;
	}

	public void setSalesDate(String salesDate) {
		this.salesDate = salesDate;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city.toLowerCase();
	}   
}
