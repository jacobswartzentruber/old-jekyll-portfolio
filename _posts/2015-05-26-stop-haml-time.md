---
layout: article
title: "Stop, Haml Time!"
modified:
categories: 
excerpt:
tags: []
image:
  feature:
  teaser:
  thumb:
date: 2015-05-26T13:13:53-05:00
---

Wow, I just realized it has been awhile since my last post!  Over the past few weeks I have focused my efforts on researching job opportunities and making sure all the random loose ends on portfolio pages were tied up.  I doubt those topics would make for a very engaging blog post, so you can thank me later for sparing you the boring details of spell check discrepencies and formatting quirks.

As I poured over job postings for web application positions, I noticed a number of companies use the HTML templating engine, Haml.  I appreciate the ease and flexibility Markdown offers for my Jekyll blog, so I am excited to learn and experiment with Haml for use in my Rails applications.  Rails promotes the use of DRY principles and if I can increase the DRY-ness of my applications by constructing my views in Haml, all the better!

###What is HAML?###

Taken from "The Rails 4 Way" by Obie Fernandez and Kevin Faustino, Haml is a "whitespace sensitive HTML templating engine that uses indentation to determine the hierarchy of an HTML document." Haml "removes a lot of noisy boilerplate, such as angle brackets (from ERb), and did away with the need to close blocks and HTML tags."  Doing away with closing tags and decreasing the clutter of HTML? That certainly grabbed my attention.  Since I like the simplicity of Markdown, I  definitely appreciate the simplicity of other HTML templating languages.

###The Basics###

The basics of Haml are pretty straightforward.  To create an element, you need to prefix the percent character to an element name followed by the content as shown below.

{%highlight Haml%}
%header content
{%endhighlight%}

will create HTML equivalent to

{%highlight Html%}
<header>content</header>
{%endhighlight%}

Since Haml is a language promoting DRY principles, it uses the same syntax as CSS for assigning ids(#) and classes(.) to an element.  If no element is specifically attributed to the class or id, Haml automatically assigns it a div element as that is the most common element used in a webpage.  Below we have a Haml code segment that displays the contents of an article with the appropriate CSS classes and ids.

{%highlight Haml linenos%}
#content
  .article.latest
    %h1.title This is the title of the article
    %p.body This is the body of the article
{%endhighlight%}

{%highlight Html linenos%}
<div id="content">
  <div class="article latest">
    <h1 class="title">This is the title of the article</hi>
    <p class="body">This is the body of the article</p>
  </div>
</div>
{%endhighlight%}

Element tags that don't require a closing tag, such as 'br' and 'img,' are recognized by Haml and only generates the HTML code with one tag.

Finally, Haml is similiar to ERb in that you can insert Ruby code into your documents with a specified tag.  ERb requires the '<%' tag whereas Haml requires the '=' tag.  Additionally, where ERb requires the tag '<%=' to indicate code that shouldn't be displayed to the view, Haml requires the tag '-'. Lets take a look at the example below where the title of a local variable '@article' is 'Article Title.'

{%highlight Haml linenos%}
- if @article.title.length > 5
  %p= @article.title
{%endhighlight%}

produces HTML code that looks like

{%highlight Haml linenos%}
<p>Article Title</p>
{%endhighlight%}

Haml offers a number of other sweet tricks including tags for filtering through other HTML templating languages and adding comments with the '-#' tag, but the simple tags above comprise a lot of the functionality and simplicity of Haml.  If you can use the few tags mentioned above, Haml templating is well within your reach.

###Building Content with HAML?###

While reading through different Haml discussions online, I came across the debate over whether Haml should be used for content generation or simply used for structure.  Of course, there are multiple views on this subject but I thought it was worth bringing up.  In the case of content generation, is it appropriate to define a 'strong' element in Haml or leave that to the CSS styling sheets?  Should you define your links using Haml or define them using another templating language and the filter ability?  The conflict boils down to whether you believe Haml should strictly be used for skeletal HTML structure or whether it occupies some place in content generation.  Personally, I take the former approach.  The cleaner the Haml, the cleaner the view will feel.  Isn't that what Haml was designed for in the first place, to make a cleaner templating language?  I say, leave the styling to the CSS.



