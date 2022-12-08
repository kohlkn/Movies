import React, { useState } from "react"
import { Card, /*Button,*/ Alert } from "react-bootstrap"
import { useAuth } from "../Contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import Button from '@mui/material/Button'

export default function Logout() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const navigate = useNavigate()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      navigate("/MainPage")
      window.location.reload(false);
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <>
    <center>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <br/><br/>
          <Link to="/UpdatePassword" variant="body2" underline='none' style= {{ color: 'red'}}>
            Update Password
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <br/>
        <Button
            type="submit"
            halfWidth
            variant="contained"
            style= {{ backgroundColor: 'red'}}
            sx={{ mt: 3, mb: 2 }}
            onClick={handleLogout}
        >
                Logout
        </Button>
      </div>
      </center>
    </>
  )
}
