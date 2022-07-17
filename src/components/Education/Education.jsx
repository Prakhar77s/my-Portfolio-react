import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import "./Education.css";

function Education() {
  return (
    <div name="education" className="experience">
      <div className="sm:text-center pb-8 pl-4">
        <p className="text-4xl font-bold inline">Education</p>
      </div>
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2012"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Holy Paradise High School (Maharashtra State Board)
          </h3>
          <p>SECONDARY SCHOOL CERTIFICATE</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2012 - 2014"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            BKS High School and Junior College (Maharashtra State Board)
          </h3>

          <p>HIGHER SECONDARY CERTIFICATE</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2014 - 2017"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            St. Gonsalo Garcia College (Mumbai University)
          </h3>

          <p>BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2017 - 2020"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Thakur Institute of Management Studies, Career Development &
            Research(Mumbai University)
          </h3>

          <p>MASTER OF COMPUTER APPLICATIONS</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Education;
