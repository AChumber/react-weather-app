import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'
import { BrowserRouter } from "react-router-dom";
import { Search } from '../Search'; 

const MockSearch = () => {
    return(
        <BrowserRouter>
            <Search />
        </BrowserRouter>
    );
}

describe("Search", () => {
    it("should render search input", () => {
        render(<MockSearch />)

        const SearchElem = screen.getByTestId('location-search');
        expect(SearchElem).toBeInTheDocument();
    });

    it("should change input value when text is entered", () => {
        render(<MockSearch />)
        const SearchElem:HTMLInputElement = screen.getByTestId('location-search');
        fireEvent.change(SearchElem, { target: { value: "Birmingham" } });
        expect(SearchElem.value).toBe("Birmingham");
    });

    //Test async calls to api using mock api endpoint

});