---
layout: article
title: "Uncovering Jekyll"
modified:
categories: 
excerpt:
tags: []
image:
  feature:
  teaser:
  thumb:
date: 2015-04-30T11:09:26-05:00
---
In one of my earlier blog posts I stated I would be looking for a new blogging platform as Wordpress was a bit restrictive. 
Well, my friends, that day has finally come and it has taken the form of [Jekyll](http://jekyllrb.com/).  Jekyll is loudly touted as the "blog for hackers."  Rebelling against the restrictive nature of commercial, database-backed blogging platforms, Jekyll gives complete control of source code over to the blogger as a static site.  The days of only picking from among twenty Wordpress themes are over.  If you don't like an element on your Jekyll blog, go in and edit the element yourself or find someone who has already done so.  Additionally, GitHub pages sync with Jekyll so hosting your Jekyll site is as easy as creating a new repository.  I have been working on Jekyll features the last few days and am excited to begin exploring the possibilities this open-source software offers.

###Exporting from Wordpress
I was fully prepared to manually copy all of my Wordpress documents from Wordpress over to Jekyll, however I was grateful I found an export tool in Wordpress.  The export tool allowed me to export my posts and pages in one xml document.  I then used a Jekyll plugin to import the contents of the xml file to my site.  Due to the number of steps this process took, there was a fair amount of cleanup I had to do: removing extraneous meta-data, correcting image urls and making sure formatting was correct for all my posts.  While this took awhile, everything now looks clean and well integrated.

###Markdown
Before this point in time I had only used HTML and CSS to style front-end content.  While Jekyll allows posts to be written in HTML, it prefers and encourages the use of [Markdown](http://daringfireball.net/projects/markdown/).  Markdown's does two things: it provides a plain text formatting syntax and converts the plain-text formatting to HTML.  This is actually my first post using Markdown and I am pleasantly surprised by its clarity.  It combines the readability of a WYSIWYG editor with the flexibility of HTML, making its accessibility somewhere between the two.

###Skinny-Bones
Wordpress lets the blogger pick between a limited selection of themes for their blog.  Jekyll, on the other hand, allows you to design your blog however you want.  Yes, it is more work, but the flexibility it offers is incredible.  Jekyll developers sometimes put starter themes online for others to play with.  I personally downloaded a theme by Michael Rose called [Skinny-Bones-Jekyll](https://github.com/mmistakes/skinny-bones-jekyll).  I can't stress enough how much I love this theme -- many props to Michael Rose.  I like the clean, sleek feel of the site and enjoy the inclusion of teaser images.  I have changed a few things already and am excited to make the theme my own, one element at a time.