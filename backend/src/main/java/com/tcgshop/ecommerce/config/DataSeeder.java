package com.tcgshop.ecommerce.config;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.tcgshop.ecommerce.model.Product;
import com.tcgshop.ecommerce.repository.ProductRepository;

@Configuration
public class DataSeeder {
	@Bean
	CommandLineRunner seedProducts(ProductRepository repository) {
		return args -> {
			if (repository.count() > 0) {
				return;
			}
			List<Product> products = List.of(
				Product.builder().name("Pokémon Booster Scarlet & Violet").price(new BigDecimal("5.99")).description("Booster pack de la série Scarlet & Violet").franchise("Pokemon").imageUrl("https://images.pokemonsvg.png").stock(200).category("Booster").rarity("Standard").build(),
				Product.builder().name("Magic: The Gathering - Play Booster").price(new BigDecimal("6.50")).description("Play Booster MTG").franchise("Magic").imageUrl("https://images.mtgbooster.png").stock(150).category("Booster").rarity("Standard").build(),
				Product.builder().name("Yu-Gi-Oh! Structure Deck").price(new BigDecimal("12.90")).description("Structure Deck YGO").franchise("Yu-Gi-Oh!").imageUrl("https://images.ygodeck.png").stock(80).category("Deck").rarity("Standard").build(),
				Product.builder().name("One Piece TCG Booster").price(new BigDecimal("4.99")).description("Booster One Piece").franchise("One Piece").imageUrl("https://images.optcg.png").stock(120).category("Booster").rarity("Standard").build()
			);
			repository.saveAll(products);
		};
	}
}