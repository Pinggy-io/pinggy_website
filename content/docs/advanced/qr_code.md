---
 title: "Display qr code in terminal"
 date: 2023-08-07T14:15:25+05:30
 draft: false
---


# QR-Code

You can get the QR code for your tunnel URL within the terminal by pressing **`c`** or **`u`**.

To hide the qr code again, just press **`Esc`**. 

## ASCII
In normal mode just press `c` to display QR-Code.
It will display QR-Code for the tunnel url in ASCII format like this.

You can use the **arrow keys** to change the QR Code for different urls. Press `Esc` to return to normal page.


{{< figure src="../../../doc_img/qrcode/qr-ascii2.webp" alt="Press c to display QR-Code in ASCII" >}}


This QR Code is printed using ASCII characters. Thus, it is compatible with most of the terminals. However, it might not fit into small terminal windows. For a more compact QR Code, use the unicode version.

## Unicode
To get a compact QR Code, we have option for unicode QR. Press `u` to print QR-Code drawn using unicode.

{{< figure src="../../../doc_img/qrcode/qr-unicode2.webp" alt="Press u to display QR-Code in unicode" >}}


Unicode QR-Code can easily fit inside a 80x25 terminal. However, the terminal must have support for unicode character-set. Otherwise the result is unpredictable.

# Always show QR-Code
Pinggy also supports keywords `qr` and `aqr` while creating tunnel to print QR in the TUI like the following.

{{< figure src="../../../doc_img/qrcode/qr-inline-unicode2.webp" alt="Always display QR-Code in TUI" >}}


This keyword needs to be passed with the username as following
```
ssh -p 443 -R0:localhost:8000 qr@a.pinggy.io
```
If one wants to pass other keyword like a token, add it with a `+` like this
```
ssh -p 443 -R0:localhost:8000 qr+token@a.pinggy.io
```

Here `qr` would produce QR code in unicode while `aqr` would produce QR code in ASCII.