String.prototype.trim = function() {
  return this.replace(/^\s+/, '').replace(/\s+$/, '');
};

function validPhoneNumber(phoneNumber){
  //TODO: Return whether phoneNumber is in the proper form
  return phoneNumber.match(/^\(\d{3}\)\s\d{3}-\d{4}$/);
}

console.log('    kia    '.trim());