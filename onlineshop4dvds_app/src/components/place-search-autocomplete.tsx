import { ChangeEvent, useRef, useState } from "react";
import { StandaloneSearchBox, LoadScript, Libraries } from "@react-google-maps/api";
import { Input } from "@nextui-org/react";

// const {LatLngBounds} = await google.maps.importLibrary("core") as any;

// const latLngBounds = new LatLngBounds({lat: 21, lng: 105});

export default function PlaceSearchAutocomplete({apiKey}: {apiKey: string}) {
    const [value, setValue] = useState<string>("");
    const inputRef = useRef() as any;
    const [ libraries ] = useState<Libraries>(['places']);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    const handlePlaceChanged = () => {
        const [place] = inputRef.current.getPlaces();
        if (place) {
            // console.log(place.formatted_address);
            // console.log(place.geometry.location.lat());
            // console.log(place.geometry.location.lng());
            setValue(place.formatted_address);
        }
    };

    return (
        <LoadScript
            googleMapsApiKey={apiKey}
            libraries={libraries}
            language="vi"
        >
            <div className="w-full">
                <StandaloneSearchBox
                    onLoad={ref => (inputRef.current = ref)}
                    onPlacesChanged={handlePlaceChanged}
                    bounds={{north: 21.0818, south: 20.9099, west: 105.6635, east: 105.8889}}
                >
                    <Input type="text" label="Address" placeholder="Lane 1, Street 1" isRequired labelPlacement="outside" value={value} onChange={handleInputChange} />
                </StandaloneSearchBox>
            </div>
        </LoadScript>
    );
}