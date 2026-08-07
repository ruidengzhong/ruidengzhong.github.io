---
layout: page
title: Work Experience
permalink: /experience/
description: A collection of my professional, technical, and extracurricular experience.
nav: true
nav_order: 4
---

<p>
  A collection of my work, research, leadership, and engineering experiences.
</p>

<div class="experiences-list">
  {% assign sorted_experiences = site.experiences | sort: "order" %}

  {% for experience in sorted_experiences %}
    <article class="experience-entry">
      <h2>
        <a href="{{ experience.url | relative_url }}">
          {{ experience.title }}
        </a>
      </h2>

      {% if experience.company %}
        <p class="experience-company">
          <strong>{{ experience.company }}</strong>
        </p>
      {% endif %}

      {% if experience.start_date or experience.end_date %}
        <p class="experience-dates">
          {{ experience.start_date }}
          –
          {% if experience.end_date %}
            {{ experience.end_date }}
          {% else %}
            Present
          {% endif %}
        </p>
      {% endif %}

      {% if experience.description %}
        <p>{{ experience.description }}</p>
      {% endif %}

      <a href="{{ experience.url | relative_url }}">
        Read more
      </a>
    </article>
  {% endfor %}
</div>