import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar'
import InvoiceAll from './components/invoice/InvoiceAll'
import InvoiceNew from './components/invoice/InvoiceNew'
import InvoiceEdit from './components/invoice/InvoiceEdit'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Navbar />
          <Switch>
            <Route path='/' component={InvoiceAll} />
            <Route path='/invoice/new' component={InvoiceNew} />
            <Route path='/invoice' component={InvoiceAll} />
            <Route path='/edit/:id' component={InvoiceEdit} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
