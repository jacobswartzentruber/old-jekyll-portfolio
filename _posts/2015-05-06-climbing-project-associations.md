---
layout: article
title: "Climbing Project Associations"
modified:
categories: 
excerpt:
tags: []
image:
  feature:
  teaser: climbON-teaser.jpg
  thumb:
date: 2015-05-06T09:43:02-05:00
---

At the heart of ClimbON, the rock-climbing application I am currently developing, lies the ability to share and catalogue routes users complete.  In the climbing community, routes a climber is currently working to complete are known as "projects." It is not uncommon to hear "What projects are you working on?" or "Completed any projects recently?" as you walk around the gym.  As posts are the bread and butter of a blog, projects are the lifeblood of ClimbON.  The entire site would not exist as imagined if there were no projects.  Since routes, gyms and climbers have already been defined, it was high time I began work on implementing project associations.

###Overview of Site Structure

![ClimbON data visualization]({{ site.url }}/assets/climbON_project.png){: .image-center }

The visualization above helps illustrate how models are organized and linked to one another in ClimbON.  The User model stores all data relevant to login, signup, password recovery, email validation, etc.  The Climber and Gym models are linked to one User model through a :has_one association.  The Climber and Gym models are used to store localized information more appropriate to their role.  Routes are created by a Gym when they are first set by employees and store route name, difficulty, etc.  Each route :belongs_to one gym and each gym :has_many routes.  While climbers do not own these routes, they build relationships to them by designating them as projects.  Each climber :has_many routes :through projects and each route :has_many climbers :through projects.  

###Project Association Intricacies

Since project states vary as a climber makes progress on a route, project relationships must store additional data beyond simply recognizing who they belong to.  If you take a look at the model above, projects have a database column titled :completed.  This boolean variable records whether a project has been completed by a climber or whether they are still working on it.  Accessing and changing this variable requires a bit of explanation.  Lets first take a look at how the Climber model defines its Route association.

{%highlight ruby linenos%}
has_many :projects, dependent: :destroy
has_many :routes, through: :projects do 
  def completed
    where("projects.completed = (?)", true)
  end
  def uncompleted
    where("projects.completed = (?)", false)
  end
end
{%endhighlight%}

First, Climber :has_many projects with a :destroy dependency.  If a climber were to be deleted from the database, all of her projects would be deleted as well.  Since the project model stores a climber_id and route_id,  we can use our projects to access specific routes.  On line number 2, the Climber model defines a :has_many route association :through the project model.  This means we can call,

{%highlight ruby%}
<%= random_climber.routes %>
{%endhighlight%}

in our views, returning all routes linked to random_climber through her project relationships.  The last bit of our Climber model code is where the fun customization appears.  By defining "completed" and "uncompleted" methods within the :routes association, it allows targeted route selection through projects.  For example, when the "completed" method is called, the only routes that will be returned are the ones linked through projects where :completed is true.  In views, we can now call the following code to return all completed routes for a climber.

{%highlight ruby%}
<%= random_climber.routes.completed %>
{%endhighlight%}

With this way of linking the climber and route models, accessing the requisite information in views becomes a lot easier.  This is the entirety of my code for a climber profile at the moment,

{%highlight html%}
<h1><%= @climber.user.name %>'s Profile</h1>
<div class="row">
  <section class="col-md-6">
    <h2> Projects </h2>
    <div class="routes">
    	<%= render @climber.routes.uncompleted %>
  	</div>
  </section>
  <section class="col-md-6">
    <h2> Completed Routes </h2>
    <div class="routes">
    	<%= render @climber.routes.completed %>
  	</div>
  </section>
</div>
{%endhighlight%}

Pretty clean, no?  In future posts I will go more in depth on how I am using projects and the various methods I have written to access/manipulate them.  Thanks for reading about Project associations and if you have comments, please let me know.  I am sure I have said this before somewhere, but feel free to check out the [latest ClimbON source code at my GitHub repository](https://github.com/jacobswartzentruber/climbing_app).

###Resources

I found [draw.io](https://www.draw.io/) when I was looking for an online program to construct the site structure schematic.  I found it incredibly useful and would recommend it to anyone looking to create data visualization flowcharts.
