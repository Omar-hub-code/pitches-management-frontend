import Script from "next/script";


export default function JsFiles(){
    return (
        <>
            <Script src="/js/jquery-3.3.1.min.js" strategy="beforeInteractive" />
            <Script src="js/bootstrap.min.js" strategy="beforeInteractive"  />
            <Script src="js/jquery.magnific-popup.min.js" strategy="beforeInteractive"  />
            <Script src="/js/mixitup.min.js" strategy="beforeInteractive"  />
            <Script src="/js/jquery.slicknav.js" strategy="beforeInteractive"  />

            <Script src="/js/owl.carousel.min.js"  strategy="beforeInteractive" />
            <Script src="/js/main.js"  />

        </>
    )
}