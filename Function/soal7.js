function detectDevice() {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    return {
        isMobile,
        isDesktop: !isMobile
    };
}


console.log(detectDevice());
