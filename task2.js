
        function data()
        {
        var a=document.getElementById("n0").value;
        var b=document.getElementById("n1").value;
        var c=document.getElementById("n2").value;
        var d=document.getElementById("n3").value;
        var e=document.getElementById("n4").value;
        var f=document.getElementById("n5").value;
        if(a==""||b==""||c==""||d==""||e==""||f=="")
    {
        alert("All Fields Are Mandatory");
        return false;
    
    }
     else if(c.length<10||c.length>10){
        alert("Number should be of 10 digit! Please enter valid number")
        return false;

     }
     
     else if(e!=f)
     {
        alert("Please enter same password");
        return false;
     }
    else{
        true;
    }
}