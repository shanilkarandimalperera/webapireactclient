import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useLocation } from 'react-router-dom';

function CheckReservation() {

    const [listofReservation, setListofReservation] = useState([]);
    const location = useLocation();
    const reference = location.state;



    useEffect(() => {

        if (reference) {
            Axios.get("http://localhost:8080/getReservations", {
                params:
                {
                    hotelreference: reference,
                }
            }).then((response) => {
                setListofReservation(response.data)
                console.log("ss", response.data)
            })
        }
    }, [])

    return (
        <div>
            <table>
                                <tr>
                                    <th>Hotel Reference No</th>
                                    <th>Hotel Name</th>
                                    <th>Customer Name</th>
                                    <th>Customer Contact</th>
                                    <th>Checkin Date</th>
                                    <th>Checkout Date</th>
                                    <th>Number Of Days</th>
                                    <th>Number Of rooms</th>
                                    <th>Board Basis</th>
                                    <th>Price per Room</th>
                                    <th>Total Price</th>

                                </tr>
                                {listofReservation.map((hotel) => {
                                    return (
                                        <tr>
                                            <td style={{ textAlign: 'center' }}>{hotel.hotelreference}</td>
                                            <td style={{ textAlign: 'center' }}>{hotel.hotelname}</td>
                                            <td style={{ textAlign: 'center' }}>{hotel.customername}</td>
                                            <td style={{ textAlign: 'center' }}>{hotel.cusomercontact}</td>
                                            <td style={{ textAlign: 'center' }}>{hotel.checkindate}</td>
                                            <td style={{ textAlign: 'center' }}>{hotel.checkoutdate}</td>
                                            <td style={{ textAlign: 'center' }}>{hotel.numdays}</td>
                                            <td style={{ textAlign: 'center' }}>{hotel.numrooms}</td>
                                            <td style={{ textAlign: 'center' }}>{hotel.boardbasis}</td>
                                            <td style={{ textAlign: 'center' }}>{hotel.priceperroom}</td>
                                            <td style={{ textAlign: 'center' }}>{hotel.totalprice}</td>
                                        </tr>
                                    )
                                })}
                            </table>
        </div>
    )
}
export default CheckReservation;