import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';

export const Loading = () => {
  return (
    <>
    <Card style={{ width: '20rem', height: '25rem' }}>
        <Card.Body>
        <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
        </Placeholder>
        <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={6} /> <Placeholder xs={8} />
        </Placeholder>
        <Placeholder.Button variant="primary" xs={6} />
        </Card.Body>
    </Card>
    </>
  )
}
