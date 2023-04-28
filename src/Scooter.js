class Scooter{
 constructor(station) {
  this.station = station;
  this.user = null;
  this.serial = 0;
  this.serialNumber = this.serial + 1;
  this.charge = 100;
  this.isBroken = false;
 }
 rent(user) {
  if(this.charge >= 20 && this.isBroken === false) {
    this.station = null;
    this.user = user.username;
  } else {
    throw new Error("Error: Scooter needs to charge or needs repair")
  }
 }

 dock(station) {
  this.station = station;
  this.user = null;
 }
}


module.exports = Scooter
