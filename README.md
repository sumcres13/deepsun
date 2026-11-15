# Asian Dining & Bar DEEPSUN

A four-page Japanese and English static site for the restaurant in Minami-Yawata, Ichikawa. Open `index.html` in a browser. The site requires no build. For a local server, run `python3 -m http.server 8088` in this folder and visit `http://localhost:8088/`.

- `index.html` introduces the restaurant and links to LINE, access, and reservations.
- `about.html` has the owner’s portrait and welcome, company details, the restaurant phone, and opening hours.
- `stores.html` shows the address, lunch and dinner hours, phone, a four-photo carousel with five-second autoplay, and Google Maps.
- `reservation.html` links to the restaurant phone, public Tabelog listing, Uber Eats, Demae-can, and Rocket Now.

Edit the Japanese fallback content in the HTML and shared content and translations in `script.js`. Photos and artwork are included as full-resolution lossless PNGs. Partner logos use their supplied formats. See [ARTWORK.md](ARTWORK.md) for the decorative backgrounds and their prompts.

To host the site, publish the four HTML files, `script.js`, `styles.css`, and the `assets/` directory together. Reservations use the restaurant phone. Google Maps, fonts, and linked services require internet access.

Use Python 3.10 or newer to install `requirements-build.txt`. After editing the Japanese owner message in `about.html`, run `python3 apply_budoux.py --owner-message` to regenerate the mobile phrase wrapping. Run `python3 apply_budoux.py` for the optional phrase breaks elsewhere in the static HTML.
