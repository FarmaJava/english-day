"use client"

import { useEffect } from "react"

export default function AustraliaPage() {
  useEffect(() => {
    // Mobile menu toggle
    const hamburger = document.querySelector(".hamburger")
    const navMenu = document.querySelector(".nav-menu")

    if (hamburger && navMenu) {
      const handleHamburgerClick = () => {
        hamburger.classList.toggle("active")
        navMenu.classList.toggle("active")
      }

      hamburger.addEventListener("click", handleHamburgerClick)

      // Close mobile menu when clicking on a link
      document.querySelectorAll(".nav-link").forEach((n) =>
        n.addEventListener("click", () => {
          hamburger.classList.remove("active")
          navMenu.classList.remove("active")
        }),
      )

      // Cleanup
      return () => {
        hamburger.removeEventListener("click", handleHamburgerClick)
      }
    }
  }, [])

  useEffect(() => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault()
        const href = (e.currentTarget as HTMLAnchorElement).getAttribute("href")
        if (href) {
          const target = document.querySelector(href)
          if (target) {
            target.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }
        }
      })
    })
  }, [])

  useEffect(() => {
    // Add scroll effect to navbar
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar") as HTMLElement | null
      if (navbar) {
        if (window.scrollY > 100) {
          navbar.style.backgroundColor = "rgba(0, 0, 0, 0.98)"
        } else {
          navbar.style.backgroundColor = "rgba(0, 0, 0, 0.95)"
        }
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    // Animate timeline items on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement
          target.style.opacity = "1"
          target.style.transform = "translateY(0)"
        }
      })
    }, observerOptions)

    // Observe timeline items and cards
    document.querySelectorAll(".timeline-item, .card, .sport-card, .person-card").forEach((item) => {
      const element = item as HTMLElement
      element.style.opacity = "0"
      element.style.transform = "translateY(30px)"
      element.style.transition = "opacity 0.6s ease, transform 0.6s ease"
      observer.observe(element)
    })
  }, [])

  return (
    <>
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">🇦🇺 Australia</div>
          <ul className="nav-menu">
            <li><a href="#home" className="nav-link">Home</a></li>
            <li><a href="#map-flag" className="nav-link">Map & Flag</a></li>
            <li><a href="#history" className="nav-link">History</a></li>
            <li><a href="#fauna-flora" className="nav-link">Fauna & Flora</a></li>
            <li><a href="#currency-visa" className="nav-link">Currency & Visa</a></li>
            <li><a href="#food" className="nav-link">Food</a></li>
            <li><a href="#culture" className="nav-link">Culture & Music</a></li>
            <li><a href="#famous-people" className="nav-link">Famous People</a></li>
            <li><a href="#sports" className="nav-link">Sports</a></li>
          </ul>
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Welcome to Australia</h1>
          <p>Discover the Land Down Under</p>
          <a href="#map-flag" className="cta-button">Explore Australia</a>
        </div>
      </section>

      {/* Map and Flag Section */}
      <section id="map-flag" className="map-flag">
        <div className="container">
          <h2 className="section-title">Australia at a Glance</h2>
          <div className="map-flag-content">
            <div className="flag-info">
              <div className="flag-image"></div>
              <h3>The Australian Flag</h3>
              <p>
                The Australian flag features the Union Jack, the Commonwealth Star, and the Southern Cross
                constellation, representing our history and geography.
              </p>
            </div>
            <div className="map-info">
              <div className="map-image"></div>
              <h3>Major Cities & Regions</h3>
              <p>
                From Sydney and Melbourne to Perth and Darwin, Australia spans a vast continent with diverse landscapes
                and vibrant cities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section id="history">
        <div className="container">
          <h2 className="section-title">History of Australia</h2>
          <p className="section-subtitle">From ancient Aboriginal cultures to modern multicultural society</p>

          <div className="timeline">
            <div className="timeline-item left">
              <div className="timeline-content">
                <div className="timeline-date">65,000+ years ago</div>
                <h3>Indigenous Peoples</h3>
                <p>
                  Aboriginal and Torres Strait Islander peoples arrive and establish the world&apos;s oldest continuous
                  cultures.
                </p>
              </div>
            </div>

            <div className="timeline-item right">
              <div className="timeline-content">
                <div className="timeline-date">1770</div>
                <h3>European Discovery</h3>
                <p>Captain James Cook claims the eastern coast of Australia for Britain.</p>
              </div>
            </div>

            <div className="timeline-item left">
              <div className="timeline-content">
                <div className="timeline-date">1788</div>
                <h3>First Fleet</h3>
                <p>The First Fleet arrives in Sydney Cove, establishing the first European settlement.</p>
              </div>
            </div>

            <div className="timeline-item right">
              <div className="timeline-content">
                <div className="timeline-date">1851</div>
                <h3>Gold Rush</h3>
                <p>Gold discoveries trigger massive immigration and economic growth.</p>
              </div>
            </div>

            <div className="timeline-item left">
              <div className="timeline-content">
                <div className="timeline-date">1901</div>
                <h3>Federation</h3>
                <p>Six colonies unite to form the Commonwealth of Australia.</p>
              </div>
            </div>

            <div className="timeline-item right">
              <div className="timeline-content">
                <div className="timeline-date">1975</div>
                <h3>Multiculturalism</h3>
                <p>End of White Australia Policy, beginning of modern multicultural society.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fauna & Flora Section */}
      <section id="fauna-flora">
        <div className="container">
          <h2 className="section-title">Unique Fauna & Flora</h2>
          <p className="section-subtitle">Discover Australia&apos;s incredible biodiversity</p>

          <div className="grid grid-4">
            <div className="card">
              <img src="/placeholder.svg?height=200&width=200" alt="Kangaroo" />
              <h3>Kangaroo</h3>
              <p>Australia&apos;s iconic marsupial, known for its powerful hind legs and pouch.</p>
            </div>

            <div className="card">
              <img src="/placeholder.svg?height=200&width=200" alt="Koala" />
              <h3>Koala</h3>
              <p>Adorable marsupial that feeds exclusively on eucalyptus leaves.</p>
            </div>

            <div className="card">
              <img src="/placeholder.svg?height=200&width=200" alt="Platypus" />
              <h3>Platypus</h3>
              <p>Unique egg-laying mammal with a duck-like bill and beaver-like tail.</p>
            </div>

            <div className="card">
              <img src="/placeholder.svg?height=200&width=200" alt="Emu" />
              <h3>Emu</h3>
              <p>Australia&apos;s largest bird and the second-largest living bird in the world.</p>
            </div>

            <div className="card">
              <img src="/placeholder.svg?height=200&width=200" alt="Eucalyptus" />
              <h3>Eucalyptus</h3>
              <p>Iconic Australian trees, providing food and habitat for many native species.</p>
            </div>

            <div className="card">
              <img src="/placeholder.svg?height=200&width=200" alt="Acacia" />
              <h3>Golden Wattle</h3>
              <p>Australia&apos;s national floral emblem, blooming with bright yellow flowers.</p>
            </div>

            <div className="card">
              <img src="/placeholder.svg?height=200&width=200" alt="Wildflowers" />
              <h3>Wildflowers</h3>
              <p>Spectacular displays of native wildflowers across the continent.</p>
            </div>

            <div className="card">
              <img src="/placeholder.svg?height=200&width=200" alt="Conservation" />
              <h3>Conservation</h3>
              <p>Protecting endangered species like the Tasmanian Devil and Great Barrier Reef.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Currency & Visa Section */}
      <section id="currency-visa">
        <div className="container">
          <h2 className="section-title">Currency & Visa Information</h2>

          <div className="grid grid-2">
            <div className="card">
              <img src="/placeholder.svg?height=200&width=300" alt="Australian Currency" />
              <h3>Australian Dollar (AUD)</h3>
              <p>
                <strong>Symbol:</strong> $ or A$
              </p>
              <p>
                <strong>Coins:</strong> 5¢, 10¢, 20¢, 50¢, $1, $2
              </p>
              <p>
                <strong>Banknotes:</strong> $5, $10, $20, $50, $100
              </p>
              <p>
                The Australian dollar is one of the most traded currencies globally and features colorful polymer
                banknotes with advanced security features.
              </p>
            </div>

            <div className="card">
              <img src="/placeholder.svg?height=200&width=300" alt="Visa Requirements" />
              <h3>Visa Requirements</h3>
              <p>
                <strong>Tourist Visa:</strong> Electronic Travel Authority (ETA) or eVisitor
              </p>
              <p>
                <strong>Student Visa:</strong> Subclass 500 for international students
              </p>
              <p>
                <strong>Working Holiday:</strong> Available for eligible countries
              </p>
              <p>
                Most visitors need a visa to enter Australia. Apply online through the official government website
                before traveling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Food Section */}
      <section id="food">
        <div className="container">
          <h2 className="section-title">Australian Cuisine</h2>
          <p className="section-subtitle">Taste the flavors of Australia</p>

          <div className="grid grid-4">
            <div className="food-item">
              <img src="/placeholder.svg?height=150&width=200" alt="Meat Pie" />
              <div className="food-item-content">
                <h4>Meat Pie</h4>
                <p>Classic Australian pastry filled with minced meat and gravy.</p>
              </div>
            </div>

            <div className="food-item">
              <img src="/placeholder.svg?height=150&width=200" alt="Chicken Parmigiana" />
              <div className="food-item-content">
                <h4>Chicken Parmigiana</h4>
                <p>Breaded chicken topped with tomato sauce and cheese.</p>
              </div>
            </div>

            <div className="food-item">
              <img src="/placeholder.svg?height=150&width=200" alt="Fish and Chips" />
              <div className="food-item-content">
                <h4>Fish and Chips</h4>
                <p>Fresh fish in crispy batter served with golden chips.</p>
              </div>
            </div>

            <div className="food-item">
              <img src="/placeholder.svg?height=150&width=200" alt="Barramundi" />
              <div className="food-item-content">
                <h4>Barramundi</h4>
                <p>Premium Australian fish, prized for its delicate flavor.</p>
              </div>
            </div>

            <div className="food-item">
              <img src="/placeholder.svg?height=150&width=200" alt="Sausage Rolls" />
              <div className="food-item-content">
                <h4>Sausage Rolls</h4>
                <p>Seasoned sausage meat wrapped in flaky pastry.</p>
              </div>
            </div>

            <div className="food-item">
              <img src="/placeholder.svg?height=150&width=200" alt="Lamington" />
              <div className="food-item-content">
                <h4>Lamington</h4>
                <p>Sponge cake coated in chocolate and rolled in coconut.</p>
              </div>
            </div>

            <div className="food-item">
              <img src="/placeholder.svg?height=150&width=200" alt="Pavlova" />
              <div className="food-item-content">
                <h4>Pavlova</h4>
                <p>Meringue-based dessert topped with cream and fresh fruit.</p>
              </div>
            </div>

            <div className="food-item">
              <img src="/placeholder.svg?height=150&width=200" alt="ANZAC Biscuits" />
              <div className="food-item-content">
                <h4>ANZAC Biscuits</h4>
                <p>Traditional oat biscuits with historical significance.</p>
              </div>
            </div>

            <div className="food-item">
              <img src="/placeholder.svg?height=150&width=200" alt="Tim Tams" />
              <div className="food-item-content">
                <h4>Tim Tams</h4>
                <p>Beloved chocolate-coated biscuits, perfect for &quot;Tim Tam Slam.&quot;</p>
              </div>
            </div>

            <div className="food-item">
              <img src="/placeholder.svg?height=150&width=200" alt="Fairy Bread" />
              <div className="food-item-content">
                <h4>Fairy Bread</h4>
                <p>White bread with butter and colorful sprinkles - a party favorite!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture & Music Section */}
      <section id="culture">
        <div className="container">
          <h2 className="section-title">Culture & Music</h2>
          <p className="section-subtitle">Experience Australia&apos;s rich cultural heritage</p>

          <div className="grid grid-2">
            <div className="card">
              <h3>Australian Traditions</h3>
              <p>
                <strong>Aboriginal Heritage:</strong> World&apos;s oldest continuous culture with 65,000+ years of
                history, including Dreamtime stories, art, and connection to country.
              </p>
              <p>
                <strong>Multicultural Society:</strong> Modern Australia celebrates diversity with influences from over
                200 countries, creating a unique blend of traditions.
              </p>
              <p>
                <strong>Outdoor Lifestyle:</strong> Beach culture, barbecues, and outdoor sports are central to
                Australian life.
              </p>
            </div>

            <div className="card">
              <h3>Music Scene</h3>
              <p>
                <strong>Rock Legends:</strong> AC/DC, INXS, Midnight Oil
              </p>
              <p>
                <strong>Pop Icons:</strong> Kylie Minogue, Sia, Troye Sivan
              </p>
              <p>
                <strong>Electronic:</strong> Flume, Rufus Du Sol
              </p>
              <p>
                <strong>Indigenous Music:</strong> Traditional didgeridoo and contemporary Aboriginal artists
              </p>
              <p>
                <strong>Folk/Country:</strong> Rich storytelling tradition in Australian country music
              </p>
            </div>
          </div>

          <div className="card" style={{ marginTop: "2rem" }}>
            <h3>Major Festivals & Holidays</h3>
            <div className="grid grid-2" style={{ marginTop: "1rem" }}>
              <div>
                <p>
                  <strong>Australia Day (January 26):</strong> National day celebrating Australian culture
                </p>
                <p>
                  <strong>ANZAC Day (April 25):</strong> Commemorating Australian and New Zealand Army Corps
                </p>
              </div>
              <div>
                <p>
                  <strong>Sydney Festival:</strong> Major arts festival showcasing local and international talent
                </p>
                <p>
                  <strong>Vivid Sydney:</strong> Festival of light, music, and ideas
                </p>
                <p>
                  <strong>Melbourne Cup:</strong> &quot;The race that stops a nation&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Famous People Section */}
      <section id="famous-people">
        <div className="container">
          <h2 className="section-title">Famous Australians</h2>
          <p className="section-subtitle">Notable figures who&apos;ve made their mark on the world</p>

          <div className="grid grid-3">
            <div className="person-card">
              <div
                className="person-avatar"
                style={{ backgroundImage: "url('/placeholder.svg?height=120&width=120')" }}
              ></div>
              <div className="person-name">Hugh Jackman</div>
              <div className="person-role">Actor & Performer</div>
              <p>Wolverine actor and Broadway star, known for his versatility in film and theater.</p>
            </div>

            <div className="person-card">
              <div
                className="person-avatar"
                style={{ backgroundImage: "url('/placeholder.svg?height=120&width=120')" }}
              ></div>
              <div className="person-name">Nicole Kidman</div>
              <div className="person-role">Academy Award-winning Actress</div>
              <p>International film star with acclaimed performances in drama and thriller films.</p>
            </div>

            <div className="person-card">
              <div
                className="person-avatar"
                style={{ backgroundImage: "url('/placeholder.svg?height=120&width=120')" }}
              ></div>
              <div className="person-name">Steve Irwin</div>
              <div className="person-role">Wildlife Conservationist</div>
              <p>The &quot;Crocodile Hunter&quot; who brought wildlife conservation to global audiences.</p>
            </div>

            <div className="person-card">
              <div
                className="person-avatar"
                style={{ backgroundImage: "url('/placeholder.svg?height=120&width=120')" }}
              ></div>
              <div className="person-name">Cate Blanchett</div>
              <div className="person-role">Two-time Oscar Winner</div>
              <p>Acclaimed actress known for her powerful performances in film and theater.</p>
            </div>

            <div className="person-card">
              <div
                className="person-avatar"
                style={{ backgroundImage: "url('/placeholder.svg?height=120&width=120')" }}
              ></div>
              <div className="person-name">Ian Thorpe</div>
              <div className="person-role">Olympic Swimming Champion</div>
              <p>Five-time Olympic gold medalist, one of Australia&apos;s greatest swimmers.</p>
            </div>

            <div className="person-card">
              <div
                className="person-avatar"
                style={{ backgroundImage: "url('/placeholder.svg?height=120&width=120')" }}
              ></div>
              <div className="person-name">Kylie Minogue</div>
              <div className="person-role">Pop Icon</div>
              <p>International pop star and cultural icon, known as the &quot;Princess of Pop.&quot;</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sports Section */}
      <section id="sports">
        <div className="container">
          <h2 className="section-title">Australian Sports</h2>
          <p className="section-subtitle">A nation passionate about sport</p>

          <div className="sports-grid">
            <div className="sport-card">
              <div
                className="sport-icon"
                style={{ backgroundImage: "url('/placeholder.svg?height=80&width=80')" }}
              ></div>
              <h3>Cricket</h3>
              <p>
                Australia&apos;s summer sport, with legendary players like Don Bradman and Steve Smith. The Ashes series
                against England is a national obsession.
              </p>
            </div>

            <div className="sport-card">
              <div
                className="sport-icon"
                style={{ backgroundImage: "url('/placeholder.svg?height=80&width=80')" }}
              ></div>
              <h3>Rugby</h3>
              <p>
                Both Rugby League and Rugby Union are hugely popular, with the Wallabies representing Australia
                internationally.
              </p>
            </div>

            <div className="sport-card">
              <div
                className="sport-icon"
                style={{ backgroundImage: "url('/placeholder.svg?height=80&width=80')" }}
              ></div>
              <h3>Australian Rules Football</h3>
              <p>
                AFL is the most popular sport in southern Australia, with the Grand Final being one of the biggest
                sporting events.
              </p>
            </div>

            <div className="sport-card">
              <div
                className="sport-icon"
                style={{ backgroundImage: "url('/placeholder.svg?height=80&width=80')" }}
              ></div>
              <h3>Swimming</h3>
              <p>
                Australia is a swimming powerhouse, consistently ranking among the top nations at the Olympics with
                stars like Ian Thorpe and Emma McKeon.
              </p>
            </div>

            <div className="sport-card">
              <div
                className="sport-icon"
                style={{ backgroundImage: "url('/placeholder.svg?height=80&width=80')" }}
              ></div>
              <h3>Tennis</h3>
              <p>
                Home to the Australian Open, one of tennis&apos;s Grand Slams, and legendary players like Rod Laver and
                Pat Rafter.
              </p>
            </div>

            <div className="sport-card">
              <div
                className="sport-icon"
                style={{ backgroundImage: "url('/placeholder.svg?height=80&width=80')" }}
              ></div>
              <h3>Olympic Excellence</h3>
              <p>
                Australia consistently punches above its weight at the Olympics, particularly in swimming, cycling, and
                rowing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-flag" style={{ backgroundImage: "url('/placeholder.svg?height=30&width=50')" }}></div>
          <p>&copy; 2024 Australia Tourism Guide. Celebrating the Land Down Under.</p>
          <p>Made with ❤️ for Australia</p>
        </div>
      </footer>
    </>
  )
}
