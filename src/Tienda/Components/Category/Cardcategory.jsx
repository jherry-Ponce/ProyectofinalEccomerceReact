import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavDropdown from 'react-bootstrap/NavDropdown';
export const Cardcategory=()=>{
    return(
        <Row>
        <Col lg={12}> <h3>CELULARES Y SMARTPHONES / SAMSUNG</h3></Col>
        <Col lg={12}>
        <Row className="border py-2 align-items-center shadow-sm bg-white px-0">
            <Col lg={6} >
                <Row>
                    <Col lg={3} className=""> 
                    <NavDropdown title="Marca" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                        Another action
                    </NavDropdown.Item>
                    {/* muestra la line horizontal */}
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                        Something else here
                    </NavDropdown.Item>
                    </NavDropdown>
                    </Col>
                    <Col lg={3}> 
                    <NavDropdown title="Precio" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                        Another action
                    </NavDropdown.Item>
                    {/* muestra la line horizontal */}
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                        Something else here
                    </NavDropdown.Item>
                </NavDropdown>
                    </Col>
                    <Col lg={3}> 
                    <NavDropdown title="Ordenar" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                        Another action
                    </NavDropdown.Item>
                    {/* muestra la line horizontal */}
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                        Something else here
                    </NavDropdown.Item>
                </NavDropdown>
                    </Col>
                </Row>
            </Col>
            <Col lg={6} >
                <Row className="align-items-center">
                    <Col lg={6} className="d-flex justify-content-end" > 
                        <NavDropdown title="Marca" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                            Another action
                        </NavDropdown.Item>
                        {/* muestra la line horizontal */}
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                            Something else here
                        </NavDropdown.Item>
                        </NavDropdown>
                    </Col>
                    <Col  lg={6} className=" d-flex justify-content-end ">
                        <span className='me-2 cursor-pointer'>
                            <i className="fa fa-th-large fa-2x " aria-hidden="true"></i>
                        </span>
                        <span className='cursor-pointer'>
                            <i className="fa fa-bars fa-2x " aria-hidden="true"></i>
                        </span>
                    </Col>
                    
                </Row>
            </Col>

        </Row>
        </Col>
       
    </Row>
    )
}