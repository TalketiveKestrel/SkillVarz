let images = sessionStorage.getItem(name) + "/";

if (sessionStorage.getItem(name) == 'container') {
    console.log('pass')
    pass
}
else {
    console.log(images)
    
    document.getElementById('img1').src = images + '/1.jpg'
    document.getElementById('img2').src = images + '/2.jpg'
    document.getElementById('img3').src = images + '/3.jpg'
    document.getElementById('img4').src = images + '/4.jpg'
    document.getElementById('img5').src = images + '/5.jpg'
}