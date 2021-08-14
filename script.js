const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Prompt a user to select media stream, pass to the video element, then play.
async function selectMediaStream() {
  try {
    //To get live stream
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
  } catch (e) {
    //Catch Error here
  }
}

// On load
selectMediaStream();
