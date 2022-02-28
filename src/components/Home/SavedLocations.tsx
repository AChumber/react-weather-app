import React from 'react';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';

export const SavedLocations:React.FC = () => {
    const savedLocations = useAppSelector(state => state.location.savedLocations);
    const dispatch = useAppDispatch();

    return (
        <div>
            <p>Saved Locations</p>
            {
                savedLocations.length <= 0 ? <p>No saved locations</p> : savedLocations.map(location => <p>{location.name}</p>)
            }
        </div>
    )
}
