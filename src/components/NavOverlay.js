import React, {useEffect} from 'react'
import { Link } from "react-router-dom";

export default function NavOverlay(props) {
useEffect(() => {
    document.body.classList.add('mobile-nav-opened')

    return () => {
        document.body.classList.remove('mobile-nav-opened')
    }
})

    return (
        //toggle display value based on boolen from HomeNavBar's useState
        <div className="overlay"  style={{display: props.open ? 'block': 'none' }}>
        <div className="mobile-nav-menu">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/journal">Journal</Link>
          <Link to="/feeling_tracker">Feelings Tracker</Link>
          <Link to="/todos">Todos</Link>
        </div>
      </div>
    )
}
