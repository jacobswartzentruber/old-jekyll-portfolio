---
layout: archive
title: ClimbON
type: page
image:
  feature: climbON-feature.jpg
---

ClimbON is a Ruby on Rails web application allowing climbing gyms to track, manage and promote routes set on their walls.  Individual climbers registered through ClimbON can browse routes set by gyms, track their progress on specified routes and share their climbing history with other climbers.  As individual climbers work on routes and develop projects, gyms are able to access and aggregate this data to determine which walls are most popular, calculate the experience differential of their clientele and easily gather feedback.

**GitHub Repository:** [https://github.com/jacobswartzentruber/climbing_app](https://github.com/jacobswartzentruber/climbing_app)

**Heroku Production Server:** [https://glacial-bastion-8007.herokuapp.com/](https://glacial-bastion-8007.herokuapp.com/)

**Sandbox Accounts for Heroku:**

* User email: "sandboxClimber@example.com" or "sandboxGym@example.com"
* Password: "password"
* Or simply create your own account to explore!


###Specifications
**State of Application:** This is a project in development.  Certain features are accessible, however this isn't representative of the final product.  I am currently focusing on back-end architecture at the moment; hence, the generic bootstrap feel.  Check back every few days for updates!

**Languages:** Ruby, Rails, PostgreSQL

**Gems:** Bootstrap, Faker, Will-paginate


###Features

* Sign up as a Gym or Climber
	* User Accounts are separated into one of these two categories.  Each of the user accounts is provided with a different set of user management tools depending on their status.
* Gyms manage and organize routes their employees set
	* Routes are assigned to specific gyms and include name, difficulty, color of route and descriptions.  Images to come soon!
* Climbers select and organize routes as personal projects
	* Climbers create personal projects by pulling routes onto their profile page.  Projects are organized on climber profile pages according to how far the climber has progressed on that route.  
* Full customized authorization including password recovery and email activation

###Features in Development
* Gyms have access to data on which climbers access their routes and route success rates
	* Gyms will have the ability to aggregate all climbing data at route level and gym level.  This allows gyms to see what routes are most popular, whether their clientele climb specific degrees of difficulty and what feedback climbers are leaving for their routes.
* Gyms are able to post upcoming events
	* Gyms often have competitions and meetups scheduled throughout the month.  This would allow gyms to promote upcoming events and reach more potential participants.
* Climbers can friend other climbers
	* Like any other social network, climbers can see what their friends are climbing, brag about what they have accomplished and find new climbing partners.
* Climbers can share progress on social media
	* If a climber finishes a route they should be able to post their achievement to social media sites like Facebook or Twitter.
* Climbers can dictate what routes they climb per session
	* By recording the routes a climber attempts to climb every time she goes to the gym, she is able to accumulate a history of her progress.  She is then able to access graphs of completion percentages for various difficulties and see how many routes she climbs on average per visit.