let portinput = document.getElementById('portform');
let  portcommand = document.getElementById('portcommand');

portinput.addEventListener('keyup', function(){
    portcommand.value = "ssh -p 7878 -R0:localhost:" +  (portinput.value || "8000") + " b.pinggy.io";
        
})

function copytoclipboard() {
    // Get the text field
    portcommand.select(); 
    portcommand.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(portcommand.value);
}


os_arch_to_link = {
    "windows": {
        "amd64": "pinggy_windows_amd64",
        "x86_32": "pinggy_windows_x86"
    },
    "linux": {
        "amd64": "pinggy_linux_amd64",
        "x86_32": "pinggy_linux_x86"
    },
    "mac": {
        "amd64": "pinggy_mac_amd64",
    }
}



// Checking User System Info
function osfunction ()
{
    let os = navigator.userAgent;
    let finalOs="";
    let arch = ""
    if (os.search('Windows')!==-1){
        finalOs="windows";
    }
    else if (os.search('Mac')!==-1){
        finalOs="mac";
    }
    else if (os.search('Android')!==-1){
        finalOs="android";
    }
    else if (os.search('X11')!==-1 && !(os.search('Linux')!==-1)){
        finalOs="unix";
    }
    else if (os.search('Linux')!==-1 && os.search('X11')!==-1){
        finalOs="linux"
    }

    if(os.search("x86_64")){
        arch = "amd64"
    }
    else if(os.search("amd64")){
        arch = "amd64"
    }
    else if(os.search("x86_32")){
        arch = "x86_32"
    }

    download_link = os_arch_to_link[finalOs][arch]

    if(download_link){
        document.getElementById('downloadlinktext').innerText = download_link;
        document.getElementById('downloadlink').setAttribute("href", "/downloads/" + download_link);
    } else {
        document.getElementById('downloadlink').setAttribute("href", "/downloads");
    }

}

osfunction();


