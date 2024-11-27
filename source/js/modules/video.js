const container = document.querySelector('[data-overlay="about"]');
const button = container.querySelector('[data-button="about"]');
const poster = container.querySelector('picture');

function initVideo() {
  if (document.body.contains(container && button && poster)) {
    button.addEventListener('click', (evt) => {
      evt.preventDefault();
      poster.style.display = 'none';
      button.style.display = 'none';
      createVideo();
    });
  }
}

function createVideo() {
  const video = document.createElement('iframe');

  video.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw?si=r9-N1Qv6OPNCIn4c');
  video.setAttribute('title', 'Бесплатные интерактивные онлайн-курсы');
  video.setAttribute('frameborder', '0');
  video.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
  video.setAttribute('allowfullscreen', '');
  video.setAttribute('loading', 'lazy');
  container.append(video);
}

export {initVideo};
