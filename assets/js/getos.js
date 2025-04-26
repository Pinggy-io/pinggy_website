function getOS() {
    const userAgent = navigator.userAgent.toLowerCase();
    let platform = "windows";

    if (userAgent.includes("win")) platform = "windows";
    else if (userAgent.includes("mac")) platform = "mac";
    else if (userAgent.includes("linux")) platform = "linux";
    else if (userAgent.includes("iphone") || userAgent.includes("ipad")) platform = "mac";
    else if (userAgent.includes("android")) platform = "linux";
    return platform;
}
