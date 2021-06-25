Webcam.set({
    width:360,
    height:250,
    image_format:"png",
   png_quality:90
    
});
var camera=document.getElementById("camera");
Webcam.attach(camera);
//https://teachablemachine.withgoogle.com/models/uKADapkk6/ 
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='captured_id'src='"+data_uri+"'>";

    });
 
}
console.log("ml5 version",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/uKADapkk6/model.json",modelLoaded);
function modelLoaded(){
    console.log("model is loaded");
}
function check(){
    var img=document.getElementById("captured_id");
    classifier.classify(img,gotResult);
}
function gotResult(error,results){
if(error){
    console.error(error);
}
else{
    console.log(results);
    document.getElementById("result_object_name").innerHTML=results[0].label;
    document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(3);
}
}