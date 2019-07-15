class GitHub {
  constructor() {
    this.client_id = "4954a4f9bd95632284af";
    this.client_secret = "2ca36c70f6c9b95be82d2d8413627fc576175e66";
  }

  async getUser ( user ) {
    const profileResponse = await fetch( `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}` );
    const profile = await profileResponse.json();
    return {
      profile
    }
  }
}
