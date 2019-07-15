class UI {
  constructor() {
    this.profile = document.getElementById( "profile" );
  }

  showProfile( user ) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" class="btn btn-primary btn-block mb-3" target="_blank">View Profile</a>
          </div>
          <div class="col-md-9" >
            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success">Followers: ${user.followers}</span>
            <span class="badge badge-info">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="page-heading mb-3>Latest Repos</div>
      <div id="repos"></div>
    `;
  }

  // Clear the profile when nothing is entered into the text input
  clearProfile () {
    this.profile.innerHTML = "";
  }

  // Display a "user not found" alert when a username that doesn't exist is entered into the text input
  showAlert ( message, className ) {
    // Clear any initial alert 
    this.clearAlert();

    const div = document.createElement( "div" );
    div.className = className;
    div.appendChild( document.createTextNode( message ) );
    const container = document.querySelector(".searchContainer");
    const search = document.querySelector( ".search" );
    container.insertBefore( div, search );

    // Remove alert after three seconds
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  clearAlert () {
    const alert = document.querySelector( ".alert" );
    if (alert) {
      alert.remove();
    }
  }
}
