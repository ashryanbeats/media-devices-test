const div = document.querySelector("#js-signal");
div.innerHTML = "JS is on";

navigator.mediaDevices.getUserMedia({audio: true})
  .then(function(stream) {
    console.log(stream)
  })
  .catch(function(err) {
    console.log(err)
  });
