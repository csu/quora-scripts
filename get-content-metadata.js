var metadata = [];
$('.UserContentListItem>.metadata').each(function(index) { metadata.push($(this).text()); });
// console.log(metadata.join("\n"));