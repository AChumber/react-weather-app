import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../../redux/Store";
import { HomePage } from '../index';
import reducer, { addLocation } from '../../../redux/slices/locationSlice';


const MockHomePage = () => {
    return(
        <BrowserRouter>
            <Provider store={ store }>
                <HomePage />
            </Provider>
        </BrowserRouter>
    );
}


describe("SavedLocations", () => {
    it("Should not display component when no locations are saved", () => {
        //check screen for h2 with content 'Saved Locations'
        render(<MockHomePage />);
        let savedLocationsContainer = screen.getByTestId('saved-locations-container');
        expect(savedLocationsContainer).toBeEmptyDOMElement();
    });

    it("Should add location to redux state when running the add action", () => {
        //dispatch(addLocation({ name:"My Location", lat: 32, long: 43 }));
        const prevState = { savedLocations: [] };
        expect(reducer(prevState, addLocation({ name:"My Location", lat: 32, long: 43 })))
            .toEqual({
                savedLocations: [
                    {
                        name: 'My Location',
                        long: 43,
                        lat: 32
                    }
                ]
            });
    })


});