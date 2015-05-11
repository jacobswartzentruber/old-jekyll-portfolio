---
layout: article
title: "Image Link Using CSS :after"
modified:
categories: 
excerpt:
tags: []
image:
  feature:
  teaser:
  thumb:
date: 2015-05-11T16:21:07-05:00
---

As I was formatting the post index page for this blog the other day, I came across a section of code this theme included which I hadn't encountered before.  I was attempting to adjust how teaser images were displayed on the index page for each blog post.  The original Sass code for the post tile image was as follows,

{%highlight CSS linenos%}
.post-teaser {
  position: relative;
  display: block;
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba($base-color,0);
    pointer-events: none;
    @include transition(background 0.3s);
  }
  &:hover {
    &:after {
      background: rgba($base-color,0.2);
    }
  }
}
{%endhighlight%}

The part that intrigued me with this code was the :after selector.  Curious, I looked up what it does and came across a neat little trick to display image links with Sass.  The :after selector inserts content after the specified element.  Alternatively, you can use the :before selector to insert content before the specified element.  With this information in hand, it becomes a lot easier to see what this code does in relation to our image link.  It creates a transparent element over the image link that become more opaque as the mouse hovers over the image.  Pretty cool!  Here is the HTML for our image link,

{%highlight html linenos%}
<a href="post.url" title="post.title" class="post-teaser">
	<img src="site.url/images/post.image.teaser" alt="teaser" itemprop="image">
</a>
{%endhighlight%}

Jekyll highlighting doesn't seem to want to include Liquid tags so I had to take Liquid tags off "post.url," "post.title," "site.url," and "post.image.teaser" for this code snippet.  Just imagine they are still included.

The HTML is simple, we simply have an image that links to the specified post url.  The parent-level Sass is pretty basic as well, simply specifying relative positioning and block display.  Now we get to the :after Sass selector.  At first glance, it seems wildly counter intuitive to include an element with no content after our image.  Why create an element that contains nothing?  If we continue analyzing the Sass code, its purpose becomes a bit more clear.  Our newly created blank element is assigned the width and height of our image and positioned so it overlays our image exactly.  Our :after element is assigned a background color with an opacity of 0 meaning it is fully transparent.

Once again we are left with a seemingly useless element.  The :hover selector, however, finally gives our :after element purpose.  When the mouse hovers over the :after element, positioned over our image link, it becomes 20% opaque.  Whoa, now we can choose any color we want our image to fade out toward when we mouse over it!

After doing a bit of researching, developers have to use this :after selector trick because it is impossible to assign both a background color and background image to an HTML element.  You have to choose one or the other.  The :after selector allows us to work around this limitation by creating a transparent element whose only job is to mimic the background color of our image element.  Now we can create beautiful, responsive image link elements without constraints.  We could even fade from one image to another image!  Time to go mess around with some post images again...