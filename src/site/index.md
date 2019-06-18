---
subtitle: No homepage, yet.
date: 2018-08-22 12:24:50
layout: layouts/base.njk
---

<!-- Suggested layout containers -->
<section id="main-content-area" class role="main">




<section>
<div class="row">
<div class=" analytics-content-intro">
<div class="panel-pane pane-block pane-menu-block-4   secondary-menu pane-menu-block   secondary-menu">
<ul class="menu menu-tree-menu">
<li class="first leaf"><a href="#contact" title="Leadership and guidance structure">Contact someone</a></li>
<li class="leaf"><a href="#getto" title="Funding of EMBL-EBI">Get to EMBL-EBI</a></li>
<li class="leaf"><a href="#sleep" title="History of EMBL-EBI">Where to sleep</a></li>
</ul>
</div>
</div>
<div class="medium-12 columns analytics-content-intro">
<div class>
<div class="pane-content">
<div class="intro-unit">
<a name="contact"></a>
<h2>Get in touch</h2>
<p class="lead">We&#x2019;re a large organisation, so you&#x2019;ll get the best results if you make your request to the right place:</p>
<div class="row medium-up-4 large-up-5" data-equalizer data-equalize-on="medium">
<div class="column">
<div class>
<!-- <h3 style="font-size: 2.5rem;" class="research-background badge"><span class="icon icon-generic" data-icon="}"></span></h3> -->
<p data-equalizer-watch>Questions about how to use our data services?</p>
<a class="button readmore" href="//www.ebi.ac.uk/support">Online support</a>
</div>
</div>
<div class="column">
<div class>
<p data-equalizer-watch>Looking for a group, or member of our staff?</p>
<a class="button readmore" href="//www.ebi.ac.uk/about/people">People &amp; Groups</a>
</div>
</div>
<div class="column">
<div class>
<p data-equalizer-watch>General Enquiries? Contact main reception: </p>

<a class="button readmore" href="tel:+441223494444">+44 (0)1223 494 444</a>
</div>
</div>
<!-- <div class="column">
<div class="">
<p data-equalizer-watch>
Looking for updates?
</p>
<a class="button icon icon-generic readmore" href="//www.ebi.ac.uk/www.twitter.com/emblebi" data-icon='m'> E-mail updates</a>
</div>
</div> -->
<div class="column">
<div class>
<p data-equalizer-watch>
Want updates? We&#x2019;re active on social media:
</p>

<a class="button secondary icon icon-socialmedia" href="https://www.facebook.com/EMBLEBI/" data-icon="F"></a>
<a class="button secondary icon icon-socialmedia" href="http://www.twitter.com/emblebi" data-icon="T"></a>
<a class="button secondary icon icon-socialmedia" href="http://www.linkedin.com/company/ebi" data-icon="L"></a>
<a class="button secondary icon icon-socialmedia" href="http://www.youtube.com/EMBLmedia" data-icon="Y"></a>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="panel-separator"></div>
<div class="intro-unit padding-bottom-none">
<a name="getto"></a>
<h2>Visit EMBL-EBI</h2>
<p class="lead">The <a href="https://www.google.co.uk/maps/place/Hinxton,+Saffron+Walden+CB10+1SD/@52.0815334,0.1891518,17z/data=!3m1!4b1!4m5!3m4!1s0x47d87ccbfbd2538b:0x7bbdb4cde2779ff3!8m2!3d52.0800838!4d0.186415">Wellcome Genome Campus</a> is located 10 miles (16 km) south of Cambridge, alongside the village of Hinxton, 30km from London Stansted airport. We are served by two local railway stations, and are situated close to Junction 10 of the M11 motorway.</p>
</div>
<div class="panel-separator"></div>
<div class="row">
<div class="columns medium-6">
<div class="pane-content">
<script src="https://api.mapbox.com/mapbox-gl-js/v0.32.1/mapbox-gl.js"></script>
<link href="https://api.mapbox.com/mapbox-gl-js/v0.32.1/mapbox-gl.css" rel="preload" as="style" onload="this.rel='stylesheet'">
<noscript><link href="https://api.mapbox.com/mapbox-gl-js/v0.32.1/mapbox-gl.css" rel="stylesheet"></noscript>
<script>!function(e){"use strict";var t=function(t,n,r){function o(){i.addEventListener&&i.removeEventListener("load",o),i.media=r||"all"}var a,l=e.document,i=l.createElement("link");if(n)a=n;else{var d=(l.body||l.getElementsByTagName("head")[0]).childNodes;a=d[d.length-1]}var s=l.styleSheets;i.rel="stylesheet",i.href=t,i.media="only x",function e(t){if(l.body)return t();setTimeout(function(){e(t)})}(function(){a.parentNode.insertBefore(i,n?a:a.nextSibling)});var u=function(e){for(var t=i.href,n=s.length;n--;)if(s[n].href===t)return e();setTimeout(function(){u(e)})};return i.addEventListener&&i.addEventListener("load",o),(i.onloadcssdefined=u)(o),i};"undefined"!=typeof exports?exports.loadCSS=t:e.loadCSS=t}("undefined"!=typeof global?global:this),function(e){if(e.loadCSS){var t=loadCSS.relpreload={};if(t.support=function(){try{return e.document.createElement("link").relList.supports("preload")}catch(e){return!1}},t.poly=function(){for(var t=e.document.getElementsByTagName("link"),n=0;n<t.length;n++){var r=t[n];"preload"===r.rel&&"style"===r.getAttribute("as")&&(e.loadCSS(r.href,r,r.getAttribute("media")),r.rel=null)}},!t.support()){t.poly();var n=e.setInterval(t.poly,300);e.addEventListener&&e.addEventListener("load",function(){t.poly(),e.clearInterval(n)}),e.attachEvent&&e.attachEvent("onload",function(){e.clearInterval(n)})}}}(this);</script>
<div id="map" style="width: 100%; height: 1200px;"></div>
<style type="text/css">#map.fullscreen{width:100%!important;height:100%!important;position:fixed;top:0;left:0;z-index:1000}#map .button{margin:.5rem -10px -15px;width:109%}</style>
<script>function makeFullScreen(){jQuery("#map").addClass("fullscreen"),jQuery(".go-map-fullscreen").addClass("hidden"),jQuery(".go-map-normal").removeClass("hidden"),map.resize()}function makeNormal(){jQuery("#map").removeClass("fullscreen"),jQuery(".go-map-fullscreen").removeClass("hidden"),jQuery(".go-map-normal").addClass("hidden"),map.resize()}mapboxgl.accessToken="pk.eyJ1Ijoia2hhd2tpbnNlYmkiLCJhIjoiY2ludTZ2M3ltMDBtNXczbTJueW85ZmJjNyJ9.u6SIfnrYvGe6WFP3fOtaVQ";var map=new mapboxgl.Map({center:[.189,52.099],zoom:10.7,minZoom:10,maxZoom:13,scrollZoom:!1,container:"map",style:"mapbox://styles/khawkinsebi/cizfgx5xn00pl2sqz8k989c2b"}),nav=new mapboxgl.NavigationControl;map.addControl(nav,"top-right");var popup=new mapboxgl.Popup({anchor:"right",closeButton:!1,closeOnClick:!1}).setLngLat([.188,52.079]).setHTML("<img src='//www.ebi.ac.uk/sites/ebi.ac.uk/files/images/About_us_home/wgc_logo_landscapebig6.jpg' width=200/><br/><div class='label'>Base of</div><br/><img class='padding-right-large' src='//www.ebi.ac.uk/web_guidelines/js/events/images/EMBL_EBI-logo.png' width=100 /><img class='padding-right-large' src='//jobs.sanger.ac.uk/incl/img/wtsi_logo.png' width=100 /><br/>"+'<a class="button go-map-fullscreen" onclick="makeFullScreen()" href="#"><span class="icon icon-functional" data-icon="F"></span> Expand the map</a><a class="button go-map-normal hidden" onclick="makeNormal()" href="#"><span class="icon icon-functional" data-icon="F"></span> Exit full screen map</a>').addTo(map),popup=new mapboxgl.Popup({anchor:"left",closeButton:!1,closeOnClick:!1}).setLngLat([.138,52.174]).setHTML("<h5 class='margin-bottom-none'>Cambridge Biomedical Campus</h5>Cambridge University Hospitals (Addenbrooke’s, Papworth, Rosie)<br/>MRC Laboratory of Molecular Biology (LMB)<br/>Cancer Research UK - Cambridge Institute<br/>NIHR Cambridge Biomedical Research Centre<br/>- AstraZeneca<br/>- GlaxoSmithKline Clinical Unit<br/>- e-hospital Project").addTo(map),popup=new mapboxgl.Popup({anchor:"top-right",closeButton:!1,closeOnClick:!1}).setLngLat([.117,52.205]).setHTML("<h5 class='margin-bottom-none'>University of Cambridge</h5>School of Clinical Medicine<br/>Autism Research Centre<br/>Alan Turing Institute<br/>Cambridge Cardiovascular<br/>Department of Zoology<br/>").addTo(map),popup=new mapboxgl.Popup({anchor:"left",closeButton:!1,closeOnClick:!1}).setLngLat([.204,52.134]).setHTML("<h5 class='margin-bottom-none'>Babraham Institute</h5>").addTo(map);</script>
</div>
</div>
<div class="columns medium-6">
<!-- <span class="label white-color ebi-background  padding-right-medium padding-left-medium"><span class='icon icon-generic' data-icon=']'></span> Getting here</span> -->
<div class="row medium-up-1">
<div class="column">
<h3 class="icon icon-generic" data-icon="m"> Post and in person</h3>
<p>
<a class="external float-left button small margin-right-large"  href="https://www.google.co.uk/maps/place/Hinxton,+Saffron+Walden+CB10+1SD/@52.0815334,0.1891518,17z/data=!3m1!4b1!4m5!3m4!1s0x47d87ccbfbd2538b:0x7bbdb4cde2779ff3!8m2!3d52.0800838!4d0.186415">Google Maps</a>
The European Bioinformatics Institute (EMBL-EBI)<br>
<a href="https://www.google.co.uk/maps/place/Hinxton,+Saffron+Walden+CB10+1SD/@52.0815334,0.1891518,17z/data=!3m1!4b1!4m5!3m4!1s0x47d87ccbfbd2538b:0x7bbdb4cde2779ff3!8m2!3d52.0800838!4d0.186415">Wellcome Genome Campus</a><br>
Hinxton, Cambridgeshire, CB10 1SD, United Kingdom<br>
</p>
</div>
<div class="column">
<h3 class="icon icon-generic" data-icon="2"> Car</h3>
<p>When you arrive pull in at the Security building, which is on your left just before the booths. You will be issued a badge and your host will be contacted.</p>
<ul class="accordion" data-accordion>
<li class="accordion-item " data-accordion-item>
<a href="#" class="accordion-title">From the South</a>
<div class="accordion-content" data-tab-content>
<ul class="ul1">
<li class="li3">Leave the M11 at junction 9 and take the A1301 towards Cambridge.</li>
<li class="li3">From the roundabout, take the first left (about 800m), following the sign to Hinxton.</li>
<li class="li3">You will come to a small roundabout. Take the first exit to the Genome Campus.</li>
<li class="li3">Turn left before the barriers to check in at Security.</li>
</ul>
</div>
</li>
<li class="accordion-item " data-accordion-item>
<a href="#" class="accordion-title">From the North</a>
<div class="accordion-content" data-tab-content>
<ul class="ul1">
<li class="li3">Leave the M11 at junction 10. Take care not to miss junction 10! It&apos;s 40km to the next exit.</li>
<li class="li3">Travel towards Saffron Walden, passing a small roundabout. You will come to a second roundabout, with a petrol station.</li>
<li class="li3">Take the third exit: A1301 towards Saffron Walden.</li>
<li class="li3">Pass the two turnings to the village of Hinxton, and take the next right, at a small roundabout, signposted Genome Campus.</li>
<li class="li3">Turn left before the barriers to check in at Security.</li>
</ul>
</div>
</li>
</ul>
</div>
<div class="column">
<h3 class="icon icon-generic" data-icon="2"> Taxi to Hinxton</h3>
<p>Costs for recommended companies: approximately &#xA3;21 from Cambridge, roughly &#xA3;37 from Stansted Airport. Unbooked taxis could cost over &#xA3;50.</p>
<ul class="accordion" data-accordion>
<li class="accordion-item " data-accordion-item>
<a href="#" class="accordion-title">Taxi companies</a>
<div class="accordion-content" data-tab-content>
<ul class="ul1">
<li>Walden Cabs: +44 (0)1799 500 500 (for Audley End or Whittlesford Parkway)</li>
<li>Select Cars: +44 (0)1799 525 500 (for Audley End or Whittlesford Parkway)</li>
<li>Abel Cars: +44 (0)1799 513 313 (for Audley End or Whittlesford) or +44 (0)1223 513 313 (from Cambridge)</li>
</ul>
</div>
</li>
<li class="accordion-item " data-accordion-item>
<a href="#" class="accordion-title">Private cars (must be pre-booked)</a>
<div class="accordion-content" data-tab-content>
<ul class="ul1">
<li>Mid-Anglia: +44(0)1223-836 000, <a href="mailto:booking@midangliaprivatehire.co.uk">booking@midangliaprivatehire.co.uk</a></li>
<li>Cambridge Connections: +44(0)1223-566 654</li>
</ul>
</div>
</li>
</ul>
</div>
<div class="column">
<h3 class="icon icon-generic" data-icon="7"> Rail</h3>
<p>There are trains to the area from Cambridge, London Liverpool Street, London King&apos;s Cross (adjacent to the St. Pancras EuroStar) and Stansted airport.</p>
<p>Nearest stations: Whittlesford Parkway, Audley End, and Great Chesterford.</p>
<p class="small">To get to the campus from nearby train stations, be sure to arrange your taxi pick-up in advance. Timetables are available at <a href="http://www.nationalrail.co.uk/">the National Rail website</a>.</p>
</div>
<div class="column">
<h3 class="icon icon-generic" data-icon="4"> Air</h3>
<p>The closest airport is London Stansted with with <a href="http://www.stanstedairport.com/destinations-and-guides/a-z-list-of-destinations/" target="blank">regular connections to many cities in Europe and nearly 200 cities worldwide</a>.</p>
<p>Stansted is a <a href="https://www.google.co.uk/maps/dir/Stansted+Airport,+Bassingbourn+Rd,+Stansted+CM24+1QW/Wellcome+Genome+Campus,+Hinxton,+Saffron+Walden+CB10+1SA/@51.97478,0.0757636,11z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x487604b8a52a1bb7:0x30a4d0976b352648!2m2!1d0.2388661!2d51.8860181!1m5!1m1!1s0x47d87ccc6d10a9c9:0x3f7ad92339a765b6!2m2!1d0.1875079!2d52.0788896!3e0">30-minute drive</a> from the Genome Campus. A pre-booked taxi costs around &#xA3;37.</p>
<p class="small">If you fly into London Heathrow or Gatwick, allow at least 2 hours to reach Hinxton by road. A taxi costs around &#xA3;101 from Heathrow and &#xA3;117 from Gatwick.</p>
</div>
<div class="column">
<h3 class="icon icon-generic" data-icon="1"> Campus bus for staff</h3>
<p>EMBL-EBI staff can utilise the free Wellcome Genome Campus bus service.<br><a href="https://helix.wtgc.org/content/bus-timetables" class="small readmore"><span class="icon icon-functional" data-icon="L"></span> Details for staff</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
</section></section></div>
<div class="row">
<div class="medium-10 columns analytics-content-left padding-top-xlarge">
<div class="panel-pane pane-custom pane-5">
<div class="pane-content">
<a name="sleep"></a>
<h2 class="icon icon-generic" data-icon="a"> Accommodation</h2>
<p>When attending an EMBL-EBI course or conference, please arrange your own accommodation unless you have been informed that it is included in the registration fee.</p>
</div>
</div>
</div>
<div class="medium-6 columns analytics-content-right">
</div>
</div>
<div class="row">
<div class="medium-4 columns analytics-content-footer">
<div class="panel-pane pane-custom pane-2">
<div class="pane-content">
<h3>Staying on site</h3>
<p>If you wish to stay in Hinxton, we recommend using the Wellcome Genome Campus Conference Centre accommodation, which is on-site and provides a high level of comfort, free wireless internet and a lovely parkland setting. Book early, though, as space is limited.</p>
<p><a href="https://conferencecentre.wellcomegenomecampus.org/facilities/accommodation/">Hinxton Hall, Wellcome Genome Campus</a><br>
Tel: +44(0) 1223 495 000<br>
Fax: +44(0) 1223 495 114<br>
<a href="mailto:conference.reception@wellcomegenomecampus.org">conference.reception@wellcomegenomecampus.org</a>
</p>
</div>
</div>
</div>
<div class="medium-4 columns analytics-content-footer">
<div class="panel-pane pane-custom pane-3">
<div class="pane-content">
<h3>Nearby</h3>
<p>Hinxton is a very small village, with few amenities and infrequent public transport. We recommend staying in Hinxton only if you have your own transport or if you will be attending a fully residential course or conference with all meals provided.</p>
<p><a href="http://www.redlionhinxton.co.uk" target="blank">The Red Lion Inn</a>, Hinxton (&#xA3;&#xA3;)<br>
Tel: +44 (0)1799 530 601<br>
E-mail: <a href="mailto:info@redlionhinxton.co.uk">info@redlionhinxton.co.uk</a>
</p>
<p><a href="http://www.crownhousehotel.com/" target="blank">Crown House Hotel </a>(&#xA3;&#x2014;&#xA3;&#xA3;&#xA3;)<br>
London Road, Great Chesterford<br>
Tel: +44(0)1799 530 515<br>
<a href="mailto:stayatthecrownhouse@onetel.net">stayatthecrownhouse@onetel.net</a>
</p>
<p><a href="http://www.saffronhotel.co.uk/" target="blank">The Saffron Hotel</a> (&#xA3;&#x2014;&#xA3;&#xA3;)<a href="http://www.saffronhotel.co.uk/" target="blank"><br>
</a>8-12 High Street,Saffron Walden<br>
Tel: +44 (0)1799 522 676<br>
<a href="mailto:reservations@saffronhotel.co.uk">reservations@saffronhotel.co.uk</a>
</p>
<p><a href="http://www.duxfordlodgehotel.co.uk/" target="blank">Duxford Lodge Hotel</a> (&#xA3;&#xA3;&#x2014;&#xA3;&#xA3;&#xA3;)<br>
Ickleton Road, Duxford<br>
Tel: +44 (0)1223 836 444<br>
<a href="mailto:reception@duxfordlodgehotel.co.uk">reception@duxfordlodgehotel.co.uk</a>
</p>
<p>Archways Guest House (&#xA3;)<br>
Church Street, Saffron Walden<br>
Tel: +44 (0)1799 501 500
</p>
</div>
</div>
</div>
<div class="medium-4 columns analytics-content-footer">
<div class="panel-pane pane-custom pane-4">
<div class="pane-content">
<h3>Central Cambridge</h3>
<p>Please note that there is very little public transport from Cambridge to Hinxton. We advise that you check methods of payment in advance of your stay as some B&amp;Bs may not accept credit cards.</p>
<p><a href="http://www.regenthotel.co.uk/" target="blank">Regent Hotel </a>(&#xA3;&#xA3;&#x2014;&#xA3;&#xA3;&#xA3;)<a href="http://www.regenthotel.co.uk/" target="blank"><br>
</a>Regent street, Cambridge<br>
Tel: +44 (0)1223 351 470<br>
<a href="mailto:reservations@regenthotel.co.uk">reservations@regenthotel.co.uk</a>
</p>
<p><a href="http://www.centennial-hotel.co.uk/" target="blank">The Centennial Hotel</a> (&#xA3;&#x2014;&#xA3;&#xA3;&#xA3;)<br>
<a href="http://www.centennial-hotel.co.uk/" target="blank"></a>Hills Road, Cambridge<br>
Tel: +44 (0)1223 314 652
</p>
<p><a href="http://www.arundelhousehotels.co.uk" target="blank">Arundel House Hotel</a> (&#xA3;&#x2014;&#xA3;&#xA3;&#xA3;)<a href="http://www.arundelhousehotels.co.uk" target="blank"><br>
</a>Chesterton Road, Cambridge<br>
Tel: +44 (0)1223 367 701<br>
<a href="mailto:info@arundelhousehotels.co.uk">info@arundelhousehotels.co.uk</a>
</p>
<p><a href="http://www.travelodge.co.uk/find_a_hotel/hotel/hotel_id/255/CambridgeCentral" target="blank">Travelodge</a> (&#xA3;&#x2014;&#xA3;&#xA3;)<a href="http://www.travelodge.co.uk/find_a_hotel/hotel/hotel_id/255/CambridgeCentral" target="blank"><br>
</a>Cambridge Leisure Park, Clifton Way, Cambridge<br>
Tel: +44 (0)871 984 6101<br>
<a href="http://www.regencyguesthouse.co.uk/" target="blank"></a>
</p>
<p><a href="http://www.regencyguesthouse.co.uk/" target="blank">The Regency Guesthouse</a> (&#xA3;)<a href="http://www.regencyguesthouse.co.uk/" target="blank"><br>
</a>7 Regent Terrace, Cambridge<br>
Tel: +44 (0)1223 329 626<br>
<a href="mailto:info@regencyguesthouse.co.uk">info@regencyguesthouse.co.uk</a>
</p>
</div>
</div>
</div>
<div class="medium-12 columns analytics-content-footer">
{% render "@vf-bioimaging-banner" %}
{% verbatim %}
Code: <pre>{% render "@vf-bioimaging-banner" %}</pre>
{% endverbatim %}

You can also pass optional colours:

{% verbatim %}
<pre>{% render "@vf-bioimaging-banner", {color_background: "blue", color_foreground: "orange"} %}</pre>
{% endverbatim %}

</div>
</div>
