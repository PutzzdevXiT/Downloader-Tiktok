function toggleMenu(){
  menuBox.classList.toggle("show");
}

async function process(){
  const v=input.value.trim();
  if(!v) return;

  if(v.includes("tiktok.com")){
    downloadURL(v);
  }else{
    searchTikTok(v);
  }
}

/* DOWNLOAD URL */
async function downloadURL(url){
  loading.style.display="block";
  try{
    const r=await fetch(`https://api.nvidiabotz.xyz/download/tiktok?url=${encodeURIComponent(url)}`);
    const j=await r.json();
    thumb.src=j.result.thumbnail;
    title.textContent=j.result.title;
    hd.href=j.result.video_hd;
    sd.href=j.result.video_sd;
    mp3.href=j.result.mp3;
    popup.style.display="flex";
  }catch{
    alert("Gagal download");
  }
  loading.style.display="none";
}

/* SEARCH USERNAME / KEYWORD */
async function searchTikTok(q){
  loading.style.display="block";
  feed.innerHTML="";
  try{
    const r=await fetch(`https://api.elrayyxml.web.id/api/search/tiktok?q=${encodeURIComponent(q)}`);
    const j=await r.json();
    j.result.forEach(v=>{
      const d=document.createElement("div");
      d.className="video";
      d.innerHTML=`
        <video src="${v.data}" controls loop></video>
        <button onclick="downloadURL('${v.data}')">Download</button>
      `;
      feed.appendChild(d);
    });
  }catch{
    alert("Gagal search");
  }
  loading.style.display="none";
}