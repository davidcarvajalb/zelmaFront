<script>
    import mailSliderShape1 from '$lib/assets/main-slider-two-shape-1.png';
    import mailSliderShape2 from '$lib/assets/main-slider-two-shape-2.png';

    /** @type {import('./$types').LayoutData} */
    export let data;
    // @ts-ignore
    let cms = data.cmsData;
    console.log(cms);
</script>

<!--Main Slider Start-->
<section class="main-slider-two clearfix" id="home">
    <div class="swiper-container thm-swiper__slider">
        <div class="swiper-wrapper">
            {#each cms.Banner as banner}
                <div class="swiper-slide">
                    <div class="image-layer-two"
                        style="background-image: url({mailSliderShape1});"></div>
                    <!-- /.image-layer -->

                    <div class="main-slider-two-shape-1">
                        <img src={mailSliderShape1} alt="">
                    </div>
                    <div class="main-slider-two-shape-2">
                        <img src={mailSliderShape2} alt="">
                    </div>

                    <div class="container">
                        <div class="row">
                            <div class="col-xl-12">
                                <div class="main-slider-two__content">
                                    <h2 class="main-slider-two__title">{banner.text}</h2>
                                    <div class="main-slider-two__btn-box">
                                        <a href="#about" class="thm-btn main-slider-two__btn">Discover more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>
<!--Main Slider End-->

{#if cms.section1.Published == true}
<!--About Two Start-->
<section class="about-two" id={cms.section1.anchor}>
    <div class="container">
        <div class="row">
            <div class="col-xl-6">
                <div class="about-two__left">
                    <div class="about-two__img-box  wow slideInLeft" data-wow-delay="100ms"
                        data-wow-duration="2500ms">
                        <div class="about-two__img">
                            <img src="assets/images/resources/about-two-img-1.jpg" alt="">
                        </div>
                        <div class="about-two__left-title-box">
                            <h3 class="about-two__left-title">{cms.section1.ImageLegend}</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-6">
                <div class="about-one__right">
                    <div class="section-title text-left">
                        <span class="section-title__tagline">{cms.section1.Title}</span>
                        <h2 class="section-title__title">{cms.section1.SubTitle}</h2>
                    </div>
                    <p class="about-one__text">{cms.section1.Description}</p>
                    <ul class="list-unstyled about-one__points">
                        <li>
                            <div class="text">
                                <h5><a href="donate-now.html">Donate now</a></h5>
                                <p>{cms.section1.FirstLinkDescription}</p>
                            </div>
                        </li>
                        <li>
                            <div class="text">
                                <h5><a href="become-volunteer.html">Spread the word</a></h5>
                                <p>{cms.section1.SecondLinkDescription}</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
<!--About Two End-->
{/if}

{#if cms.SectionTwo.Published == true}
<section class="feature-one">
    <div class="container">
        <div class="row">
            <div class="col-xl-12 col-lg-12  wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                <div class="feature-one__single">
                    <div class="feature-one__top">
                        <div class="feature-one__top-inner">
                            <div class="feature-one__top-title-box">
                                <h3 class="feature-one__top-title"><a href="become-volunteer.html">{cms.SectionTwo.Title}</a></h3>
                            </div>
                        </div>
                    </div>
                    <p class="feature-one__text">{cms.SectionTwo.Description}</p>
                    <a href="become-volunteer.html" class="thm-btn feature-one__btn">View details</a>
                </div>
            </div>
        </div>
    </div>
</section>
<!--Feature One End-->
{/if}

{#if cms.SectionThree.Published == true}
    <!--Help Start-->
    <section class="help" id="our-program">
        <div class="help-bg jarallax" data-jarallax data-speed="0.2" data-imgPosition="50% 0%"
            style="background-image: url(assets/images/backgrounds/help-bg.jpg);"></div>
        <div class="help-shape-1" style="background-image: url(assets/images/shapes/help-shape-1.png);"></div>
        <div class="container">
            <div class="row">
                <!--Help Single Start-->
                <div class="col-xl-12 col-lg-12 wow fadeInUp" data-wow-delay="100ms">
                    <h3 class="help__main_title">{cms.SectionThree.Title}</h3>
                </div>
                <div class="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay="100ms">
                    <div class="help__single">
                        <div class="help__single-inner">
                            <div class="help__content">
                                <h4 class="help__title"><a href="become-volunteer.html">Donate now</a></h4>
                                <p class="help__text">{cms.SectionThree.FirstColDescription}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!--Help Single End-->
                <!--Help Single Start-->
                <div class="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay="300ms">
                    <div class="help__single">
                        <div class="help__single-inner">
                            <div class="help__content">
                                <h4 class="help__title"><a href="donate-now.html">Spread the word</a></h4>
                                <p class="help__text">{cms.SectionThree.SecondColDescription}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!--Help Single End-->
            </div>
        </div>
    </section>
    <!--Help End-->
{/if}