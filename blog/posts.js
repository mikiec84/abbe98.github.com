---
layout: none
---
abbesPosts({
  "posts" : [
    {% for post in site.posts %}
    "{{ post.url }}"{% unless forloop.last %},{% endunless %}
    {% endfor %}
  ]
});