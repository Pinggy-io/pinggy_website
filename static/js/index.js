// ---------- try it yourself form ------

$('#techselect').on('change', function() {
    var label = $('option:selected', this).data('label');
    var command = $('option:selected', this).data('command');
    var port = $('option:selected', this).data('port');

    if(label){
        if(label != $('#tryityourselflabel').text()){
            $('#tryityourselflabel').animate({'opacity': 0}, 400, function(){
                $(this).text(label).animate({'opacity': 1}, 400);    
            });
        }
        $('#tryityourselflabel').show('slow');
    }
    else {
        $('#tryityourselflabel').hide('slow');
    }

    if(command){
        $('#tryityourselfprecommand').val(command);
        
        $('#tryityourselfprecommand').css("visibility", "visible");
        $('#copybutton2').css("visibility", "visible");

        $('#tryityourselfprecommand').animate({opacity: 1}, 1200);
        $('#copybutton2').animate({opacity: 1}, 1200);
    
    } else {
        $('#tryityourselfprecommand').animate({opacity: 0}, 1200);
        $('#copybutton2').animate({opacity: 0}, 1200);
        $('#tryityourselfprecommand').css("visibility", "hidden");
        $('#copybutton2').css("visibility", "hidden");
    }

    $('#portform').val(port).trigger("input");;
    
});


// ---------- ------------

$( "#portform" ).on("input", function() {
    $( "#portcommand" ).val("ssh -p 443 -R0:localhost:" +  ($( "#portform" ).val() || "8000") + " a.pinggy.io");
});

function copytoclipboard(element, inputselector, amplitudemsg) {
    var portcommand = $( inputselector )[0];
    // Get the text field
    portcommand.select(); 
    portcommand.setSelectionRange(0, 99999); // For mobile devices
     // Copy the text inside the text field
    navigator.clipboard.writeText(portcommand.value);
    var amplitudeEvent = "SSH url copy button clicked";
    var eventProperties = {
        "url": portcommand.value
    };
    amplitude.getInstance().logEvent(amplitudeEvent, eventProperties);
    $(element).children("i").removeClass('bi-clipboard');
    $(element).children("i").addClass('bi-check');
    setTimeout(
        function(element) 
        {
          $(element).children("i").removeClass('bi-check');
          $(element).children("i").addClass('bi-clipboard');
        }, 1000, element);
    

}


// Download button system auto detect:


os_arch_to_link = {
    "windows": {
        "amd64": "pinggy_windows_386.exe"    
    },
    "linux": {
        "amd64": "pinggy_linux_amd64",
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
    else if(os.search("arm")){
        arch = "arm"
    }

    var download_link;
    if(os_arch_to_link[finalOs]){
            download_link = os_arch_to_link[finalOs][arch];
    }

    if(download_link){
        document.getElementById('downloadlinktext').innerText = download_link;
        document.getElementById('downloadlink').setAttribute("href", "https://s3.ap-south-1.amazonaws.com/public.pinggy.binaries/" + download_link);
    } else {
        document.getElementById('downloadlink').setAttribute("href", "/download");
    }

}

osfunction();


