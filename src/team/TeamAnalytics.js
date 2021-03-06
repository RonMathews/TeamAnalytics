import React, { Component } from 'react';
import { Persona } from "office-ui-fabric-react/lib/Persona";
import './TeamAnalytics.css';
import DataService from '../Service/DataService';
const image = require("../MentionNoReply.PNG");
const image2 = require("../MostLiked.PNG");
const image3 = require("../MostLiked2.PNG");

export default class TeamAnalytics extends Component {

  constructor() {
    super();
    this.state = {
      isLoading: true,
      error: false,
      data: null
    };
  }

  static renderPersona(title, number, imageUrl) {
    return(
      <div className="collabDetails">
        <Persona
          primaryText={ title }
          imageUrl={ imageUrl }
          className="personaImage"/>
        <div className="collabNumber"> { number } </div>
      </div>
    );
  }

  static renderChannelPersona(title, number) {
    return(
      <div className="collabDetails">
        <Persona
          primaryText={ title }
          className="personaImage"
          imageInitials={ title[0] }/>
        <div className="collabNumber"> { number } </div>
      </div>
    )
  }

  static renderCollab(data) {
    var details = data.map(function(element) {
      return TeamAnalytics.renderPersona(element.name, element.count);
    }, this);
    return (
      <div className="boxCollab">
          <div className="Box-title">
            Top Collaborators - Conversations
          </div>
          <div className="collaborators">
            {
              details
            }
            </div>
      </div>
    );
  }

  static renderChannels(data) {
    var details = data.map(function(element) {
      return TeamAnalytics.renderChannelPersona(element.name, element.count);
    }, this);
    return (
      <div className="boxChannel" >
          <div className="Box-title">
            Top Channels
          </div>
          <div className="collaborators">
            {
              details
            }
          </div>
      </div>
    );
  }

  componentDidMount() {
    let that = this;
    DataService.sendHttpRequest({
      method: "GET",
      url: "/team"
    }).then(function(data){
      that.setState({data: data, isLoading: false});
    }, 
    function(error){
      that.setState({error: true, isLoading: false});
    });
  }
  
  render() {
    let data = {
        topCollaborator: [
          {
            name: "Vishal Kumawat",
            count: 20
          }, 
          {
            name: "Pooja Talawadekar",
            count: 40
          },
          {
            name: "Sonal Priya",
            count: 10
          }
        ],
        topChannels: [
          {
            name: "Bootcamp",
            count: 63
          },
          {
            name: "FC  Extensibility",
            count: 44
          },
          {
            name: "Service",
            count: 42
          },
          {
            name: "Web",
            count: 15
          },
          {
            name: "FC  Phone Auth",
            count: 44
          },
          {
            name: "People Ops",
            count: 15
          },
          
        ]
      }

    if(this.state.isLoading) {
      return (
        <h2> Loading... </h2>
      );
    }

    if(this.state.error) {
      return (
        <div className="TeamAnalytics">
          <header className="TeamAnalytics-header">
            <div className="TeamAnalytics-title">Team Insights</div>
          </header>
          <div className="boxes">
              { TeamAnalytics.renderCollab(data.topCollaborator) }
              { TeamAnalytics.renderChannels(data.topChannels) }
          </div>
          <div className="boxes">
            <div className="boxImage">
              <div>
                <div className="Box-title">
                  @ Mentions Without Replies
                  <img src={ image } className="imageWidth"/>
                </div>
                <div className="Box-title">
                  Most liked Messages
                  <img src={ image2 } className="imageWidth"/>
                  <img src={ image3 } className="imageWidth"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="TeamAnalytics">
        <header className="TeamAnalytics-header">
          <div className="TeamAnalytics-title">Team Insights</div>
        </header>
         <div className="boxes">
            { TeamAnalytics.renderCollab(this.state.data.topCollaborator) }
            { TeamAnalytics.renderChannels(this.state.data.topChannels) }
        </div>
        <div className="boxes">
          <div className="boxImage">
            <div>
              <div className="Box-title">
                @ Mentions Without Replies
                <img src={ image } className="imageWidth"/>
              </div>
              <div className="Box-title">
                Most liked Messages
                <img src={ image2 } className="imageWidth"/>
                <img src={ image3 } className="imageWidth"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
