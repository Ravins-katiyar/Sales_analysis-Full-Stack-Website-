# 📊 QuickSalesAnalytics

QuickSalesAnalytics is a full-stack web application that enables users to record and visualize product sales data. Built using Angular, Spring Boot, MySQL, and Chart.js, the application provides a simple interface to enter daily sales and compare trends over time or across regions.

🎯 Live Demo (optional): [Add your link here]

---

## 🚀 Features

- 📝 Add product sales data (Product, Region, Date, Units Sold)
- 💾 Store and retrieve data from a MySQL database
- 📊 View interactive sales charts using Chart.js
- 🔄 RESTful API integration between Angular and Spring Boot
- 📱 Responsive UI styled with Bootstrap 5
- 💡 Displays insight: top-selling region or date

---

## 🧰 Tech Stack

| Layer     | Technology                                      |
|-----------|-------------------------------------------------|
| Frontend  | Angular v15, TypeScript, Bootstrap 5, Chart.js  |
| Backend   | Java 17, Spring Boot 3, Spring Data JPA         |
| Database  | MySQL                                           |
| API       | RESTful services via Spring Boot                |

---

## 📁 Project Structure

### Frontend (Angular)

- /components  
  - sales-form/ — Product sales entry form  
  - sales-chart/ — Sales data visualized in charts

- /services  
  - sales.service.ts — HTTP service for backend calls

### Backend (Spring Boot)

- SalesData.java — Entity class mapped to MySQL  
- SalesController.java — REST controller for GET/POST APIs  
- SalesRepository.java — JPA interface  
- application.properties — MySQL configuration

---

## 📊 Charts Used

- 📈 Line Chart — Time-based sales data  
- 📊 Bar Chart — Region-wise comparison  
- 🔍 Insight Cards — Highlights top-performing region dynamically

---

## 🛠️ Getting Started

### 🧩 Clone the repo:

```bash
git clone https://github.com/Ravins-katiyar/Sales_analysis-Full-Stack-Website-.git
