import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl,link }) => {
  return (
    
    <Col size={4} sm={12} md={6}>
      <div className="proj-imgbx" >
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br/><br/><br/>
          <a href={link}>Source Code
          </a>
        </div>
      </div>
    </Col>
  )
}
