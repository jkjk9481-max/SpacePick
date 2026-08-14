package com.spacepick.space;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Space {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // 공간을 구분하는 기본 키 

    private String name; // 공간 이름
 
    private String location; // 공간 위치

    private Long pricePerHour; // 시간당 가격

    protected Space() {
    }

    public Space(String name, String location, Long pricePerHour) {
        this.name = name;
        this.location = location;
        this.pricePerHour = pricePerHour;
    }
}
