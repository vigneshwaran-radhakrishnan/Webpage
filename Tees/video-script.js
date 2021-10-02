var video = document.getElementById("videoBackground");
var btn = document.getElementById("actionVideo");

function videoCallToAction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = '<svg aria-hidden="" class="cta-video-button" title="design icon"><use title="play-3" xlink:href="../_assets/images/sprites/svg-sprite-custom-symbol.svg#design--play-3" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg>';
  } else {
    video.pause();
    btn.innerHTML = '<svg aria-hidden="" class="cta-video-button" title="design icon"><use title="pause-3" xlink:href="../_assets/images/sprites/svg-sprite-custom-symbol.svg#design--pause-3" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg>';
  }
}