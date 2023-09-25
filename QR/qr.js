const wrapper=document.querySelector(".wrapper"),
qrInput=wrapper.querySelector(".form input"),
generateBtn=wrapper.querySelector(".form button"),
qrImg=wrapper.querySelector(".qr-code img");

let prValue;

generateBtn.addEventListener("click",()=>{
    let qrValue=qrInput.value.trim();
    if(!qrValue||prValue===qrValue)return;
    prValue=qrValue;
    generateBtn.innerText="Generatibng QR Code..";
    qrImg.src=`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    qrImg.addEventListener("load",()=>{
        wrapper.classList.add("active");
        generateBtn.innerText="Generate QR Code";
    });
});

qrInput.addEventListener("Keyup",()=>{
    if(!qrInput.value.trim()){
        wrapper.classList.remove("active");
        prValue="";
    }
});