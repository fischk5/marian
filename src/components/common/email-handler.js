const axios = require('axios');

exports.submitBugReport = async (message, contactInfo) => {
  if (['prd', 'production'].includes(process.env.NODE_ENV)) {
    var apiHost = 'https://tetheros.com/api' // Unhappy with this not being relative but whatever
  } else {
    apiHost = 'http://localhost:3000'
  }
  axios({
    method: 'post',
    url: '/app/feedback/bug',
    baseURL: apiHost,
    data: {
      message: message,
      contact: contactInfo
    }
  })
  .then(function (response) {
    if (response.status === 200) {
      console.log('ok');
      return true;
    } else {
      console.log('email error - check logs');
      return false;
    }
  }).catch(function(error) {
    console.log(error)
  });
}

exports.submitFeatureIdea = async (message, contactInfo) => {
  if (['prd', 'production'].includes(process.env.NODE_ENV)) {
    var apiHost = 'https://tetheros.com/api' // Unhappy with this not being relative but whatever
  } else {
    apiHost = 'http://localhost:3000'
  }
  axios({
    method: 'post',
    url: '/app/feedback/feature',
    baseURL: apiHost,
    data: {
      message: message,
      contact: contactInfo
    }
  })
  .then(function (response) {
    if (response.status === 200) {
      console.log('ok');
      return true;
    } else {
      console.log('email error - check logs');
      return false;
    }
  }).catch(function(error) {
    console.log(error)
  });
}