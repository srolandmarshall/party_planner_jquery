class Party{
  constructor(id, partyName, attendees, dishes, hostID, hostName, date){
    this.id = id;
    this.partyName = partyName;
    this.attendees = attendees;
    this.dishes = dishes;
    this.hostID = hostID;
    this.hostName = hostName;
    this.date = date
  }
  partyShortLink(){
    return `/parties/${this.id}/`
  }
  partyEditLink(){
    return `<a href="${this.partyShortLink()}edit">Edit ${this.partyName}</a>`
  }
  partyLink(){
    return `<a href="${this.partyShortLink()}">${this.partyName}</a>`
  }
  partyTimeLink(){
    return `<a href="${this.partyShortLink()}">${this.partyName} - ${this.date}</a>`
  }
}
