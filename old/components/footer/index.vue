<template>
    <div>
        <div class="bg-midnight py-8">
            <div class="container px-4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
                <FooterWidget heading="Chat box">
                    <!-- BEGIN CBOX - www.cbox.ws - v4.3 -->
                    <div id="cboxdiv" style="position: relative; margin: 0 auto; width: 100%; font-size: 0; line-height: 0;">
                    <div style="position: relative; height: 208px; overflow: auto; overflow-y: auto; -webkit-overflow-scrolling: touch; border: 0px solid;"><iframe src="https://www7.cbox.ws/box/?boxid=548557&boxtag=kb26kf&sec=main" title="Cbox chat log" marginheight="0" marginwidth="0" frameborder="0" width="100%" height="100%" scrolling="auto" allowtransparency="yes" name="cboxmain7-548557" id="cboxmain7-548557"></iframe></div>
                    <div style="position: relative; height: 92px; overflow: hidden; border: 0px solid; border-top: 0px;"><iframe src="https://www7.cbox.ws/box/?boxid=548557&boxtag=kb26kf&sec=form" title="Cbox chat form" allow="autoplay" marginheight="0" marginwidth="0" frameborder="0" width="100%" height="100%" scrolling="no" allowtransparency="yes" name="cboxform7-548557" id="cboxform7-548557"></iframe></div>
                    </div>
                    <!-- END CBOX -->	
                </FooterWidget>
                <FooterWidget heading="Affiliates" class="Footer-widget">
                    <FooterAffiliates />
                    <div class="flex flex-col gap-4 font-forum text-xl px-6">
                        <NuxtLink to="/about/links" class="text-ice underline">Link exchange ></NuxtLink>
                        <NuxtLink to="/about/credits" class="text-ice underline">Credits & Resources ></NuxtLink>
                    </div>
                </FooterWidget>
            </div>
            
        </div>
        <FooterSocial />
    </div>
</template>