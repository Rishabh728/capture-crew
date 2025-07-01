let API_KEY = '14M7xAqrXmGU3Ajj1EB9h33BcVhzv7n9kav98kkoWOaoMUKFZyVDj9JZ';

fetch('https://api.pexels.com/videos/search?query=nature&per_page=3', {
  method: 'GET',
  headers: {
    Authorization: API_KEY
  }
})
  .then(response => {
    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
    return response.json();
  })
  .then(res => {
    const videoArray = res.videos;
    const gallery = document.getElementById('videoGallery');

    videoArray.forEach((video, index) => {
      const videoBlock = document.createElement('div');
      videoBlock.className = 'video-block';

      const heading = document.createElement('h2');
      heading.textContent = `Video ${index + 1} • Duration: ${video.duration}s`;
      videoBlock.appendChild(heading);

      const videoRow = document.createElement('div');
      videoRow.className = 'video-row';

      video.video_files.forEach(file => {
        const wrapper = document.createElement('div');
        wrapper.className = 'video-wrapper';

        const videoTag = document.createElement('video');
        videoTag.src = file.link;
        videoTag.controls = true;
        wrapper.appendChild(videoTag);

        const label = document.createElement('div');
        label.className = 'quality-label';
        label.textContent = `Quality: ${file.quality} • ${file.width}x${file.height}`;
        wrapper.appendChild(label);

        videoRow.appendChild(wrapper);
      });

      videoBlock.appendChild(videoRow);
      gallery.appendChild(videoBlock);
    });
  })
  .catch(error => {
    console.error('ERROR:', error);
  });
