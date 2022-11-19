//https://teachablemachine.withgoogle.com/models/aRpLjbh7h///

Webcam.set(
    {
        width: 340,
        height:290,
        image_format: 'png',
        png_quality: 90
    }
);

camera = document.getElementById("camera")
Webcam.attach('#camera');

function click_picture() {
Webcam.snap(function(data_uri)
{
 document.getElementById("result").innerHTML = '<img id="picture" src="'+ data_uri +'">';
}
);
}

console.log("ml5version: " , ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/aRpLjbh7h/model.json' , modelLoaded );

function modelLoaded() {
console.log("Model loaded.")
}