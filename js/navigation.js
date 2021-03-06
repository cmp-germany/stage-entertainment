const FriendRequestsModule = require('../react/FriendRequests/FriendRequestsModule');
const React                = require('react');
const ReactDOM             = require('react-dom');
const $                    = require('jquery');
const NotificationModule   = require('../react/Notification/NotificationModule');

$( document ).ready(function(){
  initReactComponents();
});

function initReactComponents() {

  ////////////////////////////// FRIEND REQUESTS //////////////////////////////
  window.reactFriendRequestsApp = ReactDOM.render(
    <FriendRequestsModule
      userId={window.currentUserId}
      currentLanguage={window.currentLanguage}
      webserviceBase={window.serverpaths.webserviceBase}
      servicePaths={window.serverpaths.friendRequestsPaths}
      pageSize="5"
    />,
    document.getElementById('FriendRequestsModuleRoot')
  );

  ////////////////////////////// NOTIFICATIONS ////////////////////////////////
  $('body').append('<div id="NotificationModuleRoot" />');
  window.reactNotificationApp = ReactDOM.render(
    <NotificationModule />,
    document.getElementById('NotificationModuleRoot')
  );
}
