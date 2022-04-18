import React, { useEffect, useState } from "react";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Axios from "axios";

const CourseDetailsComp = () => {
  const { courseSlug } = useParams();
  const [courseDetails, setCourseDetails] = useState();
  const [videoId, setVideoId] = useState("");

  useEffect(() => {
    Axios.get(`/api/course-details/${courseSlug}`)
      .then((result) => {
        setCourseDetails(result.data);

        setVideoId(result.data?.videos[0]?.video_id);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (!courseDetails) {
    return <div>Loading..</div>;
  }
  console.log(courseDetails);
  return (
    <div>
      <Container>
        <Row>
          <Col md={8}>
            <iframe
              style={{ width: "100%" }}
              height="400"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Col>
          <Col md={4}>
            <div className="" style={{ height: "400px", overflow: "scroll" }}>
              <ListGroup>
                {courseDetails &&
                  courseDetails?.videos?.map((item, index) => {
                    return (
                      <ListGroup.Item
                        onClick={() => setVideoId(item.video_id)}
                        style={{ cursor: "pointer" }}
                        key={index}
                      >
                        {item.title}
                      </ListGroup.Item>
                    );
                  })}
              </ListGroup>
            </div>
          </Col>
          <Card className="p-4 my-2">
            <h4>{courseDetails?.course_info?.name}</h4>
            <p>{courseDetails?.course_info?.description}</p>
          </Card>
          <Card className="p-4 my-2">
            <h4>Prerequisites</h4>
            <ListGroup as="ol" numbered>
              {courseDetails?.prerequisite?.map((item, index) => {
                return (
                  <ListGroup.Item as="li" key={index}>
                    {item.description}
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </Card>
          <Card className="p-4 my-2">
            <h4>Learning</h4>
            <ListGroup as="ol" numbered>
              {courseDetails?.learning?.map((item, index) => {
                return (
                  <ListGroup.Item as="li" key={index}>
                    {item.description}
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </Card>
        </Row>
      </Container>
    </div>
  );
};

export default CourseDetailsComp;
