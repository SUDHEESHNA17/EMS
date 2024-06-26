package com.example.assignemployee;

import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import io.restassured.http.ContentType;


import static io.restassured.RestAssured.*;

@SpringBootTest
class ManagerCheckAllAssignedEmployeeApplicationTests {
    
	@Order(1)
	@Test
	void getEmployeesByManager() {
		
		given().header("Content_Type","application/json").contentType(ContentType.JSON).accept(ContentType.JSON)

		.when()
		.get("http://localhost:9001/assigned/madhavi@gmail.com")
		.then()
		.assertThat().statusCode(200);
		
	}

}
