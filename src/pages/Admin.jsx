import { useEffect, useState } from 'react'
import { Container, Table, Form, Button, Alert, Spinner, Row, Col, Card } from 'react-bootstrap'
import { supabase } from '../lib/supabaseClient'
import { useAuth } from '../context/AuthContext'

const emptyForm = { title: '', description: '' }

function Admin() {
  const { user } = useAuth()
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const [newCourse, setNewCourse] = useState(emptyForm)
  const [creating, setCreating] = useState(false)

  const [editingId, setEditingId] = useState(null)
  const [editForm, setEditForm] = useState(emptyForm)
  const [saving, setSaving] = useState(false)

  const [deletingId, setDeletingId] = useState(null)

  async function fetchCourses() {
    setLoading(true)
    const { data, error } = await supabase
      .from('courses')
      .select('id, title, description')
      .order('id', { ascending: true })

    if (error) {
      setError(error.message)
    } else {
      setCourses(data)
      setError(null)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchCourses()
  }, [])

  async function handleCreate(e) {
    e.preventDefault()
    setCreating(true)
    const { error } = await supabase.from('courses').insert(newCourse)

    if (error) {
      setError(error.message)
    } else {
      setNewCourse(emptyForm)
      await fetchCourses()
    }
    setCreating(false)
  }

  function startEdit(course) {
    setEditingId(course.id)
    setEditForm({ title: course.title, description: course.description })
  }

  function cancelEdit() {
    setEditingId(null)
    setEditForm(emptyForm)
  }

  async function handleUpdate(e, id) {
    e.preventDefault()
    setSaving(true)
    const { error } = await supabase.from('courses').update(editForm).eq('id', id)

    if (error) {
      setError(error.message)
    } else {
      cancelEdit()
      await fetchCourses()
    }
    setSaving(false)
  }

  async function handleDelete(id) {
    if (!window.confirm('Delete this course?')) return

    setDeletingId(id)
    const { error } = await supabase.from('courses').delete().eq('id', id)

    if (error) {
      setError(error.message)
    } else {
      await fetchCourses()
    }
    setDeletingId(null)
  }

  async function handleLogout() {
    await supabase.auth.signOut()
  }

  return (
    <Container className="my-4">
      <Row className="align-items-center mb-3">
        <Col>
          <h1>Course Admin</h1>
          <p className="text-muted mb-0">Signed in as {user?.email}</p>
        </Col>
        <Col xs="auto">
          <Button variant="outline-secondary" onClick={handleLogout}>Log Out</Button>
        </Col>
      </Row>

      {error && (
        <Alert variant="danger" onClose={() => setError(null)} dismissible>
          {error}
        </Alert>
      )}

      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Add Course</Card.Title>
          <Form onSubmit={handleCreate}>
            <Row className="g-2 align-items-end">
              <Col md={4}>
                <Form.Label>Title</Form.Label>
                <Form.Control
                  value={newCourse.title}
                  onChange={e => setNewCourse({ ...newCourse, title: e.target.value })}
                  required
                />
              </Col>
              <Col md={6}>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  value={newCourse.description}
                  onChange={e => setNewCourse({ ...newCourse, description: e.target.value })}
                  required
                />
              </Col>
              <Col md={2}>
                <Button type="submit" variant="primary" disabled={creating} className="w-100">
                  {creating ? 'Adding...' : 'Add'}
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>

      {loading ? (
        <Spinner animation="border" role="status" />
      ) : (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th style={{ width: 180 }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map(course => (
              <tr key={course.id}>
                {editingId === course.id ? (
                  <>
                    <td>
                      <Form.Control
                        value={editForm.title}
                        onChange={e => setEditForm({ ...editForm, title: e.target.value })}
                      />
                    </td>
                    <td>
                      <Form.Control
                        value={editForm.description}
                        onChange={e => setEditForm({ ...editForm, description: e.target.value })}
                      />
                    </td>
                    <td>
                      <Button
                        size="sm"
                        variant="success"
                        className="me-2"
                        disabled={saving}
                        onClick={e => handleUpdate(e, course.id)}
                      >
                        Save
                      </Button>
                      <Button size="sm" variant="secondary" onClick={cancelEdit}>
                        Cancel
                      </Button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{course.title}</td>
                    <td>{course.description}</td>
                    <td>
                      <Button
                        size="sm"
                        variant="outline-primary"
                        className="me-2"
                        onClick={() => startEdit(course)}
                      >
                        Edit
                      </Button>
                      <Button
                        size="sm"
                        variant="outline-danger"
                        disabled={deletingId === course.id}
                        onClick={() => handleDelete(course.id)}
                      >
                        {deletingId === course.id ? 'Deleting...' : 'Delete'}
                      </Button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  )
}

export default Admin
