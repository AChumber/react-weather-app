import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'
import { mockServer, rest } from "../../../mockServer";
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
    it("user input should fetch suggestions", async () => {
        render(<MockSearch />);
        const SearchElem:HTMLInputElement = screen.getByTestId('location-search');
        fireEvent.change(SearchElem, { target: { value: "London" } });

        const suggestions = await screen.findAllByTestId('suggestion');
        expect(suggestions.length).toBe(5);
    });
});