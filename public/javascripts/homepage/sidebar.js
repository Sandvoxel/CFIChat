function OpenCloseSidebar(){
    document.getElementById("navbar-button").classList.toggle("active");
    document.getElementById("nav-background").classList.toggle("active");


    SidebarUpdate(document.getElementById("navbar-button").classList.contains("active"));
}


function SidebarUpdate(active){
    if(active){
        document.getElementById("nav-listing").style.height = "272px";
        document.getElementById("nav-listing").style.width = "201.609px";
        //document.getElementById("nav-listing").style.lineHeight = "1.8em";
    }else{
        document.getElementById("nav-listing").style.height = "0px";
        document.getElementById("nav-listing").style.width = "0px"; 
        //document.getElementById("nav-listing").style.lineHeight = "0em";

    }

}
