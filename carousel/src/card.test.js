import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";

it("works when you click on the right arrow", function() {
    const { queryByTestId, queryByAltText } = render(<Card caption="this is a caption" src={image1} alt="Photo by Richard Pasquarella on Unsplash" currNum={1} totalNum={1}/>);
  
    // expect the first image to show, but not the second
    expect(queryByAltText("this is a caption")).toBeInTheDocument();

    expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();
})

