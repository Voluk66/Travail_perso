package com.tcgshop.ecommerce.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.tcgshop.ecommerce.model.Product;
import com.tcgshop.ecommerce.repository.ProductRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProductService {
	private final ProductRepository productRepository;

	public List<Product> getProducts(String query) {
		if (query == null || query.isBlank()) {
			return productRepository.findAll();
		}
		return productRepository.findByNameContainingIgnoreCaseOrFranchiseContainingIgnoreCase(query, query);
	}

	public Product getProductById(Long id) {
		return productRepository.findById(id).orElseThrow();
	}
}