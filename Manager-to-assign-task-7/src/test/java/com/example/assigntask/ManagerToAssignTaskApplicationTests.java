package com.example.assigntask;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.assigntask.modal.TaskAssign;

import io.restassured.http.ContentType;
import static io.restassured.RestAssured.*;

import java.time.LocalDate;

@SpringBootTest
class ManagerToAssignTaskApplicationTests {
	
	
	@Test
	@Order(1)
	void saveTask() {
		TaskAssign  t= new TaskAssign();		
		t.setDescription("des");
		t.setDueDate(LocalDate.now());
		t.setEmailId("ab@gmail.com");
		t.setMemailId("aravind@gmail.com");
		t.setTaskName("name");
		t.setTaskProgress("progress");
		t.setTaskStatus("status");
		
		given().header("Content_Type","application/json").contentType(ContentType.JSON).accept(ContentType.JSON)
        .body(t)
		.when()
		.post("http://localhost:9010/task/ab@gmail.com")
		.then()
		.assertThat().statusCode(201);
		
		
	}
	
	@Test
	@Order(2)
	void getByEmailIdProgress() {
		given().header("Content_Type","application/json").contentType(ContentType.JSON).accept(ContentType.JSON)
		.when()
		.get("http://localhost:9010/task/ab@gmail.com")
		.then()
		.assertThat().statusCode(200);
		
	}
	@Order(3)
	@Test
	void getEmployeeByEmailId() {
		given().header("Content_Type","application/json").contentType(ContentType.JSON).accept(ContentType.JSON)

		.when()
		.get("http://localhost:9010/task/ab@gmail.com")
		.then()
		.assertThat().statusCode(200);
	}

	

}
