<script>
    import defaultLogo from '$lib/assets/logo.png';
    import footerLogo from '$lib/assets/footer-logo.png';
    import siteFooterBg from '$lib/assets/site-footer-bg.jpg';

    /** @type {import('./$types').LayoutData} */
    export let data;
    // @ts-ignore
    let cms = data.cmsData;
</script>

<div class="page-wrapper">
    <header class="main-header">
        <nav class="main-menu">
            <div class="main-menu__wrapper">
                <div class="main-menu__wrapper-inner">
                    <div class="main-menu__left">
                        <div class="main-menu__logo">
                            <a href="index.html"><img src={defaultLogo} alt="Zelma"></a>
                        </div>
                    </div>
                    <div class="main-menu__right">
                        <div class="main-menu__right-top">
                            <div class="main-menu__right-top-left">
                                <div class="main-menu__volunteers">
                                    <div class="main-menu__volunteers-text-box">
                                        <p class="main-menu__volunteers-text">{cms.topCallToAction}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="main-menu__right-top-right">
                                <div class="main-menu__right-top-address">
                                    <ul class="list-unstyled main-menu__right-top-address-list">
                                        <li>
                                            <div class="icon">
                                                <span class="icon-message"></span>
                                            </div>
                                            <div class="content">
                                                <p>{cms.topMailText}</p>
                                                <h5><a href="mailto:{cms.siteMail}">{cms.siteMail}</a></h5>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="main-menu__right-bottom">
                            <div class="main-menu__main-menu-box">
                                <a href="#" class="mobile-nav__toggler"><i class="fa fa-bars"></i></a>
                                <ul class="main-menu__list">
                                    {#each cms.mainMenu as mainMenu}
                                        <li>
                                            <a href="{mainMenu.Link}">{mainMenu.Text}</a>
                                        </li>
                                    {/each}
                                </ul>
                            </div>
                            <div class="main-menu__main-menu-content-box">
                                <div class="main-menu__search-cat-btn-box">
                                    <div class="main-menu__btn-box">
                                        <a href="{cms.topButton.Link}" class="main-menu__btn">{cms.topButton.Text}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>

    <main class="main-wrapper">
        <slot />
    </main>

    <footer class="site-footer">
        <div class="site-footer-bg" style="background-image: url({siteFooterBg});">
        </div>
        <div class="site-footer__top">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                        <div class="footer-widget__column footer-widget__about">
                            <div class="footer-widget__about-logo">
                                <a href="index.html"><img src={footerLogo} alt=""></a>
                            </div>
                            <div class="footer-widget__about-text-box">
                                <p class="footer-widget__about-text">{cms.FooterDescription}</p></div>
                            <div class="footer-widget__btn">
                                <a href="{cms.footerButton.Link}">{cms.footerButton.Text}</a>
                            </div>
                        </div>
                    </div>
                    {#if cms.footerMenus.length > 0}
                        <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                            <div class="footer-widget__column footer-widget__links clearfix">
                                <h3 class="footer-widget__title">{cms.footerMenuTitle}</h3>
                                <ul class="footer-widget__links-list list-unstyled clearfix">
                                    {#each cms.footerMenus as footerMenu}
                                        <li>
                                            <a href="{footerMenu.Link}">{footerMenu.Text}</a>
                                        </li>
                                    {/each}
                                </ul>
                            </div>
                        </div>
                    {/if}
                    <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                        <div class="footer-widget__column footer-widget__contact">
                            <h3 class="footer-widget__title">{cms.footerContactTitle}</h3>
                            <ul class="list-unstyled footer-widget__contact-list">
                                <li>
                                    <div class="icon">
                                        <i class="fa fa-envelope"></i>
                                    </div>
                                    <div class="text">
                                        <p><a href="mailto:{cms.siteMail}">{cms.siteMail}</a></p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="site-footer__bottom">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="site-footer__bottom-inner">
                            <p class="site-footer__bottom-text">{cms.copyRight}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</div>