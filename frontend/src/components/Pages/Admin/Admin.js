import React from 'react'
import classes from './Admin.module.css'
import { Link } from 'react-router-dom'

export default function Admin() {
  return (
    <div className={classes.box}>
    <div className={classes.foodadmin}>
        <Link to='/foodadmin'>
            Foods
        </Link>
    </div>
    <div className={classes.emp}>
        <Link to='/empadmin'>
            Employees
        </Link>
    </div>
    </div>
  )
}
