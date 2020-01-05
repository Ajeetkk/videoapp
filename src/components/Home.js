import React, { Component } from 'react';
import { Player } from 'video-react';
import { Button, Form, Image } from 'react-bootstrap';
import { Container, Row, Col } from 'react-grid-system';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Switch from '@material-ui/core/Switch';
import WifiIcon from '@material-ui/icons/Wifi';
import BluetoothIcon from '@material-ui/icons/Bluetooth';
import './home.css';
import { Input } from '@material-ui/core';
// const useStyles = makeStyles(theme => ({
//     root: {
//       padding: '2px 4px',
//       display: 'flex',
//       alignItems: 'center',
//       width: 400,
//     },
//     input: {
//       marginLeft: theme.spacing(1),
//       flex: 1,
//     },
//     iconButton: {
//       padding: 10,
//     },
//     divider: {
//       height: 28,
//       margin: 4,
//     },
//   }));
export default class PlayerExample extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      checked: ['wifi'],
      playerSource: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
      inputVideoUrl: 'http://www.w3schools.com/html/mov_bbb.mp4',
      useStyles: {
        root: {
          padding: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          width: 400,
        },
        input: {
          marginLeft: 1,
          flex: 1,
        },
        iconButton: {
          padding: 10,
        },
        divider: {
          height: 28,
          margin: 4,
        },
      }
    };

    // this.handleValueChange = this.handleValueChange.bind(this);
    // this.updatePlayerInfo = this.updatePlayerInfo.bind(this);
  }

  handleToggle = value => () => {
    const currentIndex = this.state.checked.indexOf(value);
    const newChecked = [...this.state.checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({ checked: newChecked });
  };
  //   componentDidUpdate(prevProps, prevState) {
  //     if (this.state.playerSource !== prevState.playerSource) {
  //       this.player.load();
  //     }
  //   }

  //   handleValueChange(e) {
  //     const { value } = e.target;
  //     this.setState({
  //       inputVideoUrl: value
  //     });
  //   }

  //   updatePlayerInfo() {
  //     const { inputVideoUrl } = this.state;
  //     this.setState({
  //       playerSource: inputVideoUrl
  //     });
  //   }

  render() {

    return (
      <div>
        <Container>
          <Row>
            <Col sm={8}><br />
              <video width="100%" controls>
                <source src={this.state.playerSource}></source>
              </video>
              <div style={{ border: "1px solid gray", marginTop: "-7px", borderBottom: "0px solid", padding: "10px" }}>
                hi
              </div>
              <div style={{
                border: "1px solid gray", padding: "10px",
                height: "103px"
              }}>
                hi
              </div>
              <div style={{
                background: "black", marginTop: "5px", display: "flex",
                justifyContent: "center"
              }}>
                <Image src="http://img.android.downloadatoz.com/upload/icon/c/o/m/com-droidapps-branch-birds-pro-lwp-1403521801.jpg" rounded height="100px" style={{ padding: "10px" }} />
                <Image src="http://img.android.downloadatoz.com/upload/icon/c/o/m/com-droidapps-branch-birds-pro-lwp-1403521801.jpg" rounded height="100px" style={{ padding: "10px" }} />

              </div>
              <br></br>
              <br />
            </Col>
            <Col sm={4}><br />

              <Form>

                <Form.Group>
                  <Form.Label for="inputVideoUrl">My Video</Form.Label>
                  <div style={{
                    border: "1px solid gray",
                    borderRadius: "5px",
                    padding: "10px"
                  }}>
                    <Paper style={{
                      boxShadow: "0px 0px",
                      border: "1px solid"
                    }}>
                      {/* <IconButton className={this.state.iconButton} aria-label="menu">
                        <MenuIcon />
                    </IconButton> */}
                      <IconButton type="submit" className={this.state.iconButton} aria-label="search" style={{
                        marginTop: "-8px",
                        position: "absolute"
                      }}>
                        <SearchIcon />
                      </IconButton>
                      <InputBase
                        className={this.state.input}
                        // placeholder="Search Google Maps"
                        inputProps={{ 'aria-label': 'search google maps' }}
                      />

                      {/* <Divider className={this.state.divider} orientation="vertical" />
                    <IconButton color="primary" className={this.state.iconButton} aria-label="directions">
                        <DirectionsIcon />
                    </IconButton> */}
                    </Paper>
                  </div>
                  {/* <input type="search"></input>
                    {/* <Form.Control
                       type="search"
                        name="inputVideoUrl"
                        id="inputVideoUrl"
                        value={this.state.inputVideoUrl}
                        onChange={this.handleValueChange}
                    /> 
                    </Form.Group>
                      <Form.Group>
                        <Button type="button" onClick={this.updatePlayerInfo}>
                            Update
                    </Button>*/}
                </Form.Group>
              </Form>

              <div >
                <div ></div>
              </div>

              <div className="scrollbar" id="style-5">
                <div className="force-overflow"></div>
                <Row style={{ border: "1px solid gray", display: "flex", justifyContent: "center", alignItems: "center", margin: "0px", padding: "10px" }}>
                  <Col sm={5} style={{ padding: "0px" }}>
                    <video height="100%" width="100%" controls>
                      <source src="{this.state.playerSource}"></source>
                    </video>
                  </Col>
                  <Col sm={4}>
                    <h6>trailer_hd.mp4</h6>
                  </Col>
                  <Col sm={3}>
                    <Form.Check
                      type="switch"
                      id="custom-switch"
                      label=""
                      style={{ textAlign: "right", color: "green" }}
                    />
                  </Col>
                </Row>
                <Row style={{ border: "1px solid gray", display: "flex", justifyContent: "center", alignItems: "center", margin: "0px", padding: "10px" }}>
                  <Col sm={5} style={{ padding: "0px" }}>
                    <video height="100%" width="100%" controls>
                      <source src="{this.state.playerSource}"></source>
                    </video>
                  </Col>
                  <Col sm={4}>
                    <h6>trailer_hd.mp4</h6>
                  </Col>
                  <Col sm={3}>
                    <Form.Check
                      type="switch"
                      id="custom-switch"
                      label=""
                      style={{ textAlign: "right", color: "green" }}
                    />
                  </Col>
                </Row>
                <Row style={{ border: "1px solid gray", display: "flex", justifyContent: "center", alignItems: "center", margin: "0px", padding: "10px" }}>
                  <Col sm={5} style={{ padding: "0px" }}>
                    <video height="100%" width="100%" controls>
                      <source src="{this.state.playerSource}"></source>
                    </video>
                  </Col>
                  <Col sm={4}>
                    <h6>trailer_hd.mp4</h6>
                  </Col>
                  <Col sm={3}>
                    <Form.Check
                      type="switch"
                      id="custom-switch"
                      label=""
                      style={{ textAlign: "right", color: "green" }}
                    />
                  </Col>
                </Row>
                <Row style={{ border: "1px solid gray", display: "flex", justifyContent: "center", alignItems: "center", margin: "0px", padding: "10px" }}>
                  <Col sm={5} style={{ padding: "0px" }}>
                    <video height="100%" width="100%" controls>
                      <source src="{this.state.playerSource}"></source>
                    </video>
                  </Col>
                  <Col sm={4}>
                    <h6>trailer_hd.mp4</h6>
                  </Col>
                  <Col sm={3}>
                    <Form.Check
                      type="switch"
                      id="custom-switch"
                      label=""
                      style={{ textAlign: "right", color: "green" }}
                    />
                  </Col>
                </Row><Row style={{ border: "1px solid gray", display: "flex", justifyContent: "center", alignItems: "center", margin: "0px", padding: "10px" }}>
                  <Col sm={5} style={{ padding: "0px" }}>
                    <video height="100%" width="100%" controls>
                      <source src="{this.state.playerSource}"></source>
                    </video>
                  </Col>
                  <Col sm={4}>
                    <h6>trailer_hd.mp4</h6>
                  </Col>
                  <Col sm={3}>
                    <Form.Check
                      type="switch"
                      id="custom-switch"
                      label=""
                      style={{ textAlign: "right", color: "green" }}
                    />
                  </Col>
                </Row>
                <Row style={{ border: "1px solid gray", display: "flex", justifyContent: "center", alignItems: "center", margin: "0px", padding: "10px" }}>
                  <Col sm={5} style={{ padding: "0px" }}>
                    <video height="100%" width="100%" controls>
                      <source src="{this.state.playerSource}"></source>
                    </video>
                  </Col>
                  <Col sm={4}>
                    <h6>trailer_hd.mp4</h6>
                  </Col>
                  <Col sm={3}>
                    <Form.Check
                      type="switch"
                      id="custom-switch"
                      label=""
                      style={{ textAlign: "right", color: "green" }}
                    />
                  </Col>
                </Row>
                {/* <Input type="button" value="hi"></Input> */}
                {/* <Row>
                <Col sm={12}>
                   <Input type="button">Create New Report Form...</Input>
                </Col>
              </Row> */}

              </div>
              <Row>
                <Col sm={12}>
                  <br />
                  <Button variant="success" style={{ float: "right" }}> Create new reoprt form</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
