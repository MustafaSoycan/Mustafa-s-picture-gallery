let images = ['img/img1.jpg', 'img/img2.jpg', 'img/img3.jpg', 'img/img4.jpg', 'img/img5.jpg', 'img/img6.jpg',
    'img/img7.jpg', 'img/img8.jpg', 'img/img9.jpg', 'img/img10.jpg', 'img/img11.jpg', 'img/img12.jpg', 'img/img13.jpg',
    'img/img14.jpg', 'img/img15.jpg', 'img/img16.jpg', 'img/img17.jpg', 'img/img18.jpg', 'img/img19.jpg', 'img/img20.jpg',
    'img/img21.jpg', 'img/img22.jpg', 'img/img23.jpg', 'img/img24.jpg', 'img/img25.jpg', 'img/img26.jpg', 'img/img27.jpg',
    'img/img28.jpg', 'img/img29.jpg', 'img/img30.jpg', 'img/img31.jpg', 'img/img32.jpg', 'img/img33.jpg', 'img/img34.jpg',
    'img/img35.jpg', 'img/img36.jpg', 'img/img37.jpg', 'img/img38.jpg', 'img/img39.jpg', 'img/img40.jpg']




function load() {
    for (let i = 0; i < images.length; i++) {
        document.getElementById('imgcontainer').innerHTML +=

            `<div class="imgbox" id="imgbox" onclick="openImage(${i})">  <img src="${images[i]}"> </div>`;
    }
}




function openImage(i) {
    document.getElementById('imgbox').classList.remove('d-none');
    document.getElementById('content').innerHTML = '';
    document.getElementById('content').innerHTML =

        `<div id="content">

                <div class="imgcontainer" id="imgcontainer">
                    <div class="openImage" id="imgbox"> 
                    <button onclick="closeImage()" class="button"> Zurück</button> 
                    
                    <img onclick="lastImage(${i})" class="arrow-left" src="icon/arrowleft.png">

                    <img class="boximage" src="${images[i]}"> 

                    <img onclick="nextImage(${i})" class="arrow-right" src="icon/arrowright.png">
                    </div>
                </div>
        </div>`;
}



function closeImage() {
    document.getElementById('imgbox').classList.add('d-none');
    document.getElementById('content').innerHTML = '';
    document.getElementById('content').innerHTML = 
    `<div class="headline">
    <h1>Photo Gallery <br>
        <span>By Mustafa Soycan</span>
    </h1>
    <div class="banner"> </div>
    <div class="imgcontainer" id="imgcontainer">
    </div>
    `;

    load();
}



function nextImage(i){
    i++; 

    if ( i == 40) {
        i = 0;
    }

    openImage(i);

    }



function lastImage(i) {
    i--;

    if ( i == -1) {
        i = 39;
    }

    openImage(i);

}