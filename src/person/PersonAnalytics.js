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

  renderCollab() {
    return (
      <div className="box">
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

  renderChannelMentions() {
    return (
      <div className="box" >
          <div className="Box-title">
            Top Channel Mentions
          </div>
          <div className="collaborators">
            { this.renderChannelPersona("Bootcamp", 6) }
            { this.renderChannelPersona("FC - Extensibility", 14) }
            { this.renderChannelPersona("Web", 15) }
          </div>
      </div>
    );
  }

  renderChannelContribution() {
    return (
      <div className="box" >
        <div className="Box-title">
          Top Channel Contribution
        </div>
        <div className="collaborators">
          { this.renderChannelPersona("FC - Extensibility", 14) }
          { this.renderChannelPersona("Web", 15) }
        </div>
    </div>
    );
  }

  render() {
    return (
      <div className="PersonAnalytics">
        <header className="PersonAnalytics-header">
          <div className="PersonAnalytics-title">My Insights</div>
        </header>
         <div className="boxes">
            { this.renderCollab() }
            { this.renderChannelMentions() }
            { this.renderChannelContribution() }
        </div>
      </div>
    );
  }
}
