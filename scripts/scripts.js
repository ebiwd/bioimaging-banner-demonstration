'use strict';

// vf-banner


// Turn the below code snippet into a banner
// <div class="vf-banner vf-banner--fixed vf-banner--bottom vf-banner--notice"
// data-vf-js-banner
// data-vf-js-banner-state="persistent|dismissible|blocking" data-vf-js-banner-esc-close="y|n"
// data-vf-js-banner-cookie-name="{{data-service-id}}"
// data-vf-js-banner-cookie-version="{{data-protection-version}}"
// data-vf-js-banner-extra-button="<a href='#'>string1</a><a href='#'>string2</a>">
//   <div class="vf-banner__content | vf-grid">
//     <p class="vf-text vf-text--body-l">
//       This website uses cookies, and the limiting processing of your personal data to function. By using the site you are agreeing to this as outlined in our <a class="vf-link" href="JavaScript:Void(0);">Privacy Notice</a> and <a class="vf-link" href="JavaScript:Void(0);">Terms Of Use</a>.
//     </p>
//
//     <button class="vf-button vf-button--secondary">
//       {{vf-data-protection-banner__link}}
//     </button>
//   </div>
  // </div>

/**
 * Clear the cooke. This is mostly a development tool.
 */
function vfBannerReset(vfBannerCookieNameAndVersion) {
  vfBannerSetCookie(vfBannerCookieNameAndVersion,false);
}

/**
 * Confirm a banner, initiate cookie logging
 */
function vfBannerConfirm(banner,vfBannerCookieNameAndVersion) {
  banner.classList += " vf-u-display-none";
  if (vfBannerCookieNameAndVersion !== 'null') {
    vfBannerSetCookie(vfBannerCookieNameAndVersion,true);
  }
}

/**
 * Log a cookie
 */
function vfBannerSetCookie(c_name, value, exdays) {
  // var value = value || 'true';
  var exdays = exdays || 90;
  var exdate = new Date();
  var c_value;
  exdate.setDate(exdate.getDate() + exdays);
  c_value = escape(value) + (exdays === null ? "" : ";expires=" + exdate.toUTCString()) + ";domain=" + document.domain + ";path=/";
  document.cookie = c_name + "=" + c_value;
}

/**
 * See if a cookie has been set
 */
function vfBannerGetCookie(c_name) {
  var i,
      x,
      y,
      ARRcookies = document.cookie.split(";");
  for (var i = 0; i < ARRcookies.length; i++) {
    x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
    y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
    x = x.replace(/^\s+|\s+$/g, "");
    if (x === c_name) {
      return unescape(y);
    }
  }
}

/**
 * Finds all vf-banner on a page and activates them
 * @param {object} [scope] - the html scope to process, optional, defaults to `document`
 * @example vfBanner(document.querySelectorAll('.vf-component__container')[0]);
 */
function vfBanner(scope) {
  var scope = scope || document;
  const bannerList = scope.querySelectorAll('[data-vf-js-banner]');

  if (!bannerList) {
    // exit: banners not found
    return;
  }
  if (bannerList.length == 0) {
    // exit: banner content not found
    return;
  }

  // generate the banner component, js events
  Array.prototype.forEach.call(bannerList, (banner, i) => {

    // map the JS data attributes to our object structure
    var bannerRemapped = JSON.parse(JSON.stringify(banner.dataset));

    if (typeof(banner.dataset.vfJsBannerId) != "undefined") {
      // don't reactivate an already processed banner
    } else {
      bannerRemapped.vfJsBannerText = banner.querySelectorAll('[data-vf-js-banner-text]')[0].innerHTML;

      var uniqueId = Math.round(Math.random()*10000000);

      // set an id to target this banner
      banner.setAttribute('data-vf-js-banner-id',uniqueId);

      // preserve the classlist
      bannerRemapped.classList = banner.querySelectorAll('[data-vf-js-banner-text]')[0].classList;

      // Make the banner come alive
      vfBannerInsert(bannerRemapped,uniqueId);
    }

  });

}

/**
 * Takes a banner object and creates the necesary html markup, js events, and inserts
 * @example vfBannerInsert()
 * @param {object} [banner]  -
 * @param {object} [scope] - the html scope to process, optional, defaults to `document`
 * @param {string} [bannerId] - the id of the target div, `data-vf-js-banner-id="1"`
 */
function vfBannerInsert(banner,bannerId,scope) {
  var scope = scope || document;
  var targetBanner = scope.querySelectorAll('[data-vf-js-banner-id="'+bannerId+'"]')[0];
  if (targetBanner == undefined) {
    return;
  }

  var generatedBannerHtml = '<div class="'+banner.classList+'" data-vf-js-banner-text>';

  generatedBannerHtml += banner.vfJsBannerText;

  // What type of banner?
  if (banner.vfJsBannerState === 'persistent') {
    // nothing more to do for persistent, you can't close it

  } else if (banner.vfJsBannerState === 'dismissible') {
    // nothing more to do for dismissible

  } else if (banner.vfJsBannerState === 'blocking') {
    console.warn('vf-banner: Note, the blocking implementation is not yet feature complete.');
    // escape only works when blocking
    if (banner.vfJsBannerEscClose === 'y' || banner.vfJsBannerEscClose === 'Y') {
      document.onkeydown = function(evt) {
        evt = evt || window.event;
        if (evt.keyCode == 27) {
          vfBannerConfirm(targetBanner,'null');
        }
      };
    }
  }

  // Split passed links into buttons
  // <a href='#'>string1</a>\<a href='#'>string2</a>
  if (banner.vfJsBannerExtraButton) {
    var vfBannerExtraButtons = banner.vfJsBannerExtraButton.split('</a>');

    vfBannerExtraButtons.forEach(function(button){
      if (button.length > 1) {
        button += '</a>';
        var newButton = document.createElement('button');
        newButton.innerHTML = button;
        newButton = newButton.firstChild;
        newButton.classList = 'vf-button vf-button--primary';
        generatedBannerHtml += newButton.outerHTML;
      }
    });
  }

  // if there is a vfJsBannerButtonText and banner is blocking or dismissible,
  // add a button so user can close the banner
  if (banner.vfJsBannerButtonText && (banner.vfJsBannerState === 'blocking' || banner.vfJsBannerState === 'dismissible')) {
    generatedBannerHtml += '<button class="vf-button vf-button--secondary" data-vf-js-banner-close>'+banner.vfJsBannerButtonText+'</button>';
  }

  generatedBannerHtml += '</div>';

  // set the html of the banner
  targetBanner.innerHTML = generatedBannerHtml;

  // prep for cookie
  var vfBannerCookieNameAndVersion = 'null';
  if (banner.vfJsBannerCookieName && banner.vfJsBannerCookieVersion) {
    vfBannerCookieNameAndVersion = banner.vfJsBannerCookieName + '_' + banner.vfJsBannerCookieVersion;
  }

  // utility to reset cookie when developing
  // console.warn('vf-banner: vfBannerReset cookie reset override is on.');
  // vfBannerReset(vfBannerCookieNameAndVersion);

  // if blocking or dismissible, allow the user to close it, store a cookie (if specified)
  if (banner.vfJsBannerState === 'blocking' || banner.vfJsBannerState === 'dismissible') {
    // On click: close banner, pass any cooke name (or `null`)
    if (banner.vfJsBannerButtonText) {
      targetBanner.addEventListener('click', function(){
        vfBannerConfirm(targetBanner,vfBannerCookieNameAndVersion);
      }, false);
    }
  }

  if (vfBannerCookieNameAndVersion != "null") {
    // if banner has been previously accepted
    if (vfBannerGetCookie(vfBannerCookieNameAndVersion) === 'true') {
      // banner has been accepted, close
      targetBanner.classList += " vf-u-display-none";
      // exit, nothng more to do
      return;
    }

    // if banner is marked as auto-accept, set as read
    if (banner.vfJsBannerAutoAccept == "true") {
      if (banner.vfJsBannerState === 'blocking' || banner.vfJsBannerState === 'dismissible') {
        vfBannerSetCookie(vfBannerCookieNameAndVersion,true);
      }
    }

  }

}

// By default this creates banners from HTML
// optionally you can programatically supply
// Target HTML
// `<div class="vf-banner vf-banner--fixed vf-banner--bottom vf-banner--notice"
//       data-vf-js-banner
//       data-vf-js-banner-id="32423"
//
// ></div>`
// var programaticalBanner = {
//   vfJsBanner: "",
//   vfJsBannerButtonText: "I agree, dismiss this banner",
//   vfJsBannerCookieName: "MyService",
//   vfJsBannerCookieVersion: "0.1",
//   vfJsBannerExtraButton: "<a href='#'>Optional button</a><a target='_blank' href='#'>New tab button</a>",
//   vfJsBannerId: "2352286",
//   vfJsBannerText: '<p class="vf-text vf-text--body-l">This website uses cookies, and the limiting processing of your personal data to function. By using the site you are agreeing to this as outlined in our <a class="vf-link" href="JavaScript:Void(0);">Privacy Notice</a> and <a class="vf-link" href="JavaScript:Void(0);">Terms Of Use</a>.</p>',
//   vfJsBannerState: "dismissible",
//   vfJsBannerAutoAccept: "true"
// };
// vfBannerInsert(programaticalBanner,'32423');

// vf-bioimaging-banner


// Turn the below code snippet into a banner
// <div class="vf-banner vf-banner--fixed vf-banner--bottom vf-banner--notice"
// data-vf-js-bioimaging-banner
// data-vf-js-bioimaging-banner-state="persistent|dismissible|blocking" data-vf-js-bioimaging-banner-esc-close="y|n"
// data-vf-js-bioimaging-banner-cookie-name="{{data-service-id}}"
// data-vf-js-bioimaging-banner-cookie-version="{{data-protection-version}}"
// data-vf-js-bioimaging-banner-extra-button="<a href='#'>string1</a><a href='#'>string2</a>">
//   <div class="vf-banner__content | vf-grid">
//     <p class="vf-text vf-text--body-l">
//       This website uses cookies, and the limiting processing of your personal data to function. By using the site you are agreeing to this as outlined in our <a class="vf-link" href="JavaScript:Void(0);">Privacy Notice</a> and <a class="vf-link" href="JavaScript:Void(0);">Terms Of Use</a>.
//     </p>
//
//     <button class="vf-button vf-button--secondary">
//       {{vf-data-protection-banner__link}}
//     </button>
//   </div>
  // </div>



/**
 * Finds all vf-banner on a page and activates them
 * @param {object} [scope] - the html scope to process, optional, defaults to `document`
 * @example vfBanner(document.querySelectorAll('.vf-component__container')[0]);
 */
function vfBioimagingBanner(scope) {
  var scope = scope || document;
  const bannerList = scope.querySelectorAll('[data-vf-js-bioimaging-banner]');

  if (!bannerList) {
    // exit: banners not found
    return;
  }
  if (bannerList.length == 0) {
    // exit: banner content not found
    return;
  }

  // generate the banner component, js events
  Array.prototype.forEach.call(bannerList, (banner, i) => {

    // map the JS data attributes to our object structure
    var bannerRemapped = JSON.parse(JSON.stringify(banner.dataset));

    if (typeof(banner.dataset.vfJsBannerId) != "undefined") {
      // don't reactivate an already processed banner
    } else {
      bannerRemapped.vfJsBannerText = banner.querySelectorAll('[data-vf-js-bioimaging-banner-text]')[0].innerHTML;

      var uniqueId = Math.round(Math.random()*10000000);

      // set an id to target this banner
      banner.setAttribute('data-vf-js-bioimaging-banner-id',uniqueId);

      // preserve the classlist
      bannerRemapped.classList = banner.querySelectorAll('[data-vf-js-bioimaging-banner-text]')[0].classList;

      // Make the banner come alive
      // vfBioimagingBannerInsert(bannerRemapped,uniqueId);
      vfBioimagingBannerInsert(bannerRemapped,uniqueId);
    }

  });
}

/**
 * Takes a banner object and creates the necesary html markup, js events, and inserts
 * @example vfBioimagingBannerInsert()
 * @param {object} [banner]  -
 * @param {object} [scope] - the html scope to process, optional, defaults to `document`
 * @param {string} [bannerId] - the id of the target div, `data-vf-js-bioimaging-banner-id="1"`
 */
function vfBioimagingBannerInsert(banner,bannerId,scope) {
  var scope = scope || document;
  var targetBanner = scope.querySelectorAll('[data-vf-js-bioimaging-banner-id="'+bannerId+'"]')[0];
  if (targetBanner == undefined) {
    return;
  }

  var generatedBannerHtml = '<div class="'+banner.classList+'" data-vf-js-bioimaging-banner-text>';

  generatedBannerHtml += banner.vfJsBannerText;

  generatedBannerHtml += `
    <a class="vf-link" href="#">
      <img class="vf-bioimaging-banner__logo" src="/bioimaging-banner-demonstration/assets/vf-bioimaging-banner/assets/eubi-logo_icon.png" />
    </a>
    <div class="vf-text | vf-bioimaging-banner__message">
      <div class="vf-text--heading-xl | vf-bioimaging-banner__message--headline">This is a <a class="vf-link" href="JavaScript:Void(0);">Euro-BioImaging</a> connected resource</div>
      <div class="vf-lede"><a href="#" class="vf-link">Learn more</a></div>
    </div>
    <div class="vf-bioimaging-banner__credit | vf-text">
      <img class="vf-bioimaging-banner__credit--logo" src="/bioimaging-banner-demonstration/assets/vf-bioimaging-banner/assets/BioImage_Archive.png" />
      <span class="vf-text | vf-bioimaging-banner__credit--text">Powered by the <a href="https://www.ebi.ac.uk/bioimage-archive" class="vf-link">BioImage Archive</a></span>
    </div>
  `;

  generatedBannerHtml += '</div>';

  // set the html of the banner
  targetBanner.innerHTML = generatedBannerHtml;
}

/*
 *
 * scripts.css
 * The Visual Framework kitchen sink of JavaScript.
 * Import this as a quick way to get *everything*,
 *
 */
vfBanner();
vfBioimagingBanner();

// import { vfMastheadSetStyle } from 'vf-masthead/vf-masthead';
// vfMastheadSetStyle();
//
// import { vfTabs } from 'vf-tabs/vf-tabs';
// vfTabs();
//
// import 'vf-form/vf-form__core/assets/float-labels.js';
//
// // All EMBL JS
// import { emblConditionalEdit } from 'embl-conditional-edit/embl-conditional-edit';
// emblConditionalEdit();
//
// import { emblContentHubLoaderHtmlImports } from 'embl-content-hub-loader/embl-content-hub-loader__html-imports';
// import { emblContentHubFetch } from 'embl-content-hub-loader/embl-content-hub-loader__fetch';
// import { emblContentHub } from 'embl-content-hub-loader/embl-content-hub-loader';
// emblContentHub();
//
// import { emblBreadcrumbs } from 'embl-breadcrumbs-lookup/embl-breadcrumbs-lookup';
// emblBreadcrumbs();
//
// import { emblContentMetaProperties_Read } from 'embl-content-meta-properties/embl-content-meta-properties';
// // No default invokation