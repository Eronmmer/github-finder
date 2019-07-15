// Initialize GitHub class
const github = new GitHub();

// Initialize UI Class
const ui = new UI();

const searchUser = document.getElementById( "searchUser" );

searchUser.addEventListener( "keyup", ( e ) => {
  const searchText = e.target.value;

  if ( /\S/.test( searchText ) ) {
    github.getUser( searchText ).then( ( data ) => {
      if ( data.profile.message === "Not Found" ) {
        // Display an alert
        ui.showAlert( "User not found", "alert alert-danger" );
      } else {
        // Show Profile
        ui.showProfile( data.profile );
      }
    } );
  } else {
    // Clear current profile 
    ui.clearProfile();
  }
} );
