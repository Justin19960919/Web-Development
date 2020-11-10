// making our own node modules
exports.getDate = function(){

  const today = new Date();

  // formatting
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  
  // pass in options to format datestring
  return today.toLocaleDateString("en-US",options)
  

}

exports.getDay = function(){

  const today = new Date();

  // formatting
  const options = {
    weekday: "long",
  };
  
  // pass in options to format datestring

  return today.toLocaleDateString("en-US",options)
}

