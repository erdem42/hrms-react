import React from 'react'
import { Table, Container } from "semantic-ui-react";
import EmployerService from '../../services/employerService';
import { useState, useEffect } from "react";

export default function Employer() {

    const [employers, setEmployers] = useState([]);

  useEffect(() => {
    let employerService = new EmployerService();
    employerService
      .getEmployer()
      .then((result) => setEmployers(result.data.data));
  }, []);
    return (
        <div>
             <Container>
        <Table striped style={{ margin: "5em" }}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>company name</Table.HeaderCell>
              <Table.HeaderCell>web address</Table.HeaderCell>
              <Table.HeaderCell>E-mail</Table.HeaderCell>
              <Table.HeaderCell>phone number</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {employers.map((e) => (
              <Table.Row key={e.id}>
                <Table.Cell>{e.companyName}</Table.Cell>
                <Table.Cell>{e.webAddress}</Table.Cell>
                <Table.Cell>{e.email}</Table.Cell>
                <Table.Cell>{e.phoneNumber}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Container>
        </div>
    )
}
