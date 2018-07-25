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
      <div className="boxCollab">
          <div className="Box-title">
            Top Collaborators - Conversations
          </div>
          <div className="collaborators">
            { this.renderPersona("Sharon Mathews", 20, "https://api-eur1.staffhub.office.com/api/tenants/72f988bf-86f1-41af-91ab-2d7cd011db47/users/aaa25f48-5fa0-4781-9c53-7efdbaea241d/photo?mediaSize=thumbnail&Authorization=Bearer%20eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjdfWnVmMXR2a3dMeFlhSFMzcTZsVWpVWUlHdyIsImtpZCI6IjdfWnVmMXR2a3dMeFlhSFMzcTZsVWpVWUlHdyJ9.eyJhdWQiOiJodHRwczovL2FwaS5tYW5hZ2Uuc3RhZmZodWIub2ZmaWNlLmNvbSIsImlzcyI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0LzcyZjk4OGJmLTg2ZjEtNDFhZi05MWFiLTJkN2NkMDExZGI0Ny8iLCJpYXQiOjE1MzI1MTU0ODAsIm5iZiI6MTUzMjUxNTQ4MCwiZXhwIjoxNTMyNTE5MzgwLCJhY3IiOiIxIiwiYWlvIjoiQVVRQXUvOElBQUFBc0FpSWp4cXJrSWhWeUR1OFBqWnFKSVVQd0F0cjdjMVZkekFZcmV5M21ZWkJuTU52alFTcy9mVSt4b05BY3liazRVV1pkUks2NjhQMnFWeDM5bUJ4VUE9PSIsImFtciI6WyJyc2EiLCJtZmEiXSwiYXBwaWQiOiJhYTU4MDYxMi1jMzQyLTRhY2UtOTA1NS04ZWRlZTQzY2NiODkiLCJhcHBpZGFjciI6IjAiLCJkZXZpY2VpZCI6ImNiZmQzZDY1LTM1YmUtNGRhNC04ODc3LTFmMTk3MGRjYWZkYyIsImVfZXhwIjoyNjI4MDAsImZhbWlseV9uYW1lIjoiTWF0aGV3cyIsImdpdmVuX25hbWUiOiJTaGFyb24iLCJpcGFkZHIiOiIxNjcuMjIwLjI1NS4xMSIsIm5hbWUiOiJTaGFyb24gTWF0aGV3cyIsIm9pZCI6ImFhYTI1ZjQ4LTVmYTAtNDc4MS05YzUzLTdlZmRiYWVhMjQxZCIsIm9ucHJlbV9zaWQiOiJTLTEtNS0yMS0yMTQ2NzczMDg1LTkwMzM2MzI4NS03MTkzNDQ3MDctMjE4MDQ3MiIsInB1aWQiOiIxMDAzQkZGRDlEMjdDREE3Iiwic2NwIjoiTWVtYmVyLlJlYWRXcml0ZS5BbGwgU2hpZnQuUmVhZFdyaXRlLkFsbCBUZWFtLlJlYWRXcml0ZS5BbGwgVXNlci5SZWFkLkFsbCBVc2VyLlJlYWRXcml0ZS5BbGwgV2ViSG9vay5SZWFkV3JpdGUuQWxsIiwic3ViIjoiZnhrMUxINDV1cmdxM3RqNkdfWVVsaF8yd2ZQV0w4eUlJODdqTzM0Wm1oZyIsInRpZCI6IjcyZjk4OGJmLTg2ZjEtNDFhZi05MWFiLTJkN2NkMDExZGI0NyIsInVuaXF1ZV9uYW1lIjoic2htYXRoZXdAbWljcm9zb2Z0LmNvbSIsInVwbiI6InNobWF0aGV3QG1pY3Jvc29mdC5jb20iLCJ1dGkiOiJQLXhpTDFsMjhFRzRTdEZ2WHRzR0FBIiwidmVyIjoiMS4wIn0.kdiax48QXU6ZmJsLVRzO32Qi0_BIKuQ0RnaJ4i_MLvwHi8fMAUsAbAr_T4YIJd-7aUbBxtk8TNTV2a5Tz5DSEjn4KbD9TkJsk4xipEZac8TO7Q0S0_KjFFOR0je2-0-YFzyLKfFicKuNAZdetxVQOqK84ZD5yNwAB25Wy0WLLyTmbeYtVKGzTS1dm0KPlGvzdgj-ELTTpJGPp0yyVwc9A8kpUAD5CfEHijqO4_l1BZvxYd2Iv2sZt3EQ_nt11hyr0YzqRdcFBPjlM7sqRXxp8spCo_PbEk9MLhNeKQH0anyJhLdiWQ9p0fV4jus8NA_jNK8fYXyIxcQVi87-gW6tbg")}
            { this.renderPersona("Ambili Edathodi", 40, "https://api-eur1.staffhub.office.com/api/tenants/72f988bf-86f1-41af-91ab-2d7cd011db47/users/234e7b44-e3c9-446c-a66d-6376b2cc0a11/photo?mediaSize=thumbnail&Authorization=Bearer%20eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjdfWnVmMXR2a3dMeFlhSFMzcTZsVWpVWUlHdyIsImtpZCI6IjdfWnVmMXR2a3dMeFlhSFMzcTZsVWpVWUlHdyJ9.eyJhdWQiOiJodHRwczovL2FwaS5tYW5hZ2Uuc3RhZmZodWIub2ZmaWNlLmNvbSIsImlzcyI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0LzcyZjk4OGJmLTg2ZjEtNDFhZi05MWFiLTJkN2NkMDExZGI0Ny8iLCJpYXQiOjE1MzI1MTU0ODAsIm5iZiI6MTUzMjUxNTQ4MCwiZXhwIjoxNTMyNTE5MzgwLCJhY3IiOiIxIiwiYWlvIjoiQVVRQXUvOElBQUFBc0FpSWp4cXJrSWhWeUR1OFBqWnFKSVVQd0F0cjdjMVZkekFZcmV5M21ZWkJuTU52alFTcy9mVSt4b05BY3liazRVV1pkUks2NjhQMnFWeDM5bUJ4VUE9PSIsImFtciI6WyJyc2EiLCJtZmEiXSwiYXBwaWQiOiJhYTU4MDYxMi1jMzQyLTRhY2UtOTA1NS04ZWRlZTQzY2NiODkiLCJhcHBpZGFjciI6IjAiLCJkZXZpY2VpZCI6ImNiZmQzZDY1LTM1YmUtNGRhNC04ODc3LTFmMTk3MGRjYWZkYyIsImVfZXhwIjoyNjI4MDAsImZhbWlseV9uYW1lIjoiTWF0aGV3cyIsImdpdmVuX25hbWUiOiJTaGFyb24iLCJpcGFkZHIiOiIxNjcuMjIwLjI1NS4xMSIsIm5hbWUiOiJTaGFyb24gTWF0aGV3cyIsIm9pZCI6ImFhYTI1ZjQ4LTVmYTAtNDc4MS05YzUzLTdlZmRiYWVhMjQxZCIsIm9ucHJlbV9zaWQiOiJTLTEtNS0yMS0yMTQ2NzczMDg1LTkwMzM2MzI4NS03MTkzNDQ3MDctMjE4MDQ3MiIsInB1aWQiOiIxMDAzQkZGRDlEMjdDREE3Iiwic2NwIjoiTWVtYmVyLlJlYWRXcml0ZS5BbGwgU2hpZnQuUmVhZFdyaXRlLkFsbCBUZWFtLlJlYWRXcml0ZS5BbGwgVXNlci5SZWFkLkFsbCBVc2VyLlJlYWRXcml0ZS5BbGwgV2ViSG9vay5SZWFkV3JpdGUuQWxsIiwic3ViIjoiZnhrMUxINDV1cmdxM3RqNkdfWVVsaF8yd2ZQV0w4eUlJODdqTzM0Wm1oZyIsInRpZCI6IjcyZjk4OGJmLTg2ZjEtNDFhZi05MWFiLTJkN2NkMDExZGI0NyIsInVuaXF1ZV9uYW1lIjoic2htYXRoZXdAbWljcm9zb2Z0LmNvbSIsInVwbiI6InNobWF0aGV3QG1pY3Jvc29mdC5jb20iLCJ1dGkiOiJQLXhpTDFsMjhFRzRTdEZ2WHRzR0FBIiwidmVyIjoiMS4wIn0.kdiax48QXU6ZmJsLVRzO32Qi0_BIKuQ0RnaJ4i_MLvwHi8fMAUsAbAr_T4YIJd-7aUbBxtk8TNTV2a5Tz5DSEjn4KbD9TkJsk4xipEZac8TO7Q0S0_KjFFOR0je2-0-YFzyLKfFicKuNAZdetxVQOqK84ZD5yNwAB25Wy0WLLyTmbeYtVKGzTS1dm0KPlGvzdgj-ELTTpJGPp0yyVwc9A8kpUAD5CfEHijqO4_l1BZvxYd2Iv2sZt3EQ_nt11hyr0YzqRdcFBPjlM7sqRXxp8spCo_PbEk9MLhNeKQH0anyJhLdiWQ9p0fV4jus8NA_jNK8fYXyIxcQVi87-gW6tbg")}
            { this.renderPersona("Megha Meshram", 10, "https://api-eur1.staffhub.office.com/api/tenants/72f988bf-86f1-41af-91ab-2d7cd011db47/users/6d933d51-b4a9-42cb-acea-80bfae9071e0/photo?mediaSize=thumbnail&Authorization=Bearer%20eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjdfWnVmMXR2a3dMeFlhSFMzcTZsVWpVWUlHdyIsImtpZCI6IjdfWnVmMXR2a3dMeFlhSFMzcTZsVWpVWUlHdyJ9.eyJhdWQiOiJodHRwczovL2FwaS5tYW5hZ2Uuc3RhZmZodWIub2ZmaWNlLmNvbSIsImlzcyI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0LzcyZjk4OGJmLTg2ZjEtNDFhZi05MWFiLTJkN2NkMDExZGI0Ny8iLCJpYXQiOjE1MzI1MTU0ODAsIm5iZiI6MTUzMjUxNTQ4MCwiZXhwIjoxNTMyNTE5MzgwLCJhY3IiOiIxIiwiYWlvIjoiQVVRQXUvOElBQUFBc0FpSWp4cXJrSWhWeUR1OFBqWnFKSVVQd0F0cjdjMVZkekFZcmV5M21ZWkJuTU52alFTcy9mVSt4b05BY3liazRVV1pkUks2NjhQMnFWeDM5bUJ4VUE9PSIsImFtciI6WyJyc2EiLCJtZmEiXSwiYXBwaWQiOiJhYTU4MDYxMi1jMzQyLTRhY2UtOTA1NS04ZWRlZTQzY2NiODkiLCJhcHBpZGFjciI6IjAiLCJkZXZpY2VpZCI6ImNiZmQzZDY1LTM1YmUtNGRhNC04ODc3LTFmMTk3MGRjYWZkYyIsImVfZXhwIjoyNjI4MDAsImZhbWlseV9uYW1lIjoiTWF0aGV3cyIsImdpdmVuX25hbWUiOiJTaGFyb24iLCJpcGFkZHIiOiIxNjcuMjIwLjI1NS4xMSIsIm5hbWUiOiJTaGFyb24gTWF0aGV3cyIsIm9pZCI6ImFhYTI1ZjQ4LTVmYTAtNDc4MS05YzUzLTdlZmRiYWVhMjQxZCIsIm9ucHJlbV9zaWQiOiJTLTEtNS0yMS0yMTQ2NzczMDg1LTkwMzM2MzI4NS03MTkzNDQ3MDctMjE4MDQ3MiIsInB1aWQiOiIxMDAzQkZGRDlEMjdDREE3Iiwic2NwIjoiTWVtYmVyLlJlYWRXcml0ZS5BbGwgU2hpZnQuUmVhZFdyaXRlLkFsbCBUZWFtLlJlYWRXcml0ZS5BbGwgVXNlci5SZWFkLkFsbCBVc2VyLlJlYWRXcml0ZS5BbGwgV2ViSG9vay5SZWFkV3JpdGUuQWxsIiwic3ViIjoiZnhrMUxINDV1cmdxM3RqNkdfWVVsaF8yd2ZQV0w4eUlJODdqTzM0Wm1oZyIsInRpZCI6IjcyZjk4OGJmLTg2ZjEtNDFhZi05MWFiLTJkN2NkMDExZGI0NyIsInVuaXF1ZV9uYW1lIjoic2htYXRoZXdAbWljcm9zb2Z0LmNvbSIsInVwbiI6InNobWF0aGV3QG1pY3Jvc29mdC5jb20iLCJ1dGkiOiJQLXhpTDFsMjhFRzRTdEZ2WHRzR0FBIiwidmVyIjoiMS4wIn0.kdiax48QXU6ZmJsLVRzO32Qi0_BIKuQ0RnaJ4i_MLvwHi8fMAUsAbAr_T4YIJd-7aUbBxtk8TNTV2a5Tz5DSEjn4KbD9TkJsk4xipEZac8TO7Q0S0_KjFFOR0je2-0-YFzyLKfFicKuNAZdetxVQOqK84ZD5yNwAB25Wy0WLLyTmbeYtVKGzTS1dm0KPlGvzdgj-ELTTpJGPp0yyVwc9A8kpUAD5CfEHijqO4_l1BZvxYd2Iv2sZt3EQ_nt11hyr0YzqRdcFBPjlM7sqRXxp8spCo_PbEk9MLhNeKQH0anyJhLdiWQ9p0fV4jus8NA_jNK8fYXyIxcQVi87-gW6tbg")}
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
