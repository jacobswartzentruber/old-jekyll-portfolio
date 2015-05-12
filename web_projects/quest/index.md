---
layout: archive
title: Quest
type: page
image:
  feature: quest-feature.jpg
---

Quest is a goal tracking web application built with Ruby on Rails.  Users create and manage "quests", designated lengths of time a user expects to pursue specific goals in his/her life.  The Quest application tracks current progress towards that goal and previous progress records, assigning ranks based on total time accumulated. Future plans for this application include a larger emphasis on gamification, making daily goal tracking more exciting.

###Specifications
**State of Application:** Backend architecture complete, still needs front-end design and theme

**Languages:** Ruby, Rails, PostgreSQL

**Gems:** Bootstrap, Devise, Factory Girl, RSpec, Capybara

**GitHub Repository:** [https://github.com/jacobswartzentruber/quest_app](https://github.com/jacobswartzentruber/quest_app)

**Heroku Production Server:** [https://serene-atoll-7750.herokuapp.com/](https://serene-atoll-7750.herokuapp.com/)

* Sandbox Account:

###Features

* Track Goals over a specified period of time
	* Progress bars visually communicate current progress toward the specified goal and are updated daily.
* Compare current progress to last successful progress run
	* So you messed up your last diet run by eating a few pieces of candy ten days before your goal?  Even though you didn't make it to your goal, Quest stores that record run and presents it as yet another milestone you can use to fuel your motivation for the next run.
* Attain ranks as you acquire consecutive days of goal progression
	* Make working toward goals a little more fun as you rack up experience points to attain new ranks and titles.  Stay with it long enough and you might make it to "Master" rank...