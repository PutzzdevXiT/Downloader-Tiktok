const popup = document.getElementById("popup");
const loading = document.getElementById("loading");

async function download(){
  const url = document.getElementById("url").value;
  if(!url) return alert("Masukkan link TikTok");

  loading.style.display="block";

  try{
    const r = await fetch(
      `https://api.nvidiabotz.xyz/download/tiktok?url=${encodeURIComponent(url)}`
    );
    const j = await r.json();
    if(!j.status) throw "error";

    thumb.src = j.result.thumbnail;
    title.textContent = j.result.title;
    hd.href = j.result.video_hd;
    sd.href = j.result.video_sd;
    mp3.href = j.result.mp3;

    popup.style.display="flex";
  }catch(e){
    alert("Gagal ambil data");
  }

  loading.style.display="none";
}

/* PARTICLES */
const c=document.getElementById("particles"),x=c.getContext("2d");
let w,h,p=[];
function resize(){w=c.width=innerWidth;h=c.height=innerHeight}
addEventListener("resize",resize);resize();

for(let i=0;i<70;i++)p.push({x:Math.random()*w,y:Math.random()*h,s:Math.random()+.3});

(function anim(){
  x.clearRect(0,0,w,h);
  p.forEach(o=>{
    x.fillStyle="#00eaff";
    x.shadowBlur=15;
    x.beginPath();
    x.arc(o.x,o.y,1.5,0,Math.PI*2);
    x.fill();
    o.y-=o.s;
    if(o.y<0)o.y=h;
  });
  requestAnimationFrame(anim);
})();