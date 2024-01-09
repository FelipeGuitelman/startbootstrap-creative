'use strict'

require('dotenv').config()

const galery = document.querySelector('.galery')
const feed = document.querySelector('.contenedor-galery')
const next = document.querySelector('#next')
const prev = document.querySelector('#prev')

const token = process.env.IG_TOKEN

const url = `https://graph.instagram.com/me/media?fields=thumbnail_url,media_url,caption,permalink&limit=20&access_token=IGQWRPdV91ZAXZAzUkdWTG13VFZAWOGlwVEVsSFQwSnVCdVdlQkhQamhSVDRqNUlZAbnBMYzdTdzNCMWZAnSnYwREZATSzRzSEZAYRVh2WjluT3NHZAS1QbllqNHpEUWlhZAWRyd2lEQW5pNWhPNXM2aHdSYmFDcXRpTVdhb2cZD`

fetch(url)
.then(res => res.json)
.then(data => CrearHtml(data.data))

function CrearHtml(data){
  for (const img of data) {
    galery.innerHTML += `
    <div class="image-overflow">
      <img loading="lazy" src="${img.media_url}" alt="">
      <div class="opacity-hover">
        <a href="${img.permalink}" class="caption">
          <p>
            ${img.caption.slice(0 , 100)}
          </p>
        </a>
      </div>
    </div>
    `;
  }
}

next.addEventListener('clcick', moveGalery);
prev.addEventListener('clcick', moveGalery);

function moveGalery (e){
  if (e.targe.id === 'next' || e.target.parentElement.id === 'next') {
    feed.scrollLeft += feed.offsetWidth;
  } else {
    feed.scrollLeft -= feed.offsetWidth;
  }
}