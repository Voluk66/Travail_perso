package com.tcgshop.ecommerce.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class NotFoundAdvice {
	@ExceptionHandler(java.util.NoSuchElementException.class)
	public ResponseEntity<String> handleNoSuchElement() {
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Not Found");
	}
}