package com.petrolstation.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@EnableWebMvc
@Configuration
public class MvcConfig implements WebMvcConfigurer {

    @Override
    public void addResourceHandlers(
            ResourceHandlerRegistry registry) {

        registry.addResourceHandler("/static/**")
                .addResourceLocations("/WEB-INF/frontend/build/static/");
        registry.addResourceHandler("/static/**")
                .addResourceLocations("/WEB-INF/frontend/build/static/");
        registry.addResourceHandler("/*.css")
                .addResourceLocations("/WEB-INF/frontend/build/");
        registry.addResourceHandler("/*.json")
                .addResourceLocations("/WEB-INF/frontend/build/");
        registry.addResourceHandler("/*.ico")
                .addResourceLocations("/WEB-INF/frontend/build/");
        registry.addResourceHandler("/index.html")
                .addResourceLocations("/WEB-INF/frontend/build/index.html");
    }
}