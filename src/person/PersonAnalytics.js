import React, { Component } from 'react';
import { Persona } from "office-ui-fabric-react/lib/Persona";
import './PersonAnalytics.css';

export default class PersonAnalytics extends Component {

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

  renderChannelMentions(data) {
    var details = data.map(function(element) {
      return this.renderChannelPersona(element.name, element.count);
    }, this);
    return (
      <div className="box" >
          <div className="Box-title">
            Top Channel Mentions
          </div>
          <div className="collaborators">
            { 
              details
            }
          </div>
      </div>
    );
  }

  renderChannelContribution(data) {
    var details = data.map(function(element) {
      return this.renderChannelPersona(element.name, element.count);
    }, this);
    return (
      <div className="box" >
        <div className="Box-title">
          Top Channel Contribution
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
          name: "Sharon Mathews",
          count: 33
        }, 
        {
          name: "Ambili Edathodi",
          count: 30
        },
        {
          name: "Megha Meshram",
          count: 13
        },
        {
          name: "Sathya Swathy",
          count: 39
        }
      ],
      topMentions: [
        {
          name: "FC - Extensibility",
          count: 4
        },
        {
          name: "Service",
          count: 7
        },
        
        {
          name: "People Ops",
          count: 3
        },
      ],
      topContributions: [
        {
          name: "Bootcamp",
          count: 63
        },
        {
          name: "Web",
          count: 15
        },
        {
          name: "FC - Phone Auth",
          count: 44
        },
      ]
    }
    return (
      <div className="PersonAnalytics">
        <header className="PersonAnalytics-header">
          <div className="PersonAnalytics-title">My Insights</div>
        </header>
         <div className="boxes">
            { this.renderCollab(data.topCollaborator) }
            { this.renderChannelMentions(data.topMentions) }
            { this.renderChannelContribution(data.topContributions) }
        </div>
      </div>
    );
  }
}
