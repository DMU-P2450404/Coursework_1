//This is a shortcut. Rather than attach the same event to multiple elements manually we define the elements we want to attach the event to, in this case all the a elements inside figcaption and loop through them attacking the handler function to the onclick event for each link.
let anchors = document.querySelectorAll('figcaption a');
let links = [...anchors];

for (let i=0; i<links.length; i++) {
  links[i].onclick = handler;
}

//define the handler function that we've attached the anchors to in the page
//1. Prevents the user's click on a link from engaging the default behaviour as long as the user is running JavaScript. It will no longer take the user directly to the referenced .mp4 file
//2. Looks at the file name referenced in the clicked link's href attribute
//3. Splits the file name and captures everything before the last full stop to give us the path and name of the file without the extention. Assumming the file names are correct and consistently using .mp4 and .webm files
//4. Finds the <video> element and removes its poster image
//5. Create a node list of the source children elements
//6. Assign the ogg version of the video to the first child, the webm version of the video to the second child and the mp4 version to the thrid child of the source elements
//7. Load the video
//8.Play the video
function handler(e) {
  e.preventDefault();  //step 1
  let videotarget = this.getAttribute("href"); //step 2
  let filename = videotarget.substr(0, videotarget.lastIndexOf('.')); //step 3
  let video = document.getElementById("video"); //step 4
  video.removeAttribute("poster"); //step 4
  let source = document.querySelectorAll("#video_player video source"); //step 5
  source[0].src = filename + ".ogv"; //step 6
  source[1].src = filename + ".webm"; //step 6
  source[2].src = filename + ".mp4"; //step 6
  video.load(); //step 7
  video.play(); //step 8
}
