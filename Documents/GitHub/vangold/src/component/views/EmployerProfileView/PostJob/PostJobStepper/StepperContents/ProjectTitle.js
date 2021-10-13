import { Button } from "@material-ui/core";
import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import ProjectDescrip from "./ProjectDescrip";

const ProjectTitle = ({ postJobData, setPostJobData, handleNext, showDescrip, setShowDescrip }) => {
    const [value, setValue] = useState('');

    const submitHandler = () => {
        setPostJobData({ ...postJobData, projectTitle: value });
        setShowDescrip(true);
    }

    return (
        <>
            {!showDescrip ? (
                <>
                    <Container>
                        <Row>
                            <Col xs={12} lg={10} className='ps-lg-4 mb-5'>
                                <h1 className="project-title">Give your job post a title</h1>
                                <div>

                                    <Form id="myform" onSubmit={submitHandler}>
                                        <Form.Group>
                                            <Form.Control required className="form-control postjob__title-input" size='lg' onChange={(e) => setValue(e.target.value)} />
                                        </Form.Group>
                                    </Form>
                                </div>
                                <div>
                                    <p>Example titles</p>
                                    <ul>
                                        <li>Build a crypto app that allows users to buy, sell or trade bitcoin</li>
                                        <li>Build a logistics app that allows users to send goods to their customers and loved ones</li>
                                        <li>Build an e-commerce website where people can buy goods</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <Container fluid>
                    <div className='d-flex postButtons-box justify-content-end mt-5'>
                        <Button
                            type="submit"
                            form="myform"
                            className='submit-btn'
                        >
                            Continue
                        </Button>
                    </div>
                    </Container>
                </>
            ) : <ProjectDescrip postJobData={postJobData} setPostJobData={setPostJobData} handleNext={handleNext} setShowDescrip={setShowDescrip} />}
        </>
    );
}

export default ProjectTitle;