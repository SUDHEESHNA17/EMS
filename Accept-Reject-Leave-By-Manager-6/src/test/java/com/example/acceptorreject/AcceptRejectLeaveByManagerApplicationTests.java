package com.example.acceptorreject;

import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import io.restassured.http.ContentType;
import static io.restassured.RestAssured.*;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class AcceptRejectLeaveByManagerApplicationTests {
	
	
	@Order(1)
	@Test()
	void acceptLeave() {
		given().header("Content_Type","application/json").contentType(ContentType.JSON).accept(ContentType.JSON)

		.when()
		.put("http://localhost:9003/updatestatus/accept/ab@gmail.com")
		.then()
		.assertThat().statusCode(200);
		
	}
	
		
		@Order(2)
	@Test()
	void rejectLeave() {
		given().header("Content_Type","application/json").contentType(ContentType.JSON).accept(ContentType.JSON)

		.when()
		.put("http://localhost:9003/updatestatus/reject/ab@gmail.com")
		.then()
		.assertThat().statusCode(200);
		
		
		
	}
		@Order(3)
		@Test()
		void deleteLeave() {
			given().header("Content_Type","application/json").contentType(ContentType.JSON).accept(ContentType.JSON)
        
			.when()
			.delete("http://localhost:9003/updatestatus/del/ab@gmail.com")
			.then()
			.assertThat().statusCode(200);	
		}

	

}
