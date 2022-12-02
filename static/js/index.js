
// Checking User System Info
function osfunction ()
{
    let os = navigator.userAgent;
    let finalOs="";
    let arch = ""
    if (os.search('Windows')!==-1){
        finalOs="Windows";
    }
    else if (os.search('Mac')!==-1){
        finalOs="MacOS / IOS";
    }
    else if (os.search('Android')!==-1){
        finalOs="Android";
    }
    else if (os.search('X11')!==-1 && !(os.search('Linux')!==-1)){
        finalOs="UNIX";
    }
    else if (os.search('Linux')!==-1 && os.search('X11')!==-1){
        finalOs="Linux"
    }

    if(os.search("x86_64")){
        arch = "x86_64"
    }
    else if(os.search("amd64")){
        arch = "amd64"
    }
    else if(os.search("x86_32")){
        arch = "x86_32"
    }

    
   document.getElementById('client_OS_info').innerText = "Operating System detected is " +finalOs+ "." ;
   document.getElementById('client_arch_info').innerText = "System Architecture detected is " +arch+ "." ;
   console.log(finalOs)
   console.log(arch)

}
osfunction();