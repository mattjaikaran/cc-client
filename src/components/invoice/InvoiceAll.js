import React, { Component } from 'react'
import axios from 'axios'
import TableInvoiceRow from './TableInvoiceRow'

class InvoiceAll extends Component {
  constructor(props) {
    super(props)
    this.state = {
      invoice: []
    }
  }

  componentDidMount() {
    axios.get('/api/invoice/')
    .then(res => {
      this.setState({ invoice: res.data.reverse() })
    })
    .catch(err => console.log(err))
  }

  tableInvoiceRow() {
    return this.state.invoice.map((obj, i) => {
      return <TableInvoiceRow obj={obj} key={i} />
    })
  }

  render() {
    return (
      <div>
        <h3 align="center">Invoice List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th onClick={this.onSortClick}>Invoice #</th>
              <th>Cust Code</th>
              <th>Date</th>
              <th>Due Date</th>
              <th>Status</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>
            { this.tableInvoiceRow() }
          </tbody>
        </table>
      </div>
    )
  }
}

export default InvoiceAll
// https://city-casting-api.herokuapp.com/api/
