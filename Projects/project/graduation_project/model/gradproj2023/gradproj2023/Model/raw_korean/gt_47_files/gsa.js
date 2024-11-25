
// Function to get the browser width and return if it's
// mobile, tablet or desktop for analytics
//////////////////////////////////
function getBrowserWidth() {
  if ( isMobile() ) {
    return 'mobile';
  } else if ( isTablet() ) {
    return 'tablet';
  } else {
    return 'desktop';
  }
}

/**
 * Converts undefined values into a string for teamium.
 */
function isUndefined(str) {
  if (str == undefined || typeof str == undefined) str = '';
  if (typeof str == "string") {
    str = str.replace(/\'/g, '');
    str = str.replace(/\"/g, '');
    str = str.replace(/\#/g, '');
    str = str.replace('#8230;','...');
  }

  return str;
}

function isOoyala(e) {
  try {
    return e.className.indexOf('oo-player') >=0 || e.className.indexOf('ooyala-player') >= 0;
  } catch (e) {
    return undefined;
  }
}

/**
 * Overwrites obj1's values with obj2's and adds obj2's if non existent in obj1
 * @param obj1
 * @param obj2
 * @returns obj3 a new object based on obj1 and obj2
 * For joining two object arrays
 */
function mergeArray(obj1,obj2){
  var obj3 = {};
  for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
  for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
  return obj3;
}

/**
 * Send utag link data to tealium for tracking events
 * Get the array "data" which is the data specific to this event
 * and append it to the default data we pass to the utag object
 * @param data
 */
function gsaSendUtagData(data) {

  // set up array of default values
  /////////////////////////////////////
  var conData = {
    'page_site_name'            : isUndefined( utag_data.page_site_name ),
    'page_site_region'          : isUndefined( utag_data.page_site_region ),
    'page_name'                 : isUndefined( utag_data.page_name ),
    'page_section'              : isUndefined( utag_data.page_section ),
    'page_section_2'            : isUndefined( utag_data.page_section_2 ),
    'page_type'                 : isUndefined( utag_data.page_type ),
    'article_id'                : isUndefined( utag_data.article_id ),
    'article_id_type'           : isUndefined( utag_data.article_id_type ),
    'article_name'              : isUndefined( utag_data.article_name ),
    'article_name_latest'       : isUndefined( utag_data.article_name_latest ),
    'article_publish_timestamp' : isUndefined( utag_data.article_publish_timestamp ),
    'article_publish_latest'    : isUndefined( utag_data.article_publish_latest ),
    'article_author'            : isUndefined( utag_data.article_author ),
    'article_kicker_name'       : isUndefined( utag_data.article_kicker_name ),
    'article_tag_name'          : isUndefined( utag_data.article_tag_name ),
    'page_number'               : isUndefined( utag_data.page_number ),
    'template_name'             : isUndefined( utag_data.template_name ),
    'page_restrictions'         : isUndefined( utag_data.page_restrictions ),
    'page_tags'                 : isUndefined( utag_data.page_tags )
  };

  // merge the two arrays
  var finalData = mergeArray(data,conData);

  utag.link(finalData); // send data to tealium

}

/***************************
 START VIDEO STATS TRACKING
 NEW DATA
 ***************************/

//
// function to convert video duration time from the default (seconds).
// It serves two functions.
//
// duration :: the duration in seconds.
// outputTime :: true/false.
// if true :: output the value as HH:MM:SS
// if false :: output the value as a percentage of the total time
// in to hours, minutes and seconds
// for tracking. The desired result is: HH:MM:SS
function getVideoDuration(time, outputTime, totalDuration) {
  if (outputTime == true) {
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = Math.round(time % 60);

    hrs += "";
    mins += "";
    secs += "";

    if (hrs.length == 1) hrs = "0" + hrs;
    if (mins.length == 1) mins = "0" + mins;
    if (secs.length == 1) secs = "0" + secs;

    return hrs + ":" + mins + ":" + secs;
  } else {
    var percentageTime = time / totalDuration * 100;
    percentageTime = Math.round(percentageTime);

    // no reutn pre specified range based on exact percentage:
    if (percentageTime <= 25) return "0-25";
    else if (percentageTime <= 50) return "26-50"
    else if (percentageTime <= 75) return "51-75"
    else return "76-100"
  }
}

// set milestone markers to false so they can later be set true
// to stop them fireing more than once
var milestoneSet = [];
function gsa_reset_milestone_flags() {
  milestoneSet["25"] = false;
  milestoneSet["50"] = false;
  milestoneSet["75"] = false;
}

// START:
// VIDEO STATS

// START:
// VIDEO PLAY AND CHANGE STATE

gsa_reset_milestone_flags(); // set the flags to false until we call on them

var gsa_start_play = false;

/**
 * Bind events for videos in the page.
 *
 * @param videoElementId Video element id in the DOM.
 * @param videoId Video id in the backlot.
 */
function bindVideoEvents(videoElementId, videoId) {
  // firstly get all the videos that have loaded on the page
  var videoObject = document.getElementById(videoElementId);
  if (gsaVideos = videoObject.querySelectorAll(".video")) {
    for (i=0; i < gsaVideos.length;i++ ) {
      // get the video's data to pass to utag
      var mediaTitle, mediaCategory, mediaPubTime;
      var mediaID = videoId; // get the video's content ID

      // now get the videos details which is in a class with attribute of the same data-content-id as above
      if (gsaVideoDetails = document.getElementById('sun-video-details-' + videoId)) {
        if (gsaVideoDetails.getAttribute("data-content-id") == mediaID) { // ignore if the content is different - for multiple players on one page
          mediaTitle = gsaVideoDetails.getAttribute("data-content-title") + ": " + gsaVideoDetails.getAttribute("data-content-details");
          mediaCategory = gsaVideoDetails.getAttribute("data-video-section");
          mediaPubTime = gsaVideoDetails.getAttribute("data-video-published");
        }
      }

      gsaVideos[i].addEventListener('loadedmetadata', function() { // if playing for the first time
        gsa_start_play = true;

        var utagArray = {
          'event_media_action':'media play',
          'media_player':'ooyala',
          'media_id':isUndefined(mediaID),
          'media_name':isUndefined(mediaTitle),
          'media_category':isUndefined(mediaCategory),
          'media_publish_timestamp':isUndefined(mediaPubTime),
          'media_type':'video',
          'media_duration':getVideoDuration(this.duration, true),
          'media_segment':getVideoDuration(this.currentTime, false, this.duration),
          'media_offset':getVideoDuration(this.currentTime, true),
        };
        gsaSendUtagData(utagArray); // send data to tealium

      });

      // if press play
      gsaVideos[i].onplay = function() {
        // make sure milestone flags are reset
        gsa_reset_milestone_flags();

        if (gsa_start_play == true || this.readyState == 4) { // if users pauses then plays again
          var utagArray = {
            'event_media_action':'media play',
            'media_player':'ooyala',
            'media_id':isUndefined(mediaID),
            'media_name':isUndefined(mediaTitle),
            'media_category':isUndefined(mediaCategory),
            'media_publish_timestamp':isUndefined(mediaPubTime),
            'media_type':'video',
            'media_duration':getVideoDuration(this.duration, true),
            'media_segment':getVideoDuration(this.currentTime, false, this.duration),
            'media_offset':getVideoDuration(this.currentTime, true),
          };
          gsaSendUtagData(utagArray); // send data to tealium
        }
      };

      // if 100% complete
      gsaVideos[i].onended = function() {
        // reset milestones for next video
        gsa_reset_milestone_flags();

        var utagArray = {
          'event_media_action':'media complete',
          'media_player':'ooyala',
          'media_id':isUndefined(mediaID),
          'media_name':isUndefined(mediaTitle),
          'media_category':isUndefined(mediaCategory),
          'media_publish_timestamp':isUndefined(mediaPubTime),
          'media_type':'video',
          'media_duration':getVideoDuration(this.duration, true),
          'media_milestone':"100",
          'media_segment':"76-100",
          'media_offset':getVideoDuration(this.duration, true),
        };
        gsaSendUtagData(utagArray); // send data to tealium

      };

      // log if 25%, 50% and 75% complete
      gsaVideos[i].ontimeupdate = function() {
        // check time as a percentage
        var percentageTime = this.currentTime / this.duration * 100;
        percentageTime = Math.round(percentageTime);

        var milestone, segment;

        if (percentageTime == 25) {
          milestone = "25";
          segment = "0-25";
        } else if (percentageTime == 50) {
          milestone = "50";
          segment = "26-50";
        } else if (percentageTime == 75) {
          milestone = "75";
          segment = "51-75";
        }

        if (milestone && milestoneSet[milestone] == false) {
          milestoneSet[milestone] = true; // make sure we only fire this once per milestone
          setTimeout( gsa_reset_milestone_flags() , 1000); // reset all the milestone flags after 1 second.


          var utagArray = {
            'event_media_action':'media milestone',
            'media_player':'ooyala',
            'media_id':isUndefined(mediaID),
            'media_name':isUndefined(mediaTitle),
            'media_category':isUndefined(mediaCategory),
            'media_publish_timestamp':isUndefined(mediaPubTime),
            'media_type':'video',
            'media_duration':getVideoDuration(this.duration, true),
            'media_milestone':milestone,
            'media_segment':segment,
            'media_offset':getVideoDuration(this.currentTime, true),
          };
          gsaSendUtagData(utagArray); // send data to tealium
        }

      };

    }
  }

  // END:
  // VIDEO PLAY AND CHANGE STATE

}

document.addEventListener('DOMContentLoaded', function () {

  // START:
  // LOGO CLICK
  document.getElementById("logo").onclick = function () {

    var utagArray = {
      'event_navigation_action': 'navigation',
      'event_navigation_name': 'the sun logo',
      'event_navigation_browsing_method':'click'
    };
    gsaSendUtagData(utagArray); // send data to tealium

  };
  // END:
  // LOGO CLICK

  // START:
  // CHANGE EDITION SELECTION
  if (gsaEdition = document.querySelectorAll(".edition a")) {
    for(i = 0; i < gsaEdition.length; i++) {
      gsaEdition[i].addEventListener('click', function(){

        var gsaEditionName = this.innerHTML.trim();

        var utagArray = {
          'event_navigation_action':'navigation',
          'event_navigation_name':'sun edition:selection',
          'event_navigation_browsing_method':'click',
          'article_parent_name':'sun edition:' + gsaEditionName,
        };
        gsaSendUtagData(utagArray); // send data to tealium

      }, false);
    }
  }

  // END:
  // CHANGE EDITION SELECTION


  // START:
  // CLICK SEARCH BOX
  if (gsaSearch = document.querySelector(".search-bar a")) {

    gsaSearch.addEventListener('click', function(){

      var utagArray = {
        'event_engagement_action':'engagement',
        'event_engagement_name':'site search:expose',
        'event_engagement_browsing_method':'click',
      };
      gsaSendUtagData(utagArray); // send data to tealium

    }, false);

  }
  // END:
  // CLICK SEARCH BOX


  // START:
  // CLICK SEARCH BUTTON
  if (gsaSearch = document.querySelector(".search-bar")) {
    gsaSearch = gsaSearch.getElementsByTagName("input");
    for(i = 0; i < gsaSearch.length; i++) {
      if (gsaSearch[i].type == "submit") {

        gsaSearch[i].addEventListener('click', function(){

          // get the input value
          var gsaSearchValue = document.querySelector(".search-bar input").value;

          var utagArray = {
            'event_navigation_action':'navigation',
            'event_navigation_name':'site search:confirm',
            'event_navigation_browsing_method':'click',
            'internal_search_term':gsaSearchValue,
            'internal_search_type':'site search:free text'
          };
          gsaSendUtagData(utagArray); // send data to tealium

        }, false);
      }
    }
  }
  // END:
  // CLICK SEARCH BUTTON


  // START:
  // CLICK ON NAVIGATION WITHIN THE MAIN MENU
  if (gsaTopNav = document.querySelectorAll("#sun-menu li a")) {
    for (j = 0;j < gsaTopNav.length; j++) {
      gsaTopNav[j].addEventListener('click', function(){

        var utagArray = {
          'event_navigation_action':'navigation',
          'event_navigation_name':'section:selection',
          'event_navigation_browsing_method':'click',
          'article_parent_name':'section:'+this.textContent.trim()
        };
        gsaSendUtagData(utagArray); // send data to tealium

      }, false);

    }
  }
  // END:
  // CLICK ON NAVIGATION WITHIN  THE MAIN MENU


  // START:
  // CLICK ON SUB NAVIGATION
  if ( gsaSubNav = document.querySelectorAll(".sub-nav__list a") ) {
    for (i = 0;i < gsaSubNav.length; i++) {
      gsaSubNav[i].addEventListener('click', function(){

        var utagArray = {
          'event_navigation_action':'navigation',
          'event_navigation_name':'subsection:selection',
          'event_navigation_browsing_method':'click',
          'article_parent_name':'subsection:' + isUndefined(utag_data.page_section) + ':'+this.textContent.trim()
        };
        gsaSendUtagData(utagArray); // send data to tealium

      }, false);

    }

  }
  // END:
  // CLICK ON SUB NAVIGATION


  // START:
  // CLICK ON A TAG FROM A TOPIC PAGE
  if ( gsaTagName = document.querySelectorAll(".tags--topic a") ) {
    for (i = 0;i < gsaTagName.length; i++) {
      gsaTagName[i].addEventListener('click', function(){

        var utagArray = {
          'event_navigation_action':'navigation',
          'event_navigation_name':'tag:selection',
          'event_navigation_browsing_method':'click',
          'article_parent_name':'tag:' + this.textContent.trim()
        };
        gsaSendUtagData(utagArray); // send data to tealium

      }, false);
    }
  }
  // END:
  // CLICK ON A TAG FROM A TOPIC PAGE


  // START:
  // CLICK ON A TAG FROM AN ARTICLE PAGE
  if ( gsaTagName = document.querySelectorAll(".tags--article a") ) {
    for (i = 0;i < gsaTagName.length; i++) {
      gsaTagName[i].addEventListener('click', function(){

        var utagArray = {
          'event_navigation_action':'navigation',
          'event_navigation_name':'topic:selection',
          'event_navigation_browsing_method':'click',
          'article_parent_name':'topic:' + this.textContent.trim()
        };
        gsaSendUtagData(utagArray); // send data to tealium

      }, false);
    }
  }
  // END:
  // CLICK ON A TAG FROM AN ARTICLE PAGE

  // START:
  // CLICK ON ANY TEASER
  // THIS HAS BEEN MODIFIED FROM THE OLD CODE
  // Adding a condition to check that it is not a single-post page,
  //   as we are having a separate tracking implementation for single-post page.
  if ( null === document.querySelector( '.single.single-post' ) ) {
    if ( gsaTeasers = document.querySelectorAll(".teaser-item a") ) {
      for (i=0; i < gsaTeasers.length; i++) {
        gsaTeasers[i].addEventListener('click', function(){

          var wName = "article"; // normal teaser
          if (this.parentNode.parentNode.className.indexOf("teaser__extra-large") > 0) {
            // hero teaser
            wName = "hero";
          }

          var teaserKicker = "";
          if (this.parentNode.parentNode.querySelector(".teaser__headline")) {
            teaserKicker = this.parentNode.parentNode.querySelector(".teaser__headline").textContent.trim();
          }

          var teaserTag = "";
          if (this.parentNode.parentNode.querySelector(".teaser-slug__copy")) {
            teaserTag = this.parentNode.parentNode.querySelector(".teaser-slug__copy").textContent.trim();
          }

          var teaserHeadline = this.parentNode.parentNode.querySelector(".teaser__subdeck").textContent.trim();

          var teaserSection = this.parentNode.parentNode.querySelector(".article-data__tag a").textContent.trim();


          var utagArray = {
            'event_navigation_action':'navigation',
            'event_navigation_name':'widget:'+wName,
            'event_navigation_browsing_method':'click',
            'widget_kicker':teaserKicker,
            'widget_tag':teaserTag,
            'widget_headline':teaserHeadline,
            'widget_section':teaserSection,
            'widget_type':'widget:'+wName
          };
          gsaSendUtagData(utagArray); // send data to tealium


        }, false);
      }
    }
  }
  // END:
  // CLICK ON ANY TEASER


  // START:
  // Click on Rail interaction
  // Adding a condition to check that it is not a single-post page,
  //   as we are having a separate tracking implementation for single-post page.
  if ( null === document.querySelector( '.single.single-post' ) ) {
    if ( gsaRail = document.querySelectorAll(".rail") ) {
      for (i=0; i < gsaRail.length; i++ ) {
        var gsaRailContainer = gsaRail[i].querySelector('.swiper-container');
        var gsaRailSwiper = gsaRailContainer.swiper;

        // Add Swiper js callback Event for Navigation event. On bullet button click and nav next-previous button click event.
        gsaRailSwiper.on('onSlideChangeEnd', function ( gsaRailSwiper ) {
          var currentPage, totalPage, gsaRailSwiperContainer, utagArray,
            gsaRailTitle = '';
          gsaRailSwiperContainer = gsaRailSwiper.container[0];
          if ( gsaRailSwiperContainer.querySelector( '.rail__title' ) ) {
            gsaRailTitle = gsaRailSwiperContainer.querySelector( '.rail__title' ).textContent.trim();
          }
          currentPage = gsaRailSwiper.snapIndex + 1; // Index start from 0.
          totalPage = gsaRailSwiper.snapGrid.length;

          utagArray = {
            'event_engagement_action':'engagement',
            'event_engagement_name':'rail:show segment',
            'event_engagement_browsing_method':'click',
            'article_parent_name':'rail:' + gsaRailTitle,
            'widget_segment':'segment:' + currentPage + ' of ' + totalPage,
          };
          gsaSendUtagData( utagArray ); // Send data to tealium.
        });

        // START:
        // Click a teaser within a rail
        // Adding a condition to check that it is not a single-post page,
        //   as we are having a separate tracking implementation for single-post page.
        var gsaTeasers = gsaRailContainer.querySelectorAll( '.rail__item' );

        for ( var j = 0; j < gsaTeasers.length; j++ ) {

          // get rail items's kicker text and headline text
          if ( gsaTeasers[j].parentNode.parentNode.querySelector(".rail__title") ) {
            gsaTeasers[j].gsaParentTitle = gsaTeasers[j].parentNode.parentNode.querySelector(".rail__title").textContent.trim();
          }
          if ( gsaTeasers[j].querySelector(".rail__item-headline") ) {
            gsaTeasers[j].gsaTeaserKickerText = gsaTeasers[j].querySelector(".rail__item-headline").textContent.trim();
          }
          if ( gsaTeasers[j].querySelector(".rail__item-sub") ) {
            gsaTeasers[j].gsaTeaserTitleText = gsaTeasers[j].querySelector(".rail__item-sub").textContent.trim();
          }

          gsaTeasers[j].addEventListener( 'click', function(){

            var utagArray = {
              'event_navigation_action':'navigation',
              'event_navigation_name':'rail:selection:article',
              'event_navigation_browsing_method':'click',
              'article_parent_name':'rail:' + this.gsaParentTitle,
              'widget_kicker':this.gsaTeaserKickerText,
              'widget_tag':'', // This isn't coming through yet so can't be passed.
              'widget_headline':this.gsaTeaserTitleText,
              'widget_section':this.gsaParentTitle,
              'widget_segment':'', // segment:x of t
              'widget_type':'rail:' + this.gsaParentTitle
            };
            gsaSendUtagData(utagArray); // send data to tealium

          }, false );
        }
        // END:
        // Click a teaser within a rail
      }
    }
  }
  // END:
  // Click on Rail interaction

  // START:
  // Jetpack sharing button click
  if ( gsaSharing = document.querySelectorAll(".sd-button") ) {
    for (var i=0; i < gsaSharing.length; i++ ) {

      gsaSharing[i].addEventListener('click', function(e){
        // detect if we are on a video page or not
        var gsaPageType;
        var isVideoPage = document.getElementsByClassName('social--video');
        if (isVideoPage.length > 0) {
          gsaPageType = "video";
        } else {
          gsaPageType = "article";
        }

        // sharing buttons have the first class as 'share-[network]'.
        var network = e.target.classList.item(0).substr(6,e.target.classList.item(0).length);
        if ( 'share-jetpack-whatsapp' === e.target.classList.item(0)) {
          // whatsapp has inconsistent naming convention.
          network = e.target.classList.item(0).substr(14,e.target.classList.item(0).length);
        }
        var utagArray = {
          'event_navigation_action':'navigation',
          'event_navigation_name':gsaPageType + ':social share:' + network,
          'event_navigation_browsing_method':'click',
          'event_social_action':'share start',
          'social_platform': network,
        };
        gsaSendUtagData(utagArray);
      }, false);
    }
  }
  // END:
  // Jetpack sharing button click

  // START:
  // Click footer sharing buttons
  if ( gsaSharingFooter = document.querySelectorAll("footer .follow-sun a") ) {
    for (i=0; i < gsaSharingFooter.length; i++ ) {

      gsaSharingFooter[i].addEventListener('click', function(){

        var gsaSharingName = this.getAttribute("class").replace('follow-','');

        var utagArray = {
          'event_navigation_action': 'navigation',
          'event_navigation_name':"footer:social share:" + gsaSharingName,
          'event_navigation_browsing_method':'click',
          'event_social_action':'share start',
          'social_platform':gsaSharingName
        };
        gsaSendUtagData(utagArray);
      }, false);
    }
  }
  // END:
  // Click footer sharing buttons

  // START:
  // VIDEO FULL SCREEN CHANGE
  function fullscreenHandler (e) {
    var state = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
    var event = state ? 'fullscreen' : 'fullscreen closed';

    var targetElement = e.target;
    if ( !isOoyala(targetElement) ) {
      return;
    }

    var parentElement = e.target.parentNode;
    var mediaID = parentElement.getAttribute("data-content-id");
    var videoID = parentElement.querySelector("video");

    // If no video is found (e.g. coming from an AD in an iFrame), then we don't want to interfere.
    if (!videoID)
      return;

    // LOOP THROUGH ALL sun-video-details CLASS'S AND GET THE ONE THAT MATCHES THIS CURRENT data-content-id with mediaID
    var mediaTitle, mediaCategory, mediaPubTime;

    // now get the videos details which is in a class with attribute of the same data-content-id as above
    if (gsaVideoDetails = document.getElementById('sun-video-details-' + mediaID)) {
      if (gsaVideoDetails.getAttribute("data-content-id") == mediaID) { // ignore if the content is different - for multiple players on one page
        mediaTitle = gsaVideoDetails.getAttribute("data-content-title") + ": " + gsaVideoDetails.getAttribute("data-content-details");
        mediaCategory = gsaVideoDetails.getAttribute("data-video-section");
        mediaPubTime = gsaVideoDetails.getAttribute("data-video-published");
      }
    }

    var utagArray = {
      'event_media_action':'media ' + event,
      'media_player':'ooyala',
      'media_id':isUndefined(mediaID),
      'media_name':isUndefined(mediaTitle),
      'media_category':isUndefined(mediaCategory),
      'media_publish_timestamp':isUndefined(mediaPubTime),
      'media_type':'video',
      'media_duration':getVideoDuration(videoID.duration, true),
      'media_segment':getVideoDuration(videoID.currentTime, false, videoID.duration),
      'media_offset':getVideoDuration(videoID.currentTime, true)
    };
    gsaSendUtagData(utagArray); // send data to tealium


  }

  document.addEventListener('fullscreenchange',       fullscreenHandler, false);
  document.addEventListener("webkitfullscreenchange", fullscreenHandler, false);
  document.addEventListener("mozfullscreenchange",    fullscreenHandler, false);

  // END:
  // VIDEO FULL SCREEN CHANGE

  // END:
  // VIDEO STATS

  // START:
  // CLICKING ON ARTICLE FROM SIDE RAIL
  var gsaSideRail = document.querySelectorAll( '.sidebar__section .teaser-item' );
  if ( gsaSideRail.length > 0 ) {
    for ( var i = 0; i < gsaSideRail.length; i++ ) {
      gsaSideRail[i].addEventListener( 'click', gsa_side_rail );
    }
  }

  // Implementing the GSA analytics for Side Rail.
  function gsa_side_rail() {
    var kicker       = '',
      slug         = '',
      headline     = '',
      section      = '',
      gsaRailTitle = 'no title',
      utagArray,
      position,
      gsaSideRail;
    if ( this.parentNode.querySelector( '.sidebar__title' ) ) {
      gsaRailTitle = this.parentNode.querySelector( '.sidebar__title' ).textContent.trim();
    }

    if ( this.querySelector( '.teaser__headline' ) ) {
      kicker = this.querySelector( '.teaser__headline' ).textContent.trim();
    }

    if ( this.querySelector( '.teaser-slug__copy' ) ) {
      slug = this.querySelector( '.teaser-slug__copy' ).textContent.trim();
    }

    if ( this.querySelector( '.teaser__subdeck' ) ) {
      headline = this.querySelector( '.teaser__subdeck' ).textContent.trim();
    }

    if ( this.querySelector( '.article-data__tag a' ) ) {
      section = this.querySelector( '.article-data__tag a' ).textContent.trim();
    }

    gsaSideRail = document.querySelectorAll( '.sidebar__section .teaser-item' );
    for ( var i = 0; i < gsaSideRail.length; i++ ) {
      if ( this == gsaSideRail[ i ] ) {
        position = i + 1;
        break;
      }
    }
    utagArray = {
      'event_navigation_action': 'navigation',
      'event_navigation_name': 'side rail:selection:article',
      'event_navigation_browsing_method': 'click',
      'article_parent_name': 'side rail:' + gsaRailTitle,
      'widget_kicker': kicker,
      'widget_tag': slug,
      'widget_headline': headline,
      'widget_section': section,
      'widget_type': 'side rail:' + gsaRailTitle,
      'widget_segment': 'position:' + position
    };
    gsaSendUtagData( utagArray ); // Send data to tealium.
  }
  // END:
  // CLICKING ON ARTICLE FROM SIDE RAIL

  // START:
  // CLICKING ON IN-BODY RAIL
  var gsaInBodyRail = document.querySelectorAll( '.article__content .rail' );
  if ( gsaInBodyRail.length > 0 ) {
    for ( i = 0; i < gsaInBodyRail.length; i++ ) {
      var swiperContainer = gsaInBodyRail[i].querySelector('.swiper-container');
      var swiper = swiperContainer.swiper;
      // Add Swiper js callback Event for Navigation event. On bullet button click and nav next-previous button click event.
      swiper.on('onSlideChangeEnd', function (swiper) {
        var currentPage, totalPage, swiperContainer, utagArray,
          gsaRailTitle = '';
        swiperContainer = swiper.container[0];
        if ( swiperContainer.querySelector( '.rail__title' ) ) {
          gsaRailTitle = swiperContainer.querySelector( '.rail__title' ).textContent.trim();
        }
        currentPage = swiper.snapIndex + 1; // Index start from 0.
        totalPage = swiper.snapGrid.length;

        utagArray = {
          'event_engagement_action': 'engagement',
          'event_engagement_name': 'in body-rail:show segment',
          'event_engagement_browsing_method': 'click',
          'article_parent_name': 'in-body rail:' + gsaRailTitle,
          'widget_segment': 'segment:' + currentPage + ' of ' + totalPage,
          'widget_type': 'in-body rail:' + gsaRailTitle
        };
        gsaSendUtagData( utagArray ); // Send data to tealium.
      });
      // Implementing analytics for rail item click.
      var gsaInBodyRailItem = swiperContainer.querySelectorAll( '.rail__item' );

      for ( var j = 0; j < gsaInBodyRailItem.length; j++ ) {
        gsaInBodyRailItem[ j ].addEventListener( 'click', gsa_rail_item );
      }
    }
  }

  // Implementing the GSA analytics for In-Body rail item click.
  function gsa_rail_item() {
    var kicker       = '',
      headline     = '',
      gsaRailTitle = '',
      utagArray,
      position,
      gsaRailItem;
    if ( this.parentNode.parentNode.querySelector( '.rail__title' ) ) {
      gsaRailTitle = this.parentNode.parentNode.querySelector( '.rail__title' ).textContent.trim();
    }
    if ( this.querySelector( '.rail__item-headline' ) ) {
      kicker = this.querySelector( '.rail__item-headline' ).textContent.trim();
    }
    if ( this.querySelector( '.rail__item-sub' ) ) {
      headline = this.querySelector( '.rail__item-sub' ).textContent.trim();
    }

    gsaRailItem = this.parentNode.querySelectorAll( '.rail__item' );
    for ( var i = 0; i < gsaRailItem.length; i++ ) {
      if ( this == gsaRailItem[ i ] ) {
        position = i + 1;
        break;
      }
    }

    utagArray = {
      'event_navigation_action': 'navigation',
      'event_navigation_name': 'in-body rail:selection:article',
      'event_navigation_browsing_method': 'click',
      'article_parent_name': 'in-body rail:' + gsaRailTitle,
      'widget_kicker': kicker,
      'widget_tag': "",
      'widget_headline': headline,
      'widget_section': "",
      'widget_type': 'in-body rail:' + gsaRailTitle,
      'widget_segment': 'position:' + position
    };
    gsaSendUtagData( utagArray ); // Send data to tealium.
  }

  // Implementing the GSA analytics for In-Body rail view change.
  function gsa_rail_navigation() {
    var x, y, parent, utagArray,
      gsaRailTitle = '';
    parent = this.parentNode;
    if ( this.parentNode.parentNode.querySelector( '.rail__title' ) ) {
      gsaRailTitle = this.parentNode.parentNode.querySelector( '.rail__title' ).textContent.trim();
    }
    if ( parent.getElementsByClassName( 'swiper-pagination-current' ).length ) {
      x = parent.getElementsByClassName( 'swiper-pagination-current' )[0].textContent.trim();
      y = parent.getElementsByClassName( 'swiper-pagination-total' )[0].textContent.trim();
    } else if ( x = parent.getElementsByClassName( 'swiper-pagination-bullet' ) ) {
      y = x.length;
      for ( var z = 0; z < x.length; z++ ) {
        if ( x[ z ].className.split(' ').indexOf( 'swiper-pagination-bullet-active' ) > -1 ) {
          x = z + 1;
          break;
        }
      }
    }
    utagArray = {
      'event_engagement_action': 'engagement',
      'event_engagement_name': 'in body-rail:show segment',
      'event_engagement_browsing_method': 'click',
      'article_parent_name': 'in-body rail:' + gsaRailTitle,
      'widget_segment': 'segment:' + x + ' of ' + y,
      'widget_type': 'in-body rail:' + gsaRailTitle
    };
    gsaSendUtagData( utagArray ); // Send data to tealium.
  }
  // END:
  // CLICKING ON IN-BODY RAIL

  // START:
  // CLICKING ON RAIL TITLE
  var gsaRailWidgetTitle = document.getElementsByClassName( 'rail__header--anchor' );
  if ( gsaRailWidgetTitle.length ) {
    for ( i = 0; i < gsaRailWidgetTitle.length; i++ ) {
      gsaRailWidgetTitle[ i ].addEventListener( 'click', function() {
        var title = this.parentNode.getElementsByClassName('rail__title')[0].textContent.trim();
        var utagArray = {
          'event_navigation_action': 'navigation',
          'event_navigation_name': 'rail:selection:title',
          'event_navigation_browsing_method': 'click',
          'article_parent_name': 'rail:' + title,
          'widget_type': 'rail:' + title
        };
        gsaSendUtagData( utagArray ); // Send data to tealium.
      });
    }
  }
  // END:
  // CLICKING ON RAIL TITLE
});
