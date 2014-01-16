---
layout: post
title: Markdown Test
---

This is just a major test for markdown, Jekyll excerpt and code highlighting.

{% highlight php %}
function search($query) {

	$page = $query['page'];
	$hitsPerPage = $query['hitsPerPage'];
	$querySearch = $query['search'];
	
	if (preg_match("/\\s/", $querySearch)) {
		$querySearch = 'text%3D"' . $querySearch . '"';
	}
	
	$i = 1;
	$startRecord = 1;
	while ($i < $page) {
		$i++;
		$startRecord = $i * $hitsPerPage;
	}
	
	$searchURL = 'http://www.kulturarvsdata.se/ksamsok/api?method=search&query=' . $querySearch . '&startRecord=' . $startRecord . '&hitsPerPage=' . $hitsPerPage . '&x-api=test';
	
	parseHits($searchURL, $hitsPerPage);
	echo $searchURL;
}
{% endhighlight %}

Test test test [test][1] **test** *test* 

 1. hello
 2. hello2
#test
### test
## test
 
  [1]: abbe98.github.io