import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { CategoriaItems } from './CategoriesItems';
export const Categoryfilters=()=>{
    return(
        <Row className='mt-4'>
                    <Col lg={3}>
                        <h4>Desktop</h4>
                        <ListGroup variant="flush bg-white">
                            <ListGroup.Item className='cursor-pointer'>Celulares y Smartphone</ListGroup.Item>
                            <ListGroup.Item className='cursor-pointer'>Tablets</ListGroup.Item>
                            <ListGroup.Item className='cursor-pointer'>Morbi leo risus</ListGroup.Item>
                            <ListGroup.Item className='cursor-pointer'>Porta ac consectetur ac</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col lg={9} >
                        <CategoriaItems/>
                    </Col>
                </Row>
    )
}