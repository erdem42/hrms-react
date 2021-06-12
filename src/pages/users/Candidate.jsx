import React from 'react'
import CandidateService from '../../services/candidateService'
import { Table, Container } from "semantic-ui-react";
import { useState, useEffect } from "react";

export default function Candidate() {

    const [candidates, setCandidates] = useState([])

    useEffect(() => {
        let candidateService=new CandidateService()
        candidateService.getCandidate().then(result=>setCandidates(result.data.data))}, [])


    return (
        <div>
            <Table striped style={{ margin: "5em" }}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>name</Table.HeaderCell>
              <Table.HeaderCell>mail</Table.HeaderCell>
              <Table.HeaderCell>birth year</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {candidates.map((c) => (
              <Table.Row key={c.id}>
                <Table.Cell>{c.firstName} {c.lastName}</Table.Cell>
                <Table.Cell>{c.email}</Table.Cell>
                <Table.Cell>{c.birthYear}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
        </div>
    )
}
