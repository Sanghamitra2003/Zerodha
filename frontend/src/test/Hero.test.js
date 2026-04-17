import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Hero from "../landing-page/home/Hero";

describe("Hero component", () => {
    test("renders hero image", () => {
        render(
            <BrowserRouter>
                <Hero />
            </BrowserRouter>,
        );

        const heroImage = screen.getByAltText("Hero Image");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src", "media/images/homeHero.png");
    });
});
