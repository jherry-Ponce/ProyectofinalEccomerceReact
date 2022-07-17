import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import "../../../assets/categoryitem.css" 
export const CategoriaItems=()=>{
    return(
        < >
          <Row lg={4} md={3} sm={2} xs={2}>  
          { [0,1,2,3,4,5,6,7,8,9,10,11].map((variant) =>(
                <Col className='mb-2'>
                    <Card >
                        <Card.Img
                        variant="top"
                        src="https://i.linio.com/p/8c203c3f7cc97dfe42f64d3fd86ffa5f-catalog.webp"
                        />
                        <Card.Body>
                        <Card.Title className="fs-6 text-justify">
                        Reloj Smartwatch Deportivo Smart Band M6 
                        </Card.Title>
                        <Card.Text>
                            <div className="price-del"><span> S/ 99.00</span>-59%</div>
                            <div className="text-danger">S/ 39.99 <span></span></div>
                            <div className='text-warning'>
                                <i className="fa fa-star-o " aria-hidden="true"></i>
                                <i className="fa fa-star-o" aria-hidden="true"></i>
                                <i className="fa fa-star-o" aria-hidden="true"></i>
                                <i className="fa fa-star-o" aria-hidden="true"></i>
                                <i className="fa fa-star-o" aria-hidden="true"></i>
                            </div>
                        </Card.Text>
                        
                        </Card.Body>
                    </Card>
                </Col>
            )) }                                 
            </Row>              
        </>
    )
}