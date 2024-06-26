package com.example.checkupdateprogress;

import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.checkupdateprogress.model.TaskAssign;

import io.restassured.http.ContentType;
import static io.restassured.RestAssured.*;

@SpringBootTest
class CheckTaskAndUpdateProgressByEmployeeApplicationTests {

	@Test
	@Order(1)
	void getAllTasks() {
		given().header("Content_Type","application/json").contentType(ContentType.JSON).accept(ContentType.JSON)

		.when()
		.get("http://localhost:9011/check/ab@gmail.com")
		.then()
		.assertThat().statusCode(200);
	}

	
	@Test
	@Order(2)
	void getByTaskId(){
		given().header("Content_Type","application/json").contentType(ContentType.JSON).accept(ContentType.JSON)

		.when()
		.get("http://localhost:9011/check/task/231")
		.then()
		.assertThat().statusCode(200);
	}
	
	
	@Test
	@Order(3)
	void updateProgress() {
		TaskAssign p=new TaskAssign();
		p.setTaskId("75");
		p.setTaskProgress("done");
		
		given().header("Content_Type","application/json").contentType(ContentType.JSON).accept(ContentType.JSON)
          .body(p)
		.when()
		.put("http://localhost:9011/check/update/230")
		.then()
		.assertThat().statusCode(200);
		
	}
}
