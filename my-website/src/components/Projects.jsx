import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import bigbasket from "../assets/img/bigbasket.png";
import message from "../assets/img/message.png";
import blog from "../assets/img/blog.png";
import notes from "../assets/img/notes.png";
import auto from "../assets/img/auto.png";
import user from "../assets/img/user.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Blog Site",
      description: "An Custom build Blog Site which can host a whole lot of functionalities",
      imgUrl: blog,
      link: "https://github.com/hari-venkatesh/blog-site",
    },
    {
      title: "Message App",
      description: "An Responsive Messaging Application which can handle multiple users",
      imgUrl: message,
      link: "https://github.com/hari-venkatesh/NodeJS-Learning",
    },
  ];

  const projects1 = [
    {
      title: "Big Basket",
      description: "An Online Groceries cart which mimic's the Real Big Basket",
      imgUrl: bigbasket,
      link: "https://big-basket--beautiful-toffee-77ef06.netlify.app/",
    },
    {
      title: "Mini Notes",
      description: "A web application to keep track of user notes",
      imgUrl: notes,
      link: "https://github.com/hari-venkatesh/Mini-Notes",
    },
  ];

  const projects2 = [
    {
      title: "Authentication System",
      description: "A full-fledged web app that provides secured authentication and Keep track of loged in users",
      imgUrl: auto,
      link: "https://github.com/hari-venkatesh/Authentication-System",
    },
    {
      title: "User Management System",
      description: "A web app that performs all the CRUD operations which is IDEAL for all Bussiness",
      imgUrl: user,
      link: "https://github.com/hari-venkatesh/User-Management-Project",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={4}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>My main course of learning was madeup by whole bunch of Projects<br/>
                I used to Practice a lot by doing projects on Technologies which ever I learnt 
                which helped to shine in what ever I Do<br/>
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
