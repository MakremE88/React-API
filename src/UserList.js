import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
    const url = 'https://jsonplaceholder.typicode.com/users'
  
    const [data, setData] = useState([])
  
    useEffect(() => {
      axios.get(url).then(json => setData(json.data))
    }, [])
  
      return data.map(user => {
        return (
            <table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Webiste</th>
                <th>Address street</th>
                <th>Company</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
                <td>{user.address.street}</td>
                <td>{user.company.name}</td>
              </tr>
            </tbody>
          </table>
        )
      })
    }
  
export default UserList;