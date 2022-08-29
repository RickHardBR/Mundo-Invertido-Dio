export default function switchTheme(){
  window.addEventListener('click', function(){
    const audio = document.getElementById('music');
    audio.play();
    audio.volume = 0.2;
  })
  
  document.body.classList.toggle('dark-theme')
  document.body.classList.toggle('light-theme')

  const theme = document.body.classList[0];
  const music = theme === 'light-theme' ? 'normal-world.mpeg' : 'inverted-world.mpeg';

  const audio=document.getElementById('music');
  audio.src = `assets/musics/${music}`
  audio.play();
  audio.volume = 0.2;
}

