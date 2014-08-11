var urls = [];
$('.UserContentListItem>span>span>a').each(function(index) { urls.push($(this).attr("href")); });
// console.log(urls.join("\n"));