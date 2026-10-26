---
layout: page
title: Work Experience
permalink: /experience/
description: Engineering, research, and quality experience in automotive systems, electronics, and materials.
nav: true
nav_order: 4
---

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
        <p class="experience-summary">{{ experience.description }}</p>
      {% endif %}

      <a class="experience-more" href="{{ experience.url | relative_url }}" aria-label="View {{ experience.title }} at {{ experience.company }}">
        View experience
      </a>
    </article>

{% endfor %}

</div>
