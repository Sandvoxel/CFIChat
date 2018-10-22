function OpenCloseSidebar(){
    document.getElementById("nav-menu-icon").classList.toggle("active");


    SidebarUpdate(document.getElementById("nav-menu-icon").classList.contains("active"));
}


function SidebarUpdate(active){
    if(active){
        //document.getElementById("nav-listing").style.height = "272px";
        document.getElementById("nav-listing").style.width = "201.609px";
    }else{
        //document.getElementById("nav-listing").style.height = "0px";
        document.getElementById("nav-listing").style.width = "0px"; 
    }

}
