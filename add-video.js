const videoForm = document.getElementById('videoForm');

const requestAddVideo = (e) => {
  e.preventDefault();
  const videoData = {
    author_name: e.target.author_name.value,
    author_email: e.target.author_email.value,
    topic_title: e.target.topic_title.value,
    target_level: e.target.target_level.value,
    topic_details: e.target.topic_details.value,
    expected_result: e.target.expected_result.value
  }
  ajaxRequest('POST', ' http://localhost:7777/video-request', videoData)
}
videoForm.addEventListener('submit', requestAddVideo);

const ajaxRequest = (method, url, data) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status == 200){
        console.log(xhr.responseText);
      }
  };
  xhr.open(method, url);
  xhr.send(data ? JSON.stringify(data) : '');
}
