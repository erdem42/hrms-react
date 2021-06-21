import React from 'react'
import CityService from '../../services/cityService'
import { Table, Container } from "semantic-ui-react";
import { useState, useEffect } from "react";

export default function CityList() {

    const [cities, setCities] = useState([])

    useEffect(() => {
        let cityService=new CityService()
        cityService.getCities().then(result=>setCities(result.data.data))}, [])


    return (
        <div>
            <Table striped style={{ margin: "5em" }}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>id</Table.HeaderCell>
              <Table.HeaderCell>city</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
          {cities.map((c) => (
              <Table.Row key={c.id}>
                <Table.Cell>{c.id}</Table.Cell>
                <Table.Cell>{c.cityName}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
        </div>
    )
}
