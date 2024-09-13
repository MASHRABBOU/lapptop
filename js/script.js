function addVideo() {
    const videoURL = document.getElementById('videoURL').value;
    if (videoURL) {
        const videoList = document.getElementById('videoList');

        // Create new list item
        const li = document.createElement('li');

        // Create video element
        const video = document.createElement('video');
        video.src = videoURL;
        video.controls = true;
        video.width = 320;

        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.innerText = 'Remove';
        removeButton.onclick = function () {
            videoList.removeChild(li);
        };

        // Append video and remove button to the list item
        li.appendChild(video);
        li.appendChild(removeButton);

        // Append list item to the video list
        videoList.appendChild(li);

        // Clear input field
        document.getElementById('videoURL').value = '';
    } else {
        alert('Please enter a video URL');
    }
}
