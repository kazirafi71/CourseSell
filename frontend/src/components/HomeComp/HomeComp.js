import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomeComp = () => {
  const [courses, setCourses] = useState("");
  useEffect(() => {
    Axios.get("/api/courses/")
      .then((result) => {
        setCourses(result.data);
        // console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Container>
        <Row>
          <h2 className="text-center py-4">Courses</h2>
          {courses
            ? courses?.map((item, index) => {
                return (
                  <Col className="p-2" key={index} lg={4} md={3}>
                    <Card style={{ height: "480px" }}>
                      <Card.Img
                        style={{
                          width: "100%",
                          height: "200px",
                          objectFit: "cover",
                        }}
                        variant="top"
                        src={item.thumbnail}
                      />
                      <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>{item.description.slice(0, 100)}</Card.Text>
                        {item.discount > 0 && (
                          <p>Save : {(item.discount * 100) / item.price} %</p>
                        )}

                        <b className="me-2">{item.price - item.discount} Tk</b>
                        {item.discount > 0 && <del>{item.price} Tk</del>}
                      </Card.Body>
                      <Card.Footer className="text-muted">
                        <Row>
                          <Col md={6} className="text-center">
                            <p className="">Enroll Now</p>
                          </Col>
                          <Col md={6} className="text-center">
                            <Link
                              className=""
                              to={`/course-details/${item.slug}`}
                            >
                              View Details
                            </Link>
                          </Col>
                        </Row>
                      </Card.Footer>
                    </Card>
                  </Col>
                );
              })
            : "Loading.."}
        </Row>
      </Container>
    </div>
  );
};

export default HomeComp;
