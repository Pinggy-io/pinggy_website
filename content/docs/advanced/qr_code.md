---
 title: "Display qr code in terminal"
 date: 2023-08-07T14:15:25+05:30
 draft: true
---


# QR-Code
## ASCII
Pinggy now started displaying qrCode in the terminal. In normal mode just press `c` to display QR-Code. It will display QR-Code for the redirection url in ASCII format like this.
<div class="row mb-4">
<div class="col">
<img style="max-width: 48em; margin: 0 auto; display: block;" src="/doc_img/qrcode/qr-ascii.png" alt="ASCII QR Code">
</div>
</div>

One can use the use **arrow keys** to change the QR Code for different url. Press `Esc` to return to normal page.

This is QR Code is design using ASCII character thus it is compatible with most of the terminal. However, it is very big, thus takes up lot of space.

## Unicode
To get a smaller size QR Code, we have option for unicode qr. Press `u` to print QR-Code drawn using unicode like following.
<div class="row mb-4">
<div class="col">
<img style="max-width: 48em; margin: 0 auto; display: block;" src="/doc_img/qrcode/qr-unicode.png" alt="Unicode QR Code">
</div>
</div>
Unicode QR-Code can easily fit inside 80x25 terminal. However, terminal must have support for Unicode character-set. Otherwise result it unpredictable.

# Allways show QR-Code
Pinggy also supports keywords `qr` and `aqr` while creating tunnel to print QR in the TUI like following.
<div class="row mb-4">
<div class="col">
<img style="max-width: 48em; margin: 0 auto; display: block;" src="/doc_img/qrcode/qr-inline-unicode.png" alt="Unicode QR Code">
</div>
</div>

This keyword needs to be passed with the username as following
```
ssh -p443 -R0:localhost:8000 qr@a.pinggy.io
```
If one wants to pass other keyword like token add it with a `+` like this
```
ssh -p443 -R0:localhost:8000 qr+token@a.pinggy.io
```

Here `qr` would produce QR code in unicode while `aqr` would produce QR code in ASCII.