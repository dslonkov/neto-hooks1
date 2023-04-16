import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import { Details } from "./Details";

export const List = () => {
  const [users, setUsers] = useState([]);
  const [data, setData] = useState({})

  useEffect(() => {
    axios.get(' https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json')
    .then(response => setUsers(response.data))
  }, [])

    return (
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <ul className="usersList">
          {
            users.map(user => (
              <li className="usersItem" key={user.id} onClick={() => setData({id: user.id, name: ''})}>
                {user.name}
              </li>
            ))
          }
        </ul>

        <Details data={data} />
      </div>
    )
}