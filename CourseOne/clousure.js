(function(){
    console.log("Run father function");
    document.getElementById('btn').addEventListener("click",function(){
        console.log("You did click me");
    });

    setTimeout(function(){  //Function 2
        console.log(function_name("Julian"));
    },2000);

    function function_name(name){  //Function 3
        function construct(){  //Function 4
            name = "Carlos";    // Modify father's attribute in all context
            return "Hello "+name;
        }
        message = construct(); // It is necessary to function_name work
        console.log(name);
        return message;
    }

})();