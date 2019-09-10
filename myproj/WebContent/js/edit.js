function validate() {
    var movie = document.forms["formValidate"]["title"].value;
    var gross = document.forms["formValidate"]["boxOffice"].value;
    var launch =  document.forms["formValidate"]["dateOfLaunch"].value;
    if(movie == ""){
        alert("Title is required");
    }else if(!gross.match(/^[0-9 ]+$/)){
        alert("Box Office should contain only numbers");
    }else if(launch == ""){
        alert("Date of Launch is required");
    }else if(gross==""){
        alert("Box Office is required");
    }else if(movie.length < 2 || movie.length > 100){
        alert("Title should have 2 to 100 characters");
    }else{
        
        location.replace("edit-movie-status.html");
    }
}
var title = document.title;
if (title === 'Edit') {
    validate();
} 
