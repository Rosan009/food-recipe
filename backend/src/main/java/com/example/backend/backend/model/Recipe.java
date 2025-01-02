package com.example.backend.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class CardData {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String heading;
    private String description;
    private String image;
    private String duration;
    private Float rating;

    @OneToMany(mappedBy = "cardData", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Ingredient> ingredients = new ArrayList<>();

    @OneToMany(mappedBy = "cardData", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Procedure> procedures = new ArrayList<>();
}
