import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import '../styles/Experience.css';


function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#433f50">

        {/* Sixth-Form college:  A-Levels */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2017"
          iconStyle={{background: "#433f50", color: "#fff"}}
          icon={<SchoolIcon />}
          >
            <h3 className='vertical-timeline-element-title'>
              Notre Dame Catholic Sixth-Form College
            </h3>
            <p><b>A-Levels</b></p>
            <ul>
              <li><em>IT</em></li>
              <li><em>Sociology</em></li>
              <li><em>Media-studies</em></li>
            </ul>
        </VerticalTimelineElement>

        {/* University */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2023"
          iconStyle={{background: "#433f50", color: "#fff"}}
          icon={<SchoolIcon />}
          >
            <h3 className='vertical-timeline-element-title'>
              Leeds Beckett University
            </h3>
            <p><b>Bachelors Degree</b></p>
            <ul>
              <li><em>Computer Science</em></li>
            </ul>
        </VerticalTimelineElement>

        {/* IT Career-Switch - Software Trainee */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022 - 2023"
          iconStyle={{background: "#FFD580", color: "#fff"}}
          icon={<WorkIcon />}
          >
            <h3 className='vertical-timeline-element-title'>
              IT Career Switch
            </h3>
            <p><b>Software Developer Coding Traineeship | 1 Year Full Stack Program</b></p>
            <p><em>During the traineeship I had to demonstrate a very competent level
                   of the following programming languages and technical skills such as:</em></p>
            <ul>
              <li><em>HTML5, CSS3, JavaScript</em></li>
              <li><em>PHP, SQL, React, jQuery</em></li>
              <li><em>Java, Python, C#</em></li>
              <li><em>Command line Git, Github</em></li>
              <li><em>Remote API access</em></li>
            </ul>
        </VerticalTimelineElement>

        {/* Industrial placement */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Aug 2020 - Aug 2021"
          iconStyle={{background: "#FFD580", color: "#fff"}}
          icon={<WorkIcon />}
          >
            <h3 className='vertical-timeline-element-title'>
              Gough&Kelly | Industrial Placement
            </h3>
            <p><b>IT Technician Support</b></p>
            <ul>
              <li><em>Provide technical assistance and support for incoming queries and issues related to computer systems, software, and hardware</em></li>
              <li><em>Responding to queries either in person, phone, ticketing system or through email</em></li>
              <li><em>Diagnose and resolve technical issues in a timely manner</em></li>
              <li><em>Escalate unresolved issues to the appropriate IT personnel</em></li>
              <li><em>Diagnose printers, MS OS, Office 365, Active Directory, Networking</em></li>
            </ul>
        </VerticalTimelineElement>

        {/* TATA - IT Helpdesk Support */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="May 2023 - Jan 2024"
          iconStyle={{background: "#FFD580", color: "#fff"}}
          icon={<WorkIcon />}
          >
            <h3 className='vertical-timeline-element-title'>
              TATA IT Consultancy
            </h3>
            <p><b>IT Helpdesk Support</b></p>
            <ul>
              <li><em>Providing excellent customer service and positive experience for end-users</em></li>
              <li><em>Microsoft OS/Office 365/Exchange/Active Directory/Group Policy</em></li>
              <li><em>Basic Linux, Networking, Firewall and security principles</em></li>
              <li><em>Providing technical assistance and support to end-users either remotely or in person</em></li>
              <li><em>Identifying and resolving technical issues related to hardware, software and network</em></li>
              <li><em>Logging, tracking, and prioritising support requests using a ticketing system</em></li>
              <li><em>Maintain records of support requests, resolutions, and troubleshooting procedures</em></li>
              <li><em>Performing routine maintenance tasks such as software update and antivirus scans</em></li>
              <li><em>Collaborating with IT teams and departments to resolve complex issues and improve overall system performance</em></li>
              <li><em>Install, configure, and troubleshoot software and hardware components</em></li>
            </ul>
        </VerticalTimelineElement>



      </VerticalTimeline>
    </div>
  )
}

export default Experience;