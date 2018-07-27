import React, { Component } from 'react';
import { Persona } from "office-ui-fabric-react/lib/Persona";
import './PersonAnalytics.css';
import DataService from '../Service/DataService';

export default class PersonAnalytics extends Component {

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
      return PersonAnalytics.renderPersona(element.name, element.count);
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

  static renderChannelMentions(data) {
    var details = data.map(function(element) {
      return PersonAnalytics.renderChannelPersona(element.name, element.count);
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

  static renderChannelContribution(data) {
    var details = data.map(function(element) {
      return PersonAnalytics.renderChannelPersona(element.name, element.count);
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
    const url = "/personal";
    DataService.sendHttpRequest({
      method: "GET",
      url: url
  }).then(function(data){
    return (
      <div className="PersonAnalytics">
        <header className="PersonAnalytics-header">
          <div className="PersonAnalytics-title">My Insights</div>
        </header>
         <div className="boxes">
            { PersonAnalytics.renderCollab(data.topCollaborator) }
            { PersonAnalytics.renderChannelMentions(data.topMentions) }
            { PersonAnalytics.renderChannelContribution(data.topContributions) }
        </div>
      </div>
    );
  }, function(error)
  {
    return null;
  });

  return null;
}
}