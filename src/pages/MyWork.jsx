import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';

const projects = [
  {
    title: 'TrailTracker',
    description:
      'A mobile-friendly web app for logging hikes and visualizing elevation data. Built with React, Leaflet.js, and a Node/Express backend.',
    tags: ['React', 'Node.js', 'Leaflet', 'PostgreSQL'],
    link: '#',
  },
  {
    title: 'BudgetWise',
    description:
      'Personal finance dashboard that aggregates bank transactions and surfaces spending insights using interactive charts.',
    tags: ['TypeScript', 'D3.js', 'REST API', 'AWS Lambda'],
    link: '#',
  },
  {
    title: 'OpenShelf',
    description:
      'A community-driven book-sharing platform where neighbors can list and borrow physical books. Features real-time availability updates.',
    tags: ['React', 'Firebase', 'Tailwind', 'OAuth'],
    link: '#',
  },
  {
    title: 'DevPulse',
    description:
      'A developer productivity tool that aggregates GitHub activity, PR review times, and CI build stats into a single dashboard.',
    tags: ['Next.js', 'GraphQL', 'Docker', 'GitHub API'],
    link: '#',
  },
  {
    title: 'RecipeBox',
    description:
      'Recipe management app with smart search by ingredient, dietary filters, and auto-generated shopping lists.',
    tags: ['React', 'Python', 'FastAPI', 'SQLite'],
    link: '#',
  },
  {
    title: 'Pixel Palette',
    description:
      'Browser-based pixel art editor with layer support, palette management, and one-click PNG/GIF export.',
    tags: ['Vanilla JS', 'Canvas API', 'IndexedDB'],
    link: '#',
  },
];

export default function MyWork() {
  return (
    <Container className="py-5">
      <h1 className="mb-2">My Work</h1>
      <p className="text-muted mb-4">
        A selection of projects I've built or contributed to.
      </p>
      <Row xs={1} md={2} lg={3} className="g-4">
        {projects.map(project => (
          <Col key={project.title}>
            <Card className="h-100 shadow-sm">
              <Card.Body className="d-flex flex-column">
                <Card.Title>{project.title}</Card.Title>
                <Card.Text className="text-muted flex-grow-1">
                  {project.description}
                </Card.Text>
                <div className="mb-3">
                  {project.tags.map(tag => (
                    <Badge bg="secondary" className="me-1" key={tag}>{tag}</Badge>
                  ))}
                </div>
                <Button variant="outline-primary" size="sm" href={project.link}>
                  View Project
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
