import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../Store";

//interface for the object stored in the array in state
interface stateObjectInterface {
    name: string,
    long: number,
    lat: number
}
interface LocationState { 
    savedLocations: Array<stateObjectInterface>
}

const initialState:LocationState = {
    savedLocations: []
};

export const locationSlice = createSlice({
    name: 'locations',
    initialState,
    reducers: {
        addLocation: (state, action: PayloadAction<stateObjectInterface>) => {
            if(!state.savedLocations.some(location => location.name === action.payload.name)) {
                state.savedLocations?.push(action.payload);
            }
        },
        removeLocation: (state, action: PayloadAction<string>) => {
            if(state.savedLocations){
                let newLocationState = state.savedLocations.filter(item => item.name !== action.payload);
                return {
                    ...state,
                    savedLocations: newLocationState
                };
            }
        }
    }
});

export const { addLocation, removeLocation } = locationSlice.actions;

export const locationCount = (state:RootState) => state.location.savedLocations;

export default locationSlice.reducer;