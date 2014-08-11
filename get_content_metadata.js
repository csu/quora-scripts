var urls = [];
$('.UserContentListItem>.metadata').each(function(index) { urls.push($(this).text()); });
// console.log(urls.join("\n"));