const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Prompt a user to select media stream, pass to the video element, then play.
async function selectMediaStream() {
  try {
    //To get live stream
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    // assigning source attribute to videoElement
    videoElement.srcObject = mediaStream;
    //returns true when it has finish loading
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (e) {
    //Catch Error here
  }
}

// On load
selectMediaStream();

button.addEventListener("click", () => {});
