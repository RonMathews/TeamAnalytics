import React, { Component } from 'react';
import { Persona } from "office-ui-fabric-react/lib/Persona";
import './TeamAnalytics.css';

export default class TeamAnalytics extends Component {

  renderPersona(title, number, imageUrl) {
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

  renderChannelPersona(title, number) {
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

  renderCollab(data) {
    var details = data.map(function(element) {
      return this.renderPersona(element.name, element.count);
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

  renderChannels(data) {
    var details = data.map(function(element) {
      return this.renderChannelPersona(element.name, element.count);
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
          name: "FC - Extensibility",
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
          name: "FC - Phone Auth",
          count: 44
        },
        {
          name: "People Ops",
          count: 15
        },
        
      ]
    }
    return (
      <div className="TeamAnalytics">
        <header className="TeamAnalytics-header">
          <div className="TeamAnalytics-title">Team Insights</div>
        </header>
         <div className="boxes">
            { this.renderCollab(data.topCollaborator) }
            { this.renderChannels(data.topChannels) }
        </div>
      </div>
    );
  }
}
