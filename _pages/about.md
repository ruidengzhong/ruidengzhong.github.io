---
layout: about
title: About Me
permalink: /
home_hero: true
hero_affiliation: "Duke University · Expected Graduation in May 2029"
hero_tagline: "Electrical & Computer Engineering"
# Change engineering_image below to replace the landscape photo beneath the heading.
engineering_image: "/assets/img/inCar.png"
engineering_image_alt: "Seated in the Duke Motorsports race car."
engineering_image_caption: ""

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false # crops the image to make it circular
  #more_info: >
  # Duke University<br>
  # Durham, NC and Clemson, SC<br>
  # Major: ECE<br>
  # Minor: Economics<br>
  # Expected Graduation: May 2029<br>
  # Languages: English · Chinese · German

#selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page


#announcements:
#  enabled: true # includes a list of news items
#  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
#  limit: 5 # leave blank to include all the news in the `_news` folder

#latest_posts:
#  enabled: true
#  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
#  limit: 3 # leave blank to include all the blog posts
---

<section class="home-section" id="student-engineer" aria-labelledby="student-engineer-title">
<div class="home-section-inner">
<p class="home-eyebrow">About me</p>
<div class="home-story-grid">
<div class="home-story-heading">
<h2 id="student-engineer-title">Student.<br>Engineer.<br>Problem Solver.</h2>
{% if page.engineering_image != blank %}
<div class="home-engineering-photo">
{% include figure.liquid path=page.engineering_image alt=page.engineering_image_alt class="home-landscape-image" sizes="(min-width: 900px) 420px, 90vw" %}
{% if page.engineering_image_caption != blank %}
<p class="caption">{{ page.engineering_image_caption | escape }}</p>
{% endif %}
</div>
{% endif %}
</div>
<div class="home-story-copy" markdown="1">

I’m Ruideng Zhong, an electrical and computer engineering student at [Duke University](https://www.duke.edu/) interested in computer architecture, microelectronics, and hands-on engineering. Through [Duke Motorsports](https://www.dukefsae.com/) and the [Duke SPACE Initiative](https://spaceinitiative.duke.edu/), I work on projects that connect design, fabrication, and testing.

I’m open to internship and research opportunities in any location where I can contribute to electrical and computer engineering projects.

</div>
</div>
{% if page.profile.more_info %}
<div class="home-facts">{{ page.profile.more_info }}</div>
{% endif %}
</div>
</section>

<section class="home-section home-outside" aria-labelledby="outside-title">
<div class="home-section-inner">
<p class="home-eyebrow">Beyond engineering</p>
<div class="home-story-grid">
<h2 id="outside-title">Out of the<br>Classroom</h2>
<div class="home-story-copy" markdown="1">

I play clarinet and serve as treasurer in the [Duke Marching Band](https://www.dukeband.org/). Outside engineering and band, I enjoy running, hiking, Minecraft, bouldering, and playing the piano. I am a big fan Tottenham Hotspur, Duke athletics, and McLaren F1.

</div>
</div>
<div class="home-team-photos">
    <div>
        {% include figure.liquid path="assets/img/dumb.jpg" title="Duke Marching Band at Cameron Indoor" class="img-fluid rounded z-depth-1" %}
    </div>
    <div>
        {% include figure.liquid path="assets/img/motorsports.jpg" title="Duke Motorsports at Michigan International Speedway" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Some of the teams that shape me as a person.
</div>

</div>
</section>
