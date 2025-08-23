/*------------------------------------*\
****************************************
  
  CUSTOM-TEMPLATES

  * use this file to edit reusuable
  * components such as meta, header, footer.
  * do not use for any other purpose.

  developed by the dev team, libraries 
  and cultural resources, university of
  calgary 2020.

****************************************
\*------------------------------------*/



/*------------------------------------*\
  #HEADER-REUSABLE
\*------------------------------------*/

/**
 * <header-lcr> template.
 */

class HeaderLcr extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<header class="c-header">

    <!-- drop in alert row start -->
    <aside class="c-header__alert l-container--full">
      <div class="c-header__alert-wrapper l-container">
        <button class="c-header__alert-button js-alert__button"></button>
        <div class="c-header__alert-con l-row--lg l-row--lg-nowrap l-row--align-items-lg-center js-alert__content">
          <span class="c-header__alert-icon fas fa-exclamation-triangle"></span>
          <p class="c-header__alert-timestamp l-order--md-1">
            <span class="c-header__alert-date">June 9, 2020</span>
            <span class="c-header__alert-time">14:55:04</span>
          </p>
          <p class="c-header__alert-message l-order--md-0">ALERT update: laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto. <a class="c-header__alert-link" href="#">Learn more</a></p>
        </div>
      </div>
    </aside>

    <!-- drop in toolbox row start -->
    <aside class="c-header__toolbox l-container--full">
      <div class="c-header__toolbox-wrapper l-container">
        <button class="c-header__toolbox-button js-toolbox__button"></button>

        <div class="c-header__toolbox-search">  
          <form class="c-header__toolbox-form" name="search-form" role="form" action="#">
            <label class="c-header__toolbox-search-label" for="search-input"></label>
            <input id="search-input" class="c-header__toolbox-searchbar" name="search-input" type="text" autocomplete="off" placeholder="Search LCR">
            <button class="c-header__toolbox-search-button" type="submit">
              <span class="c-header__toolbox-icon fas fa-search"></span>
            </button>
          </form>
        </div>

        <div class="c-header__toolbox-con js-toolbox__content l-row--lg">

          <div class="c-header__toolbox-links l-col--lg-4">
            <ul class="c-header__toolbox-links-list l-row">
              <li class="c-header__toolbox-links-item l-col--6 l-col--md-4">
                <a class="c-header__toolbox-links-link" href="https://my.ucalgary.ca/" target="_blank">My Ucalgary</a>
              </li>
              <li class="c-header__toolbox-links-item l-col--6 l-col--md-4">
                <a class="c-header__toolbox-links-link" href="https://office365.ucalgary.ca/" target="_blank">Webmail</a>
              </li>
              <li class="c-header__toolbox-links-item l-col--6 l-col--md-4">
                <a class="c-header__toolbox-links-link" href="https://www.ucalgary.ca/it/" target="_blank">IT</a>
              </li>
              <li class="c-header__toolbox-links-item l-col--6 l-col--md-4">
                <a class="c-header__toolbox-links-link" href="https://d2l.ucalgary.ca/" target="_blank">D2L</a>
              </li>
              <li class="c-header__toolbox-links-item l-col--6 l-col--md-4">
                <a class="c-header__toolbox-links-link" href="https://www.ucalgary.ca/iriss/" target="_blank">IRISS</a>
              </li>
              <li class="c-header__toolbox-links-item l-col--6 l-col--md-4">
                <a class="c-header__toolbox-links-link" href="https://myfacilities.ucalgary.ca/" target="_blank">ARCHIBUS</a>
              </li>
            </ul>
          </div>

          <div class="c-header__toolbox-topsites l-col--lg-8">
            <ul class="c-header__toolbox-topsites-list has-menu l-row">
              <li class="c-header__toolbox-topsites-item l-col--6 l-col--md-4 l-col--lg-2">
                <a class="c-header__toolbox-topsites-link" href="#" target="_blank">HR</a>
              </li>
              <li class="c-header__toolbox-topsites-item l-col--6 l-col--md-4 l-col--lg-2">
                <a class="c-header__toolbox-topsites-link" href="#">Library</a>
              </li>
              <li class="c-header__toolbox-topsites-item l-col--6 l-col--md-4 l-col--lg-2">
                <a class="c-header__toolbox-topsites-link" href="#" target="_blank">Go Dinos</a>
              </li>
              <li class="c-header__toolbox-topsites-item l-col--6 l-col--md-4 l-col--lg-2">
                <a class="c-header__toolbox-topsites-link" href="#" target="_blank">Class Schedule</a>
              </li>
              <li class="c-header__toolbox-topsites-item l-col--6 l-col--md-4 l-col--lg-2">
                <a class="c-header__toolbox-topsites-link" href="#" target="_blank">UCalgary Directory</a>
              </li>
              <li class="c-header__toolbox-topsites-item l-col--6 l-col--md-4 l-col--lg-2">
                <a class="c-header__toolbox-topsites-link" href="#" target="_blank">Continuing Education</a>
              </li>
              <li class="c-header__toolbox-topsites-item l-col--6 l-col--md-4 l-col--lg-2">
                <a class="c-header__toolbox-topsites-link" href="#" target="_blank">Careers</a>
              </li>
              <li class="c-header__toolbox-topsites-item l-col--6 l-col--md-4 l-col--lg-2">
                <a class="c-header__toolbox-topsites-link" href="#" target="_blank">Bookstore</a>
              </li>
              <li class="c-header__toolbox-topsites-item l-col--6 l-col--md-4 l-col--lg-2">
                <a class="c-header__toolbox-topsites-link" href="#" target="_blank">Active Living</a>
              </li>
              <li class="c-header__toolbox-topsites-item l-col--6 l-col--md-4 l-col--lg-2">
                <a class="c-header__toolbox-topsites-link" href="#" target="_blank">Academic Calendar</a>
              </li>
              <li class="c-header__toolbox-topsites-item l-col--6 l-col--md-4 l-col--lg-2">
                <a class="c-header__toolbox-topsites-link" href="#" target="_blank">UCalgary Maps</a>
              </li>
              <li class="c-header__toolbox-topsites-item l-col--6 l-col--md-4 l-col--lg-2 has-submenu">
                <a class="c-header__toolbox-topsites-link" href="#" aria-haspopup="true" aria-expanded="false">Faculty Websites</a>

                <ul class="c-header__toolbox-topsites-list-two" aria-label="submenu">
                  <li class="c-header__toolbox-topsites-item-two c-header__toolbox-topsites-item-two--back">
                    <a class="c-header__toolbox-topsites-link-two" href="javascript:void(0);"><span class="u-font-weight--normal">Viewing:</span> Faculty Websites</a>
                  </li>
                  <li class="c-header__toolbox-topsites-item-two">
                    <a class="c-header__toolbox-topsites-link-two" href="#" target="_blank">Cumming School of Medicine</a>
                  </li>
                  <li class="c-header__toolbox-topsites-item-two">
                    <a class="c-header__toolbox-topsites-link-two" href="#" target="_blank">Faculty of Arts</a>
                  </li>
                  <li class="c-header__toolbox-topsites-item-two">
                    <a class="c-header__toolbox-topsites-link-two" href="#" target="_blank">Faculty of Graduate Studies</a>
                  </li>
                  <li class="c-header__toolbox-topsites-item-two">
                    <a class="c-header__toolbox-topsites-link-two" href="#" target="_blank">Faculty of Kinesiology</a>
                  </li>
                  <li class="c-header__toolbox-topsites-item-two">
                    <a class="c-header__toolbox-topsites-link-two" href="#" target="_blank">Faculty of Law</a>
                  </li>
                  <li class="c-header__toolbox-topsites-item-two">
                    <a class="c-header__toolbox-topsites-link-two" href="#" target="_blank">Faculty of Nursing</a>
                  </li>
                  <li class="c-header__toolbox-topsites-item-two">
                    <a class="c-header__toolbox-topsites-link-two" href="#" target="_blank">Faculty of Nursing (Qatar)</a>
                  </li>
                  <li class="c-header__toolbox-topsites-item-two">
                    <a class="c-header__toolbox-topsites-link-two" href="#" target="_blank">Faculty of Science</a>
                  </li>
                  <li class="c-header__toolbox-topsites-item-two">
                    <a class="c-header__toolbox-topsites-link-two" href="#" target="_blank">Faculty of Social Work</a>
                  </li>
                  <li class="c-header__toolbox-topsites-item-two">
                    <a class="c-header__toolbox-topsites-link-two" href="#" target="_blank">Faculty of Veterinary Medicine</a>
                  </li>
                  <li class="c-header__toolbox-topsites-item-two">
                    <a class="c-header__toolbox-topsites-link-two" href="#" target="_blank">Haskayne School of Business</a>
                  </li>
                  <li class="c-header__toolbox-topsites-item-two">
                    <a class="c-header__toolbox-topsites-link-two" href="#" target="_blank">School of Architecture, Planning and Landscape</a>
                  </li>
                  <li class="c-header__toolbox-topsites-item-two">
                    <a class="c-header__toolbox-topsites-link-two" href="#" target="_blank">Schulich School of Engineering</a>
                  </li>
                  <li class="c-header__toolbox-topsites-item-two">
                    <a class="c-header__toolbox-topsites-link-two" href="#" target="_blank">Werklund School of Education</a>
                  </li>
                </ul>

              </li>
            </ul>
          </div>

        </div>
      </div>
    </aside>

    <!-- logo row start -->
    <div class="c-header__row-logo">
      <div class="c-header__logo-con l-container l-row l-row--align-items-center l-row--justify-content-center l-row--justify-content-lg-start">
        <a href="https://ucalgary.ca/" target="_blank"><img class="c-header__ucalgary-logo" src="/images/UCalgary.svg" alt="University of Calgary" width="200"></a>
      </div>
    </div>

    <!-- navigation row start -->
    <div class="c-header__row-nav">
      <div class="c-header__sites l-container l-row l-row--align-items-center l-row--justify-content-lg-between">
        <h2 class="c-header__top-site"><a href="https://library.ucalgary.ca" target="_blank">Libraries &amp; Cultural Resources</a></h2>
        <h2 class="c-header__site"><a href="/index.html">LCR Design System</a></h2>
      </div>

      <nav class="c-header__main-nav" aria-label="Main Navigation">
        <div class="l-container">
          <!-- main menu button open -->
          <button class="c-header__button js-main-menu__button">
            <span class="c-header__button-icon"></span>
          </button>
          <ul class="c-header__main-nav-list has-menu l-row l-row--column l-row--lg-row js-main-menu__content">
            <li class="c-header__main-nav-item">
              <a class="c-header__main-nav-link c-header__link-one" href="/get-started.html">Get started</a>
            </li>
            <li class="c-header__main-nav-item">
              <a class="c-header__main-nav-link c-header__link-two" href="/styles.html">Styles</a>
            </li>
            <li class="c-header__main-nav-item">
              <a class="c-header__main-nav-link c-header__link-three" href="/components.html">Components</a>
            </li>
            <li class="c-header__main-nav-item">
              <a class="c-header__main-nav-link c-header__link-four" href="/patterns.html">Patterns</a>
            </li>
            <li class="c-header__main-nav-item has-submenu">
              <a class="c-header__main-nav-link c-header__link-five"  href="#" aria-haspopup="true" aria-expanded="false" tabindex="0">2 level default nav</a>

              <ul class="c-header__main-nav-list-two" aria-label="submenu">
                <li class="c-header__main-nav-item-two">
                  <a class="c-header__main-nav-link-two" href="#">Overview - 2 level nav</a>
                </li>
                <li class="c-header__main-nav-item-two">
                  <a class="c-header__main-nav-link-two" href="#">2nd level item two</a>
                </li>
                <li class="c-header__main-nav-item-two">
                  <a class="c-header__main-nav-link-two" href="#">2nd level item three</a>
                </li>
                <li class="c-header__main-nav-item-two">
                  <a class="c-header__main-nav-link-two" href="#">2nd level item four</a>
                </li>
                <li class="c-header__main-nav-item-two">
                  <a class="c-header__main-nav-link-two" href="#">2nd level item five</a>
                </li>
                <li class="c-header__main-nav-item-two">
                  <a class="c-header__main-nav-link-two" href="#">2nd level item six</a>
                </li>
                <li class="c-header__main-nav-item-two">
                  <a class="c-header__main-nav-link-two" href="#">2nd level item seven</a>
                </li>
                <li class="c-header__main-nav-item-two">
                  <a class="c-header__main-nav-link-two" href="#">2nd level item eight</a>
                </li>
                <li class="c-header__main-nav-item-two">
                  <a class="c-header__main-nav-link-two" href="#">2nd level item nine</a>
                </li>
                <li class="c-header__main-nav-item-two">
                  <a class="c-header__main-nav-link-two" href="#">2nd level item ten</a>
                </li>
                <li class="c-header__main-nav-item-two">
                  <a class="c-header__main-nav-link-two" href="#">2nd level item eleven</a>
                </li>

                <!-- add back link like this on submenus only for mobile -->
                <li class="c-header__main-nav-item-two">
                  <a href="javascript:void(0);" class="c-header__main-nav-link-two">Back</a>
                </li>
              </ul>
            </li>

            <li class="c-header__main-nav-item has-submenu">
              <a class="c-header__main-nav-link c-header__link-six" aria-haspopup="true" aria-expanded="false" tabindex="0">3 level default nav</a>

              <ul class="c-header__main-nav-list-two" aria-label="submenu">
                <li class="c-header__main-nav-item-two">
                  <a class="c-header__main-nav-link-two" href="#">Overview - 3 level nav</a>
                </li>
                <li class="c-header__main-nav-item-two has-submenu">
                  <a class="c-header__main-nav-link-two"  aria-haspopup="true" aria-expanded="false" href="#">2nd level item two</a>
                  
                  <ul class="c-header__main-nav-list-three" aria-label="submenu">
                    <li class="c-header__main-nav-item-three">
                      <a class="c-header__main-nav-link-three" href="#">3rd level item one</a>
                    </li>
                    <li class="c-header__main-nav-item-three">
                      <a class="c-header__main-nav-link-three" href="#">3rd level item two and it's really long to test wrapping</a>
                    </li>
                    <li class="c-header__main-nav-item-three">
                      <a class="c-header__main-nav-link-three" href="#">3rd level item three</a>
                    </li>
                    <li class="c-header__main-nav-item-three">
                      <a class="c-header__main-nav-link-three" href="#">3rd level item four</a>
                    </li>

                    <!-- add back link like this on submenus only for mobile -->
                    <li class="c-header__main-nav-item-three">
                      <a href="javascript:void(0);" class="c-header__main-nav-link-two">Back</a>
                    </li>
                  </ul>
                </li>

                <li class="c-header__main-nav-item-two has-submenu">
                  <a class="c-header__main-nav-link-two" aria-haspopup="true" aria-expanded="false" href="#">2nd level item three</a>

                  <ul class="c-header__main-nav-list-three" aria-label="submenu">
                    <li class="c-header__main-nav-item-three">
                      <a class="c-header__main-nav-link-three" href="#">3rd level item one</a>
                    </li>
                    <li class="c-header__main-nav-item-three">
                      <a class="c-header__main-nav-link-three" href="#">3rd level item two</a>
                    </li>
                    <li class="c-header__main-nav-item-three">
                      <a class="c-header__main-nav-link-three" href="#">3rd level item three</a>
                    </li>
                    <li class="c-header__main-nav-item-three">
                      <a class="c-header__main-nav-link-three" href="#">3rd level item four</a>
                    </li>

                    <!-- add back link like this on submenus only for mobile -->
                    <li class="c-header__main-nav-item-three">
                      <a href="javascript:void(0);" class="c-header__main-nav-link-two">Back</a>
                    </li>
                  </ul>
                </li>

                <li class="c-header__main-nav-item-two has-submenu">
                  <a class="c-header__main-nav-link-two" aria-haspopup="true" aria-expanded="false" href="#">2nd level item four</a>

                  <ul class="c-header__main-nav-list-three" aria-label="submenu">
                    <li class="c-header__main-nav-item-three">
                      <a class="c-header__main-nav-link-three" href="#">3rd level item one</a>
                    </li>
                    <li class="c-header__main-nav-item-three">
                      <a class="c-header__main-nav-link-three" href="#">3rd level item two</a>
                    </li>
                    <li class="c-header__main-nav-item-three">
                      <a class="c-header__main-nav-link-three" href="#">3rd level item three</a>
                    </li>
                    <li class="c-header__main-nav-item-three">
                      <a class="c-header__main-nav-link-three" href="#">3rd level item four</a>
                    </li>

                    <!-- add back link like this on submenus only for mobile -->
                    <li class="c-header__main-nav-item-three">
                      <a href="javascript:void(0);" class="c-header__main-nav-link-two">Back</a>
                    </li>
                  </ul>
                </li>

                <li class="c-header__main-nav-item-two has-submenu">
                  <a class="c-header__main-nav-link-two" aria-haspopup="true" aria-expanded="false" href="#">2nd level item five</a>

                  <ul class="c-header__main-nav-list-three" aria-label="submenu">
                    <li class="c-header__main-nav-item-three">
                      <a class="c-header__main-nav-link-three" href="#">3rd level item one</a>
                    </li>
                    <li class="c-header__main-nav-item-three">
                      <a class="c-header__main-nav-link-three" href="#">3rd level item two</a>
                    </li>
                    <li class="c-header__main-nav-item-three">
                      <a class="c-header__main-nav-link-three" href="#">3rd level item three</a>
                    </li>
                    <li class="c-header__main-nav-item-three">
                      <a class="c-header__main-nav-link-three" href="#">3rd level item four</a>
                    </li>

                    <!-- add back link like this on submenus only for mobile -->
                    <li class="c-header__main-nav-item-three">
                      <a href="javascript:void(0);" class="c-header__main-nav-link-two">Back</a>
                    </li>
                  </ul>
                </li>

                <!-- add back link like this on submenus only for mobile -->
                <li class="c-header__main-nav-item-two">
                  <a href="javascript:void(0);" class="c-header__main-nav-link-two">Back</a>
                </li>
              </ul>

            </li>
            <li class="c-header__main-nav-item has-submenu">
              <a class="c-header__main-nav-link c-header__link-seven" href="#" aria-haspopup="true" aria-expanded="false">4 level mega nav</a>

              <ul class="c-header__main-nav-list-two c-header__main-nav-list-two--mega-menu" aria-label="submenu">
                <li class="c-header__main-nav-item-two">
                  <a class="c-header__main-nav-link-two" href="#">Overview - 4 level nav</a>
                </li>
                <li class="c-header__main-nav-item-two has-submenu">
                  <a class="c-header__main-nav-link-two" href="#" aria-haspopup="true" aria-expanded="false">2nd level item two</a>
                  
                  <ul class="c-header__main-nav-list-three" aria-label="submenu">
                    <li class="c-header__main-nav-item-three">
                      <a class="c-header__main-nav-link-three" href="#">Overview - 3rd level one</a>
                    </li>
                    <li class="c-header__main-nav-item-three">
                      <a class="c-header__main-nav-link-three" href="#">3rd level item two and it's really long to test wrapping</a>
                    </li>
                    <li class="c-header__main-nav-item-three has-submenu">
                      <a class="c-header__main-nav-link-three" href="#" aria-haspopup="true" aria-expanded="false">3rd level item three</a>

                      <ul class="c-header__main-nav-list-four" aria-label="submenu">
                        <li class="c-header__main-nav-item-four">
                          <a class="c-header__main-nav-link-four" href="#">4th level item one</a>
                        </li>
                        <li class="c-header__main-nav-item-four">
                          <a class="c-header__main-nav-link-four" href="#">4th level item two and it's really long to test wrapping</a>
                        </li>
                        <li class="c-header__main-nav-item-four">
                          <a class="c-header__main-nav-link-four" href="#">4th level item three</a>
                        </li>

                        <!-- add back link like this on submenus only for mobile -->
                        <li class="c-header__main-nav-item-four">
                          <a href="javascript:void(0);" class="c-header__main-nav-link-two">Back</a>
                        </li>
                      </ul>

                    </li>
                    <li class="c-header__main-nav-item-three">
                      <a class="c-header__main-nav-link-three" href="#">3rd level item four</a>
                    </li>
                    <li class="c-header__main-nav-item-three">
                      <a class="c-header__main-nav-link-three" href="#">3rd level item five</a>
                    </li>

                    <!-- add back link like this on submenus only for mobile -->
                    <li class="c-header__main-nav-item-three">
                      <a href="javascript:void(0);" class="c-header__main-nav-link-two">Back</a>
                    </li>
                  </ul>
  
                </li>
                <li class="c-header__main-nav-item-two has-submenu">
                  <a class="c-header__main-nav-link-two" href="#" aria-haspopup="true" aria-expanded="false">2nd level item three and it's extra long to test out the ellipsis</a>

                  <ul class="c-header__main-nav-list-three" aria-label="submenu">
                    <li class="c-header__main-nav-item-three">
                      <a class="c-header__main-nav-link-three" href="#">Overview - 3rd level two</a>
                    </li>
                    <li class="c-header__main-nav-item-three">
                      <a class="c-header__main-nav-link-three" href="#">3rd level item two</a>
                    </li>
                    <li class="c-header__main-nav-item-three">
                      <a class="c-header__main-nav-link-three" href="#">3rd level item three</a>
                    </li>
                    <li class="c-header__main-nav-item-three">
                      <a class="c-header__main-nav-link-three" href="#">3rd level item four</a>
                    </li>
                    <li class="c-header__main-nav-item-three">
                      <a class="c-header__main-nav-link-three" href="#">3rd level item five</a>
                    </li>
                    <li class="c-header__main-nav-item-three">
                      <a class="c-header__main-nav-link-three" href="#">3rd level item six</a>
                    </li>
                    <li class="c-header__main-nav-item-three">
                      <a class="c-header__main-nav-link-three" href="#">3rd level item seven</a>
                    </li>
                    <li class="c-header__main-nav-item-three">
                      <a class="c-header__main-nav-link-three" href="#">3rd level item eight</a>
                    </li>
                    <li class="c-header__main-nav-item-three">
                      <a class="c-header__main-nav-link-three" href="#">3rd level item nine</a>
                    </li>

                    <!-- add back link like this on submenus only for mobile -->
                    <li class="c-header__main-nav-item-three">
                      <a href="javascript:void(0);" class="c-header__main-nav-link-two">Back</a>
                    </li>
                  </ul>

                </li>
                <li class="c-header__main-nav-item-two has-submenu">
                  <a class="c-header__main-nav-link-two" href="#" aria-haspopup="true" aria-expanded="false">2nd level item four</a>

                  <ul class="c-header__main-nav-list-three" aria-label="submenu">
                    <li class="c-header__main-nav-item-three">
                      <a class="c-header__main-nav-link-three" href="#">Overview - 3rd level three</a>
                    </li>
                    <li class="c-header__main-nav-item-three">
                      <a class="c-header__main-nav-link-three" href="#">3rd level item two and it's really long to test wrapping</a>
                    </li>
                    <li class="c-header__main-nav-item-three">
                      <a class="c-header__main-nav-link-three" href="#">3rd level item three</a>
                    </li>
                    <li class="c-header__main-nav-item-three">
                      <a class="c-header__main-nav-link-three" href="#">3rd level item four</a>
                    </li>

                    <!-- add back link like this on submenus only for mobile -->
                    <li class="c-header__main-nav-item-three">
                      <a href="javascript:void(0);" class="c-header__main-nav-link-two">Back</a>
                    </li>
                  </ul>

                </li>
                <li class="c-header__main-nav-item-two has-submenu">
                  <a class="c-header__main-nav-link-two" href="#" aria-haspopup="true" aria-expanded="false">2nd level item five</a>

                  <ul class="c-header__main-nav-list-three" aria-label="submenu">
                    <li class="c-header__main-nav-item-three">
                      <a class="c-header__main-nav-link-three" href="#">Overview - 3rd level four</a>
                    </li>
                    <li class="c-header__main-nav-item-three">
                      <a class="c-header__main-nav-link-three" href="#">3rd level item two</a>
                    </li>
                    <li class="c-header__main-nav-item-three">
                      <a class="c-header__main-nav-link-three" href="#">3rd level item three and it's really long to test wrapping</a>
                    </li>
                    <li class="c-header__main-nav-item-three">
                      <a class="c-header__main-nav-link-three" href="#">3rd level item four</a>
                    </li>
                    <li class="c-header__main-nav-item-three">
                      <a class="c-header__main-nav-link-three" href="#">3rd level item five</a>
                    </li>

                    <!-- add back link like this on submenus only for mobile -->
                    <li class="c-header__main-nav-item-three">
                      <a href="javascript:void(0);" class="c-header__main-nav-link-two">Back</a>
                    </li>
                  </ul>

                </li>

                <!-- add back link like this on submenus only for mobile -->
                <li class="c-header__main-nav-item-two">
                  <a href="javascript:void(0);" class="c-header__main-nav-link-two">Back</a>
                </li>
              </ul>

            </li>
          </ul>

        </div>
      </nav>
    </div>
  </header>`;
  }
}
    
customElements.define('header-lcr', HeaderLcr);





/*------------------------------------*\
  #FOOTER-REUSABLE
\*------------------------------------*/

/**
 * <footer-lcr> template. 
 */

class FooterLcr extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<footer class="c-footer">
    <div class="l-container l-row l-row--column l-row--lg-row l-row--justify-content-around l-row--justify-content-lg-between l-row--align-items-center u-text-align--center u-text-align--lg-left">

      <!-- footer section one start -->
      <section class="c-footer__one l-order--lg-1">
        <a href="https://ucalgary.ca/giving/campaign-success" target="_blank"><img src="/images/energized-by-you.svg" alt="Energized by you."></a>
      </section>

      <!-- footer section two start -->
      <section class="c-footer__two l-order--lg-0">

        <!-- social links start -->
        <div class="c-footer__social">
          <ul class="c-footer__social-list l-row l-row--nowrap l-row--align-items-center l-row--justify-content-around">
            <li>
              <a class="c-footer__social-button c-footer__social-button--fb" href="https://www.facebook.com/universityofcalgary" target="_blank">
                <svg class="c-footer__social-img" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" xml:space="preserve" data-inject-url="/images/social-icon-facebook-round.svg">
                  <path class="background" fill="#ffffff" d="M16,1A15,15,0,1,0,31,16,15,15,0,0,0,16,1Z"></path>
                  <path class="icon" fill="#3d3d3d" d="M19.73,16H17.29v8.7H13.67V16H12V12.93h1.72v-2a3.39,3.39,0,0,1,3.65-3.65H20v3H18.06a0.74,0.74,0,0,0-.77.84v1.81H20Z"></path>
                  <path class="border" fill="#3d3d3d" d="M16,31.5C7.45,31.5,0.5,24.55,0.5,16S7.45,0.5,16,0.5S31.5,7.45,31.5,16S24.55,31.5,16,31.5z M16,1.5 C8,1.5,1.5,8,1.5,16S8,30.5,16,30.5S30.5,24,30.5,16S24,1.5,16,1.5z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a class="c-footer__social-button c-footer__social-button--twitter" href="https://www.twitter.com/ucalgary" target="_blank">
                <svg class="c-footer__social-img" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" xml:space="preserve" data-inject-url="/images/social-icon-twitter-round.svg">
                  <path class="background" fill="#ffffff" d="M16,1A15,15,0,1,0,31,16,15,15,0,0,0,16,1Z"></path>
                  <path class="icon" fill="#3d3d3d" d="M22.69,12.57c0,0.15,0,.3,0,0.45A9.82,9.82,0,0,1,7.59,21.29a6.94,6.94,0,0,0,5.11-1.43,3.46,3.46,0,0,1-3.22-2.4,3.31,3.31,0,0,0,.65.06A3.39,3.39,0,0,0,11,17.4,3.45,3.45,0,0,1,8.26,14a0.29,0.29,0,0,1,0,0,3.41,3.41,0,0,0,1.56.43A3.45,3.45,0,0,1,8.76,9.79a9.8,9.8,0,0,0,7.11,3.61,3.46,3.46,0,0,1,5.88-3.15A6.83,6.83,0,0,0,24,9.41a3.47,3.47,0,0,1-1.52,1.91,6.89,6.89,0,0,0,2-.54,7,7,0,0,1-1.72,1.78"></path>
                  <path class="border" fill="#3d3d3d" d="M16,31.5C7.45,31.5,0.5,24.55,0.5,16S7.45,0.5,16,0.5S31.5,7.45,31.5,16S24.55,31.5,16,31.5z M16,1.5 C8,1.5,1.5,8,1.5,16S8,30.5,16,30.5S30.5,24,30.5,16S24,1.5,16,1.5z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a class="c-footer__social-button c-footer__social-button--linkedin" href="https://www.linkedin.com/company/university-of-calgary" target="_blank">
                <svg class="c-footer__social-img" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" xml:space="preserve" data-inject-url="/images/social-icon-linkedin-round.svg">
                  <path class="background" fill="#ffffff" d="M16,1A15,15,0,1,0,31,16,15,15,0,0,0,16,1Z"></path>
                  <path class="icon" fill="#3d3d3d" d="M17,14.78l0,0v0h0ZM24.39,24h-3.6V18.21c0-1.44-.52-2.43-1.82-2.43a2,2,0,0,0-1.85,1.31A2.41,2.41,0,0,0,17,18v6h-3.6s0-9.73,0-10.74H17v1.52A3.57,3.57,0,0,1,20.25,13c2.37,0,4.14,1.53,4.14,4.83V24ZM9.62,11.75h0A1.86,1.86,0,1,1,9.65,8a1.86,1.86,0,1,1,0,3.71M11.42,24H7.83V13.22h3.6V24Z"></path>
                  <path class="border" fill="#3d3d3d" d="M16,31.5C7.45,31.5,0.5,24.55,0.5,16S7.45,0.5,16,0.5S31.5,7.45,31.5,16S24.55,31.5,16,31.5z M16,1.5 C8,1.5,1.5,8,1.5,16S8,30.5,16,30.5S30.5,24,30.5,16S24,1.5,16,1.5z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a class="c-footer__social-button c-footer__social-button--insta" href="https://www.instagram.com/ucalgary" target="_blank">
                <svg class="c-footer__social-img" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" xml:space="preserve" data-inject-url="/images/social-icon-instagram-round.svg">
                  <path class="background" fill="#ffffff" d="M16,1A15,15,0,1,0,31,16,15,15,0,0,0,16,1Z"></path>
                  <path class="icon" fill="#3d3d3d" d="M21.23,7.47H10.77a3.3,3.3,0,0,0-3.3,3.3V21.23a3.3,3.3,0,0,0,3.3,3.3H21.23a3.3,3.3,0,0,0,3.3-3.3V10.77A3.3,3.3,0,0,0,21.23,7.47Zm0.95,2h0.38v2.89H19.67V9.44h2.52Zm-8.61,4.82A3,3,0,1,1,13,16,3,3,0,0,1,13.57,14.25Zm9.3,7a1.63,1.63,0,0,1-1.63,1.63H10.77a1.63,1.63,0,0,1-1.63-1.63v-7h2.55a4.67,4.67,0,1,0,8.64,0h2.55v7Z"></path>
                  <path class="border" fill="#3d3d3d" d="M16,31.5C7.45,31.5,0.5,24.55,0.5,16S7.45,0.5,16,0.5S31.5,7.45,31.5,16S24.55,31.5,16,31.5z M16,1.5 C8,1.5,1.5,8,1.5,16S8,30.5,16,30.5S30.5,24,30.5,16S24,1.5,16,1.5z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a class="c-footer__social-button c-footer__social-button--yt" href="https://www.youtube.com/c/UCalgaryCa" target="_blank">
                <svg class="c-footer__social-img" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" xml:space="preserve" data-inject-url="/images/social-icon-youtube-round.svg">
                  <path class="background" fill="#ffffff" d="M16,1A15,15,0,1,0,31,16,15,15,0,0,0,16,1Z"></path>
                  <g>
                    <path class="icon" fill="#3d3d3d" d="M17.65,18.35a0.29,0.29,0,0,0-.29.22,2.63,2.63,0,0,0,0,.61v1.24a2.33,2.33,0,0,0,0,.59,0.31,0.31,0,0,0,.3.23A0.3,0.3,0,0,0,18,21a2.56,2.56,0,0,0,0-.64V19.17a2.13,2.13,0,0,0,0-.59A0.3,0.3,0,0,0,17.65,18.35Z"></path>
                    <path class="icon" fill="#3d3d3d" d="M12.34,11.55v2.5h0.81V11.52L14.05,8H13.36c-0.2.93-.46,1.82-0.6,2.46L12,8H11.3l1,3.52v0Z"></path>
                    <path class="icon" fill="#3d3d3d" d="M20.83,18.11a0.3,0.3,0,0,0-.3.2,0.59,0.59,0,0,0,0,.38v0.68h0.66V18.7a0.62,0.62,0,0,0,0-.36A0.29,0.29,0,0,0,20.83,18.11Z"></path>
                    <path class="icon" fill="#3d3d3d" d="M14.46,13.74a0.8,0.8,0,0,0,.38.29,1.73,1.73,0,0,0,.66.11A1.37,1.37,0,0,0,16.1,14a0.94,0.94,0,0,0,.41-0.36,1.46,1.46,0,0,0,.21-0.54,7.42,7.42,0,0,0,.05-1V11.33a4,4,0,0,0-.06-0.78,1.42,1.42,0,0,0-.2-0.47,1.07,1.07,0,0,0-.41-0.36,1.41,1.41,0,0,0-.66-0.15,1.22,1.22,0,0,0-.75.22,1.15,1.15,0,0,0-.38.57,4.13,4.13,0,0,0-.11,1.08v0.84a5.23,5.23,0,0,0,.07,1A1.32,1.32,0,0,0,14.46,13.74Zm0.68-2.81a1.82,1.82,0,0,1,.05-0.59,0.3,0.3,0,0,1,.58,0,2.12,2.12,0,0,1,0,.59v1.93a1.57,1.57,0,0,1-.05.53,0.3,0.3,0,0,1-.29.22,0.3,0.3,0,0,1-.29-0.24,1.73,1.73,0,0,1-.05-0.57V10.93Z"></path>
                    <path class="icon" fill="#3d3d3d" d="M23.09,16.57a2.43,2.43,0,0,0-2.21-2.1c-3.26-.14-6.5-0.14-9.75,0a2.45,2.45,0,0,0-2.22,2.1,38.48,38.48,0,0,0,0,5.24,2.44,2.44,0,0,0,2.22,2.09c3.25,0.14,6.49.14,9.75,0a2.42,2.42,0,0,0,2.21-2.09A38.15,38.15,0,0,0,23.09,16.57ZM13,16.9H12.07v5.18h-1V16.9H10.18v-1H13v1Zm2.67,5.19H14.73V21.82l-0.28-.07a0.8,0.8,0,0,1-.27.32,0.56,0.56,0,0,1-.34.1,0.66,0.66,0,0,1-.37-0.1,0.54,0.54,0,0,1-.21-0.25,1.2,1.2,0,0,1-.1-0.37c0-.14,0-0.42,0-0.84V17.4h0.92v2.95a3.72,3.72,0,0,0,0,.72,0.29,0.29,0,0,0,.3.22,0.3,0.3,0,0,0,.31-0.23,5.2,5.2,0,0,0,0-.75V17.4h0.92v4.68Zm3.24-3.38v2.44s0,0.27-.05.44a0.78,0.78,0,0,1-.23.42,0.57,0.57,0,0,1-.41.17,0.54,0.54,0,0,1-.32-0.1,1.07,1.07,0,0,1-.29-0.33l-0.2-.33-0.07.38-0.05.28H16.4V15.92h0.91v2.23l0.28-.43a1,1,0,0,1,.29-0.3,0.6,0.6,0,0,1,.32-0.09,0.74,0.74,0,0,1,.37.08,0.6,0.6,0,0,1,.22.23,0.79,0.79,0,0,1,.09.32A3.22,3.22,0,0,1,18.9,18.71Zm3.16,1.17H20.49v1a1.45,1.45,0,0,0,0,.48,0.3,0.3,0,0,0,.29.19,0.33,0.33,0,0,0,.33-0.22,1.85,1.85,0,0,0,.05-0.54V20.32h0.85v0.22a3.84,3.84,0,0,1,0,.67,1.43,1.43,0,0,1-.2.47,1,1,0,0,1-.37.37,1.3,1.3,0,0,1-.59.12,1.54,1.54,0,0,1-.61-0.12,0.94,0.94,0,0,1-.4-0.33,1.31,1.31,0,0,1-.21-0.47,3.65,3.65,0,0,1-.06-0.64V19.18A3.3,3.3,0,0,1,19.71,18a1,1,0,0,1,.41-0.5,1.24,1.24,0,0,1,.66-0.17,1.3,1.3,0,0,1,.76.21,1.08,1.08,0,0,1,.41.56,4.57,4.57,0,0,1,.13,1.24v0.51Z"></path>
                    <path class="icon" fill="#3d3d3d" d="M17.58,13.79a0.58,0.58,0,0,0,.22.26,0.68,0.68,0,0,0,.39.1A0.63,0.63,0,0,0,18.56,14a0.86,0.86,0,0,0,.26-0.33l0.29,0.12v0.22h1V9.59H19.11v2.93a2.18,2.18,0,0,1,0,.65,0.32,0.32,0,0,1-.32.27,0.31,0.31,0,0,1-.31-0.26,1.5,1.5,0,0,1,0-.62v-3H17.48v2.95c0,0.44,0,.74,0,0.89A1.34,1.34,0,0,0,17.58,13.79Z"></path>
                  </g>
                  <path class="border" fill="#3d3d3d" d="M16,31.5C7.45,31.5,0.5,24.55,0.5,16S7.45,0.5,16,0.5S31.5,7.45,31.5,16S24.55,31.5,16,31.5z M16,1.5 C8,1.5,1.5,8,1.5,16S8,30.5,16,30.5S30.5,24,30.5,16S24,1.5,16,1.5z"></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>

        <!-- legal links start -->
        <div class="c-footer__legal">
          <ul class="c-footer__legal-list">
            <li><a href="https://www.ucalgary.ca/live-uc-ucalgary-site/sites/default/files/ucgy/groups/Marketing/digital-privacy-statement.pdf" target="_blank">Digital Privacy Statement</a></li>
            <li><a href="https://www.ucalgary.ca/policies/files/policies/privacy-policy.pdf" target="_blank">Privacy Policy</a></li>
            <li><a href="https://ucalgarysurvey.qualtrics.com/SE/?SID=SV_2lcAqNmIryzHpZ3" target="_blank">Website feedback</a></li>
          </ul>
        </div>

      </section>
      
      <!-- footer section three start -->
      <section class="c-footer__three l-order--lg-2 u-text-align--center u-text-align--lg-right">
        <p class="c-footer__address">
          University of Calgary<br>
          2500 University Drive NW<br>
          Calgary Alberta <span class="c-footer__postcode">T2N 1N4</span><br>
          CANADA
        </p>
        <p class="c-footer__copyright">Copyright &copy; <script>document.write(new Date().getFullYear())</script></p>
      </section>

    </div>
  </footer>`;
  }
}
    
customElements.define('footer-lcr', FooterLcr);





/*------------------------------------*\
  #PREFOOTER-REUSABLE
\*------------------------------------*/

/**
 * <prefooter-lcr> template.
 */

class PrefooterLcr extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<section class="c-prefooter l-container--full">
              <div class="c-prefooter__con l-container">
                <!-- pre-footer row starts -->
                <div class="c-prefooter__row">
                  <!-- details pre-footer starts -->
                  <div class="c-prefooter__deets">

                    <svg class="c-prefooter__icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve" data-inject-url="/images/icon-question-round.svg">
                      <path class="background" fill="#ffffff" d="M16,1C7.7,1,1,7.7,1,16s6.7,15,15,15s15-6.7,15-15S24.3,1,16,1z"></path>
                      <g>
                        <path class="icon" fill="#3d3d3d" d="M15.4,21.9c-0.9,0-1.6,0.7-1.6,1.6s0.7,1.6,1.6,1.6c0.9,0,1.6-0.7,1.6-1.6S16.3,21.9,15.4,21.9z"></path>
                        <path class="icon" fill="#3d3d3d" d="M19.2,9.3C17.9,8,14.8,8,13,9.1c-0.7,0.4-1.6,1.3-1.6,3c0,0.5,0.4,0.9,0.9,0.9s0.9-0.4,0.9-0.9 c0-1,0.5-1.4,0.8-1.6c0.9-0.5,3.1-0.6,3.8,0.1c0.7,0.6,1,2.3,0,3.5c-0.6,0.6-1.1,1.2-1.6,1.7c-0.6,0.6-1.1,1.1-1.3,1.5 c-0.4,0.7-0.4,1.1-0.4,1.9v0.2c0,0.5,0.4,0.9,0.9,0.9s0.9-0.4,0.9-0.8v-0.2c0-0.7,0-0.8,0.2-1.1c0.1-0.3,0.5-0.7,1-1.2 s1.1-1.1,1.7-1.8C20.8,13.3,20.5,10.6,19.2,9.3z"></path>
                      </g>
                      <path class="border" fill="#3d3d3d" d="M16,31.5c-8.6,0-15.5-7-15.5-15.5S7.4,0.5,16,0.5S31.5,7.4,31.5,16S24.5,31.5,16,31.5z M16,1.5 C8,1.5,1.5,8,1.5,16S8,30.5,16,30.5S30.5,24,30.5,16S24,1.5,16,1.5z"></path>
                    </svg>

                    <h3 class="c-prefooter__title">LCR Design System</h3>
                    <ul class="c-prefooter__links">
                      <li><a class="" href="#">Ask Dev Team</a></li>
                      <li><a class="" href="#">Connect with Dev Team</a></li>
                      <li><a class="" href="#">123.456.7890</a></li>
                    </ul>
                  </div>
                  <!-- social pre-footer starts -->
                  <div class="c-prefooter__social">
                    <ul class="c-prefooter__social-links">
                      <li>
                        <a class="c-prefooter__social-link" href="#">
                          <svg class="c-prefooter__social-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" xml:space="preserve" data-inject-url="/images/social-icon-facebook-round.svg">
                            <path class="background" fill="#ffffff" d="M16,1A15,15,0,1,0,31,16,15,15,0,0,0,16,1Z"></path>
                            <path class="icon" fill="#3d3d3d" d="M19.73,16H17.29v8.7H13.67V16H12V12.93h1.72v-2a3.39,3.39,0,0,1,3.65-3.65H20v3H18.06a0.74,0.74,0,0,0-.77.84v1.81H20Z"></path>
                            <path class="border" fill="#3d3d3d" d="M16,31.5C7.45,31.5,0.5,24.55,0.5,16S7.45,0.5,16,0.5S31.5,7.45,31.5,16S24.55,31.5,16,31.5z M16,1.5 C8,1.5,1.5,8,1.5,16S8,30.5,16,30.5S30.5,24,30.5,16S24,1.5,16,1.5z"></path>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a class="c-prefooter__social-link" href="#">
                          <svg class="c-prefooter__social-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" xml:space="preserve" data-inject-url="/images/social-icon-twitter-round.svg">
                            <path class="background" fill="#ffffff" d="M16,1A15,15,0,1,0,31,16,15,15,0,0,0,16,1Z"></path>
                            <path class="icon" fill="#3d3d3d" d="M22.69,12.57c0,0.15,0,.3,0,0.45A9.82,9.82,0,0,1,7.59,21.29a6.94,6.94,0,0,0,5.11-1.43,3.46,3.46,0,0,1-3.22-2.4,3.31,3.31,0,0,0,.65.06A3.39,3.39,0,0,0,11,17.4,3.45,3.45,0,0,1,8.26,14a0.29,0.29,0,0,1,0,0,3.41,3.41,0,0,0,1.56.43A3.45,3.45,0,0,1,8.76,9.79a9.8,9.8,0,0,0,7.11,3.61,3.46,3.46,0,0,1,5.88-3.15A6.83,6.83,0,0,0,24,9.41a3.47,3.47,0,0,1-1.52,1.91,6.89,6.89,0,0,0,2-.54,7,7,0,0,1-1.72,1.78"></path>
                            <path class="border" fill="#3d3d3d" d="M16,31.5C7.45,31.5,0.5,24.55,0.5,16S7.45,0.5,16,0.5S31.5,7.45,31.5,16S24.55,31.5,16,31.5z M16,1.5 C8,1.5,1.5,8,1.5,16S8,30.5,16,30.5S30.5,24,30.5,16S24,1.5,16,1.5z"></path>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a class="c-prefooter__social-link" href="#">
                          <svg class="c-prefooter__social-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" xml:space="preserve" data-inject-url="/images/social-icon-linkedin-round.svg">
                            <path class="background" fill="#ffffff" d="M16,1A15,15,0,1,0,31,16,15,15,0,0,0,16,1Z"></path>
                            <path class="icon" fill="#3d3d3d" d="M17,14.78l0,0v0h0ZM24.39,24h-3.6V18.21c0-1.44-.52-2.43-1.82-2.43a2,2,0,0,0-1.85,1.31A2.41,2.41,0,0,0,17,18v6h-3.6s0-9.73,0-10.74H17v1.52A3.57,3.57,0,0,1,20.25,13c2.37,0,4.14,1.53,4.14,4.83V24ZM9.62,11.75h0A1.86,1.86,0,1,1,9.65,8a1.86,1.86,0,1,1,0,3.71M11.42,24H7.83V13.22h3.6V24Z"></path>
                            <path class="border" fill="#3d3d3d" d="M16,31.5C7.45,31.5,0.5,24.55,0.5,16S7.45,0.5,16,0.5S31.5,7.45,31.5,16S24.55,31.5,16,31.5z M16,1.5 C8,1.5,1.5,8,1.5,16S8,30.5,16,30.5S30.5,24,30.5,16S24,1.5,16,1.5z"></path>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a class="c-prefooter__social-link" href="#">
                          <svg class="c-prefooter__social-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" xml:space="preserve" data-inject-url="/images/social-icon-instagram-round.svg">
                            <path class="background" fill="#ffffff" d="M16,1A15,15,0,1,0,31,16,15,15,0,0,0,16,1Z"></path>
                            <path class="icon" fill="#3d3d3d" d="M21.23,7.47H10.77a3.3,3.3,0,0,0-3.3,3.3V21.23a3.3,3.3,0,0,0,3.3,3.3H21.23a3.3,3.3,0,0,0,3.3-3.3V10.77A3.3,3.3,0,0,0,21.23,7.47Zm0.95,2h0.38v2.89H19.67V9.44h2.52Zm-8.61,4.82A3,3,0,1,1,13,16,3,3,0,0,1,13.57,14.25Zm9.3,7a1.63,1.63,0,0,1-1.63,1.63H10.77a1.63,1.63,0,0,1-1.63-1.63v-7h2.55a4.67,4.67,0,1,0,8.64,0h2.55v7Z"></path>
                            <path class="border" fill="#3d3d3d" d="M16,31.5C7.45,31.5,0.5,24.55,0.5,16S7.45,0.5,16,0.5S31.5,7.45,31.5,16S24.55,31.5,16,31.5z M16,1.5 C8,1.5,1.5,8,1.5,16S8,30.5,16,30.5S30.5,24,30.5,16S24,1.5,16,1.5z"></path>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a class="c-prefooter__social-link" href="#">
                          <svg class="c-prefooter__social-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" xml:space="preserve" data-inject-url="/images/social-icon-youtube-round.svg">
                            <path class="background" fill="#ffffff" d="M16,1A15,15,0,1,0,31,16,15,15,0,0,0,16,1Z"></path>
                            <g>
                              <path class="icon" fill="#3d3d3d" d="M17.65,18.35a0.29,0.29,0,0,0-.29.22,2.63,2.63,0,0,0,0,.61v1.24a2.33,2.33,0,0,0,0,.59,0.31,0.31,0,0,0,.3.23A0.3,0.3,0,0,0,18,21a2.56,2.56,0,0,0,0-.64V19.17a2.13,2.13,0,0,0,0-.59A0.3,0.3,0,0,0,17.65,18.35Z"></path>
                              <path class="icon" fill="#3d3d3d" d="M12.34,11.55v2.5h0.81V11.52L14.05,8H13.36c-0.2.93-.46,1.82-0.6,2.46L12,8H11.3l1,3.52v0Z"></path>
                              <path class="icon" fill="#3d3d3d" d="M20.83,18.11a0.3,0.3,0,0,0-.3.2,0.59,0.59,0,0,0,0,.38v0.68h0.66V18.7a0.62,0.62,0,0,0,0-.36A0.29,0.29,0,0,0,20.83,18.11Z"></path>
                              <path class="icon" fill="#3d3d3d" d="M14.46,13.74a0.8,0.8,0,0,0,.38.29,1.73,1.73,0,0,0,.66.11A1.37,1.37,0,0,0,16.1,14a0.94,0.94,0,0,0,.41-0.36,1.46,1.46,0,0,0,.21-0.54,7.42,7.42,0,0,0,.05-1V11.33a4,4,0,0,0-.06-0.78,1.42,1.42,0,0,0-.2-0.47,1.07,1.07,0,0,0-.41-0.36,1.41,1.41,0,0,0-.66-0.15,1.22,1.22,0,0,0-.75.22,1.15,1.15,0,0,0-.38.57,4.13,4.13,0,0,0-.11,1.08v0.84a5.23,5.23,0,0,0,.07,1A1.32,1.32,0,0,0,14.46,13.74Zm0.68-2.81a1.82,1.82,0,0,1,.05-0.59,0.3,0.3,0,0,1,.58,0,2.12,2.12,0,0,1,0,.59v1.93a1.57,1.57,0,0,1-.05.53,0.3,0.3,0,0,1-.29.22,0.3,0.3,0,0,1-.29-0.24,1.73,1.73,0,0,1-.05-0.57V10.93Z"></path>
                              <path class="icon" fill="#3d3d3d" d="M23.09,16.57a2.43,2.43,0,0,0-2.21-2.1c-3.26-.14-6.5-0.14-9.75,0a2.45,2.45,0,0,0-2.22,2.1,38.48,38.48,0,0,0,0,5.24,2.44,2.44,0,0,0,2.22,2.09c3.25,0.14,6.49.14,9.75,0a2.42,2.42,0,0,0,2.21-2.09A38.15,38.15,0,0,0,23.09,16.57ZM13,16.9H12.07v5.18h-1V16.9H10.18v-1H13v1Zm2.67,5.19H14.73V21.82l-0.28-.07a0.8,0.8,0,0,1-.27.32,0.56,0.56,0,0,1-.34.1,0.66,0.66,0,0,1-.37-0.1,0.54,0.54,0,0,1-.21-0.25,1.2,1.2,0,0,1-.1-0.37c0-.14,0-0.42,0-0.84V17.4h0.92v2.95a3.72,3.72,0,0,0,0,.72,0.29,0.29,0,0,0,.3.22,0.3,0.3,0,0,0,.31-0.23,5.2,5.2,0,0,0,0-.75V17.4h0.92v4.68Zm3.24-3.38v2.44s0,0.27-.05.44a0.78,0.78,0,0,1-.23.42,0.57,0.57,0,0,1-.41.17,0.54,0.54,0,0,1-.32-0.1,1.07,1.07,0,0,1-.29-0.33l-0.2-.33-0.07.38-0.05.28H16.4V15.92h0.91v2.23l0.28-.43a1,1,0,0,1,.29-0.3,0.6,0.6,0,0,1,.32-0.09,0.74,0.74,0,0,1,.37.08,0.6,0.6,0,0,1,.22.23,0.79,0.79,0,0,1,.09.32A3.22,3.22,0,0,1,18.9,18.71Zm3.16,1.17H20.49v1a1.45,1.45,0,0,0,0,.48,0.3,0.3,0,0,0,.29.19,0.33,0.33,0,0,0,.33-0.22,1.85,1.85,0,0,0,.05-0.54V20.32h0.85v0.22a3.84,3.84,0,0,1,0,.67,1.43,1.43,0,0,1-.2.47,1,1,0,0,1-.37.37,1.3,1.3,0,0,1-.59.12,1.54,1.54,0,0,1-.61-0.12,0.94,0.94,0,0,1-.4-0.33,1.31,1.31,0,0,1-.21-0.47,3.65,3.65,0,0,1-.06-0.64V19.18A3.3,3.3,0,0,1,19.71,18a1,1,0,0,1,.41-0.5,1.24,1.24,0,0,1,.66-0.17,1.3,1.3,0,0,1,.76.21,1.08,1.08,0,0,1,.41.56,4.57,4.57,0,0,1,.13,1.24v0.51Z"></path>
                              <path class="icon" fill="#3d3d3d" d="M17.58,13.79a0.58,0.58,0,0,0,.22.26,0.68,0.68,0,0,0,.39.1A0.63,0.63,0,0,0,18.56,14a0.86,0.86,0,0,0,.26-0.33l0.29,0.12v0.22h1V9.59H19.11v2.93a2.18,2.18,0,0,1,0,.65,0.32,0.32,0,0,1-.32.27,0.31,0.31,0,0,1-.31-0.26,1.5,1.5,0,0,1,0-.62v-3H17.48v2.95c0,0.44,0,.74,0,0.89A1.34,1.34,0,0,0,17.58,13.79Z"></path>
                            </g>
                            <path class="border" fill="#3d3d3d" d="M16,31.5C7.45,31.5,0.5,24.55,0.5,16S7.45,0.5,16,0.5S31.5,7.45,31.5,16S24.55,31.5,16,31.5z M16,1.5 C8,1.5,1.5,8,1.5,16S8,30.5,16,30.5S30.5,24,30.5,16S24,1.5,16,1.5z"></path>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>`;
  }
}
    
customElements.define('prefooter-lcr', PrefooterLcr);





/*------------------------------------*\
  #SUBNAV-COMPONENTS-REUSABLE
\*------------------------------------*/

/**
 * <subnav-components> template.
 */

class SubNavComponents extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<ul class="c-subnav__list">
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/components/accordion.html">Accordion</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/components/alert.html">Alert</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/components/az-filter.html">A-Z Filter</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/components/blockquote.html">Blockquote</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/components/blurb.html">Blurb</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/components/button.html">Button</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/components/calendar.html">Calendar</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/components/call-to-action.html">Call to action (CTA)</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/components/card.html">Card</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/components/checkboxes.html">Checkboxes</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/components/chicklet.html">Chicklet</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/components/cookie-banner.html">Cookie Banner</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/components/code.html">Code</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/components/collection-of-personal-information.html">Collection of personal information</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/components/color-input.html">Color input</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/components/credits.html">Credits</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/components/date-input.html">Date input</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/components/email-input.html">Email input</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/components/error-message.html">Error message</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/components/error-summary.html">Error summary</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/components/events.html">Events</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/components/fieldset.html">Fieldset</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/components/file-upload.html">File upload</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/components/filter.html">Filter</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/components/footer.html">Footer</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/components/form.html">Form</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/components/faq.html">FAQ</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/components/header.html">Header</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/components/header-alert.html">Header alert</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/components/header-toolbox.html">Header toolbox</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/components/hero.html">Hero</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/components/highlight.html">Highlight</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/components/image-gallery.html">Image Gallery</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/components/icon-navigation.html">Icon Navigation</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/components/list.html">List</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/components/loader.html">Loader</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/components/modal.html">Modal</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/components/note.html">Note</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/components/number.html">Number</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/components/pagination.html">Pagination</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/components/password.html">Password</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/components/phase-banner.html">Phase banner</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/components/posts.html">Posts</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/components/profiles.html">Profiles</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/components/prefooter.html">Prefooter</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/components/radios.html">Radios</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/components/related.html">Related</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/components/results.html">Results</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/components/search.html">Search</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/components/section-heading.html">Section heading</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/components/select.html">Select</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/components/sidekick.html">Sidekick</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/components/skip-link.html">Skip link</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/components/streaming-media-block.html">Streaming Media</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/components/sub-navigation.html">Sub navigation</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/components/table.html">Table</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/components/testimonial.html">Testimonial</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/components/text-input.html">Text input</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/components/textarea.html">Textarea</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/components/timeline.html">Timeline</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/components/title.html">Title</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/components/video.html">Video</a>
            </li>
          </ul>`;
  }
}
    
customElements.define('subnav-components', SubNavComponents);





/*------------------------------------*\
  #SUBNAV-PATTERNS-REUSABLE
\*------------------------------------*/

/**
 * <subnav-patterns> template.
 */

class SubNavPatterns extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<h3 class="c-subnav__heading">Page templates</h3>
          <ul class="c-subnav__list">
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/patterns/about-page.html">About page</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/patterns/article-page.html">Article page</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/patterns/boilerplate-landing-page.html">Boilerplate landing page</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/patterns/boilerplate-page.html">Boilerplate general page</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/patterns/contact-page.html">Contact page</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/patterns/search-results-databases.html">Databases page</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/patterns/search-results-events.html">Events landing page</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/patterns/search-results-faqs.html">FAQ landing page</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/patterns/faq-single-page.html">FAQ page</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/patterns/search-results-guides.html">Guides landing page</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/patterns/guide-page.html">Guide page</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/patterns/search-results-profiles.html">Profiles landing page</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/patterns/profile-page.html">Profile page</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/patterns/search-results.html">Search pages</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/patterns/search-results-services.html">Services page</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/patterns/404.html">404 Page</a>
            </li>
          </ul>

          <h3 class="c-subnav__heading">Help users to...</h3>
          <ul class="c-subnav__list">
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/patterns/find-a-resource.html">Find a resource</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/patterns/find-a-location.html">Find a location</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/patterns/book-something.html">Book something</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/patterns/understand-service-changes.html">Understand service changes</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/patterns/contact-a-person-or-team.html">Contact a person or team</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/patterns/find-sponsors.html">Find sponsors</a>
            </li>
          </ul>

          <h3 class="c-subnav__heading">Ask users to...</h3>
          <ul class="c-subnav__list">
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/patterns/sign-up.html">Sign up</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/patterns/complete-a-form.html">Complete a form</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/patterns/book-something.html">Book something</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/patterns/read-urgent-announcement.html">Read urgent announcement</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/patterns/take-note-of-hour-changes.html">Take note of hour changes</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/patterns/take-note-of-public-holiday.html">Take note of public holiday</a>
            </li>
            <li class="c-subnav__item">
              <a class="c-subnav__link" href="/patterns/understand-service-changes.html">Understand service changes</a>
            </li>
          </ul>`;
  }
}
    
customElements.define('subnav-patterns', SubNavPatterns);