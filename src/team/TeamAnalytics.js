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

  renderCollab() {
    return (
      <div className="boxCollab">
          <div className="Box-title">
            Top Collaborators - Conversations
          </div>
          <div className="collaborators">
            { this.renderPersona("Sharon Mathews", 20, "blob:https://teams.microsoft.com/1721a231-a76f-46b0-a80a-2ccc8c06b85a")}
            { this.renderPersona("Sonal Priya", 40)}
            { this.renderPersona("Megha Meshram", 10, "https://img.teams.skype.com/amer/beta/users/memeshra@microsoft.com/profilepicturev2?displayname=Megha Meshram&voidCache=true")}
          </div>
      </div>
    );
  }

  renderChannels() {
    return (
      <div className="boxChannel" >
          <div className="Box-title">
            Top Channels
          </div>
          <div className="collaborators">
            { this.renderChannelPersona("Bootcamp", 63) }
            { this.renderChannelPersona("FC - Extensibility", 44) }
            { this.renderChannelPersona("Web", 15) }
            { this.renderChannelPersona("People Ops", 10) }
            { this.renderChannelPersona("FC - Phone Auth", 44) }
            { this.renderChannelPersona("Service", 15) }
          </div>
      </div>
    );
  }

  render() {
    return (
      <div className="TeamAnalytics">
        <header className="TeamAnalytics-header">
          <div className="TeamAnalytics-title">Team Insights</div>
        </header>
         <div className="boxes">
            { this.renderCollab() }
            { this.renderChannels() }
        </div>
      </div>
    );
  }
}
