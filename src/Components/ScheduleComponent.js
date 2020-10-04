import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { getEvents } from '../Shared/gcal'
import { Container, Row, Col, Table,} from "reactstrap";
import Slide from 'react-reveal/Slide'

const localizer = momentLocalizer(moment);


class Schedule extends Component {
  constructor () {
      super()
      this.state = {
          events: []
      }
  }

  componentDidMount () {
      getEvents((events) => {
          this.setState({events})
      })
  }
  

  render() {
    console.log(this.state.events)
    return (
      <Slide left>
      <div>
      <Container>
      <Row>
      <Col className="text-center">
      <h2>Regular Schedule</h2>
      </Col>
      </Row>
      <Row>
      <Col md="12" >
        <Table bordered responsive className="weekCal">
          <thead>
            <tr>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
              <th>Saturday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Kung Fu Youths <br/>5:15PM-6:00PM </td>
              <td>Kung Fu Youths <br/>5:45PM-6:30PM</td>
              <td>Kung Fu Youths <br/>5:15PM-6:00PM </td>
              <td>Kung Fu Youths <br/>5:15PM-6:00PM </td>
              <td>Invitational Clsss<br/>6:30PM-8:30P</td>
              <td>Taiji (Tai Chi)<br/>9:00AM-10:00AM</td>
            </tr>
            <tr>
              <td>Kung Fu-White, Yellow, Green<br/>6:00PM-7:15PM</td>
              <td>Contemporary Wushu<br/>6:30PM-7:45PM</td>
              <td>Kung Fu-White, Yellow, Green<br/>6:00PM-7:15PM</td>
              <td>Contemporary Wushu<br/>6:30PM-7:45PM</td>
              <td></td>
              <td>Kung Fu White, Yellow, Green<br/>10:00AM-11:00AM</td>
            </tr>
            <tr>
              <td>Kung Fu-Blue and Up<br/>7:00PM-8:15PM</td>
              <td>Sanda<br/>7:45PM-9:00PM</td>
              <td>Taiji (Tai Chi) <br/>7:00-8:15</td>
              <td>Sanda<br/>7:45PM-9:00PM</td>
              <td></td>
              <td>Kung Fu-Blue and Up/Beginner Weapons<br/>11:00AM-12:00PM</td>
            </tr>
            <tr>
              <td>Taiji (Tai Chi) <br/>8:00-9:15</td>
              <td></td>
              <td>Kung Fu-Blue and Up<br/>8:00PM-9:15PM</td>
              <td></td>
              <td></td>
              <td>Kung Fu Advanced Weapons/Contemporary Wushu<br/>12:00PM-1:00PM</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>Sanda<br/>1:00PM-3:00PM</td>
            </tr>

          </tbody>
        </Table>
      </Col>
      </Row>
      </Container>
    <Container className = "specialEvents">
      <Row >
      <Col className="text-center">
        <h2>Special Events</h2>
        </Col>
      </Row>
      <Row>
      <Col md="6"> 
      <img className = "mr-5" height="350" object src="./assets/images/LionDance.jpg" alt="Kids Kung Fu" />
      </Col>
      <Col md="6">
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="agenda"
          views={['agenda']}
          events={this.state.events}
          //style={{ height: "100vh" }}
        />
        </Col>
        </Row>
      </Container>
      </div>
      </Slide>
    );
  }
}


export default Schedule