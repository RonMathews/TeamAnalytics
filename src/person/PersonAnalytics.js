import React, { Component } from 'react';
import { Persona } from "office-ui-fabric-react/lib/Persona";
import './PersonAnalytics.css';
import DataService from '../Service/DataService';

export default class PersonAnalytics extends Component {

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

  componentDidMount() {
    let that = this;
    DataService.sendHttpRequest({
      method: "GET",
      url: "/personal"
    }).then(function(data){
      that.setState({data: data, isLoading: false});
    }, 
    function(error){
      that.setState({error: true, isLoading: false});
    });
  }
  

  render() {
    if(this.state.isLoading) {
      return (
        <h2> Loading... </h2>
      );
    }

    if(this.state.error) {
      return (
        <h2> Something went wrong </h2>
      )
    }

    return (
      <div className="PersonAnalytics">
        <header className="PersonAnalytics-header">
          <div className="PersonAnalytics-title">My Insights</div>
        </header>
         <div className="boxes">
            { PersonAnalytics.renderCollab(this.state.data.topCollaborator) }
            { PersonAnalytics.renderChannelMentions(this.state.data.topMentions) }
            { PersonAnalytics.renderChannelContribution(this.state.data.topContributions) }
        </div>
      </div>
    );
  }
}