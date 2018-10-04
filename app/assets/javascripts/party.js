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
}

Party.prototype.partyShortLink=function(){
  return `/parties/${this.id}/`
}

Party.prototype.partyEditLink=function(){
  return `<a href="${this.partyShortLink()}edit">Edit ${this.partyName}</a>`
}

Party.prototype.partyLink=function(){
  return `<a href="${this.partyShortLink()}">${this.partyName}</a>`
}
