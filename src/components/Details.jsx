import React from "react";
import axios from 'axios';
import { useEffect, useState } from "react";

export const Details = ({data}) => {

    const [info, setInfo] = useState([])

    useEffect(() => {
        axios.get(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${data.id}.json`)
        .then(response => setInfo(response.data))
    }, [data.id])

    return (
        <div>
            <div>
                <img src={info.avatar ? info.avatar : ''} />
                <p>{info.name ? info.name : ''}</p>
                <p>{info.details ? info.details.city : ''}</p>
                <p>{info.details ? info.details.company : ''}</p>
                <p>{info.details ? info.details.position : ''}</p>
            </div>
        </div>
    )
}