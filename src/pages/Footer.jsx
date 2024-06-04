import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon} from 'mdb-react-ui-kit';

const Footer = () => {
    return (
        <MDBFooter style={{backgroundColor:"#1d56ab"}} className='text-center text-lg-start text-muted'> 
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom' style={{color:"white"}}>
                <div className='me-5 d-none d-lg-block'>
                    <span>Get connected with us on social networks:</span>
                </div>

                <div>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon color='secondary' fab icon='facebook' />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon color='secondary' fab icon='twitter' />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon color='secondary' fab icon='google' />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon color='secondary' fab icon='instagram' />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon color='secondary' fab icon='linkedin' />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon color='secondary' fab icon='github' />
                    </a>
                </div>
            </section>
            <section className=''>
                <MDBContainer className='text-center text-md-start mt-5' >
                    <MDBRow className='mt-3' style={{color: "white"}}>
                        <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                <MDBIcon color='secondary' icon='gem' className='me-3' />
                                Roshini Seva Sangham
                            </h6>
                            <p>
                            we believe in the power of inclusivity and the strength of diversity. 
                            Through your generosity and support, we can make a meaningful difference
                             in the lives of those facing physical challenges, ensuring they have the
                              resources and assistance they need to lead fulfilling lives.
                            </p>
                        </MDBCol>
                        <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                            <p>
                                <MDBIcon color='secondary' icon='home' className='me-2' />
                                Raidurg , Hyderabad-500045
                            </p>
                            <p>
                                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                                roshinisevasangham@gmail.com
                            </p>
                            <p>
                                <MDBIcon color='secondary' icon='phone' className='me-3' /> + 91 9874 563 121
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
            <div className='text-center p-4' style={{ backgroundColor: '#283338' , color:"white"}} >
                © 2024 Copyright:
                <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
                    roshinisevasangham.com
                </a>
            </div>
        </MDBFooter>
    );
}

export default Footer;
