// vf-bioimaging-banner


// Turn the below code snippet into a banner
// <!-- persistent banner -->
// <div data-vf-js-bioimaging-banner class="vf-banner vf-bioimaging-banner vf-banner--static vf-banner--notice"
// style="background-color: #444444">
// <div class="vf-banner__content vf-bioimaging-banner__content" data-vf-js-bioimaging-banner-text>
// </div>
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
      <span class="vf-bioimaging-banner__credit--text">Powered by the <a href="https://www.ebi.ac.uk/bioimage-archive" class="vf-link">BioImage Archive</a></span>
    </div>
  `;

  generatedBannerHtml += '</div>';

  // set the html of the banner
  targetBanner.innerHTML = generatedBannerHtml;
}

export { vfBioimagingBanner };
