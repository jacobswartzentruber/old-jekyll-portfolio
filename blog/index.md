---
layout: archive
title: "Blog"
type: page
image:
  feature: default-feature.jpg
---

Welcome to my development blog!  I began this blog to record my progress researching and understanding full-stack web application development, specifically in regards to Ruby on Rails.  Beyond simply being a repository for information I learn, I have found I retain information a lot better when forced to explain and document new material.  Whether you are looking for help about a certain topic or are simply here to check out the latest progress on my apps, I hope you find what you are looking for, and as always, I am more than happy to answer any questions.

#Latest Posts

<div class="tiles">
{% for post in site.posts %}
	{% include post-grid.html %}
{% endfor %}
</div><!-- /.tiles -->