import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBriefcase } from '@fortawesome/free-solid-svg-icons';
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
          icon={<FontAwesomeIcon icon={faGraduationCap} />}
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
          icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className='vertical-timeline-element-title'>
              Leeds Beckett University
            </h3>
            <p><b>Bachelors Degree</b></p>
            <ul>
              <li><em>Computer Science</em></li>
            </ul>
        </VerticalTimelineElement>

        {/* Industrial placement */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Aug 2020 - Aug 2021"
          iconStyle={{background: "#FFD580", color: "#fff"}}
          icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className='vertical-timeline-element-title'>
              Gough&Kelly | Industrial Placement
            </h3>
            <p><b>IT Helpdesk Support</b></p>
            <ul>
              <li><em>Printets, Networking, Microsoft OS/Office 365/Exchange/Active Directory/Group Policy</em></li>
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


        {/* IT Career-Switch - Software Trainee */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022 - 2023"
          iconStyle={{background: "#FFD580", color: "#fff"}}
          icon={<FontAwesomeIcon icon={faBriefcase} />}
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







      </VerticalTimeline>
    </div>
  )
}

export default Experience;