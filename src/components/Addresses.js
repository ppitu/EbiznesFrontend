import React, { useEffect, useState} from "react";
import {getAddress} from "../RestRequester";

function Addresses(props) {
    const [addresses, setAddresses] = useState(0);

    useEffect(() => {
        getAddress(props.id)
            .then(res => {
                setAddresses({
                    users: res.data
                })

            })}, [props.id]);

    return(
        <div className="addresses">
            <h2>{addresses.id}: {addresses.street}, {addresses.city}, {addresses.zipcode}</h2>
        </div>
    )
}



export default Addresses;
