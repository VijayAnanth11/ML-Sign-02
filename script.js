var array = [
    {
        id: "1",
        name: 'Check'
    },
]

//show table
function showtable(curarray) {

    document.getElementById('mytable').innerHTML = ``;

    if (curarray == "") {
        document.getElementById("error").innerHTML = `<span>Not Found!</span>`
    }
    else {
        document.getElementById("error").innerHTML = "";

        for (var i = 0; i < curarray.length; i++) {
            document.getElementById("mytable").innerHTML += `
            <div style="background-color: blue; color: white;margin-left:5px; border-radius:10px;cursor: pointer;">
            <p style="margin:10px">
            ${curarray[i].name} 
            </p>
            </div>
            `
        }
    }

}

//calling show table
showtable(array);

//take filtered data array
var newarray2 = [];

//for searching 2
document.getElementById("new-word").addEventListener("keyup",function(){
    
    var search = this.value.toLowerCase();

    newarray2 = array.filter(function (val) {
        if(val.id.includes(search) || val.name.includes(search)){
            var newobj = {id : val.id , name : val.name};
            return newobj;
        }
    })

    showtable(newarray2);
})