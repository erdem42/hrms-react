import React from 'react'

export default function Employee() {

    const [employee, setEmployee] = useState([])

    useEffect(() => {
       
    }, [input])

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
