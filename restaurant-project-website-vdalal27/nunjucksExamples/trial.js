var data = {
    title: "Constructing HTML Elements"
}

var template = [
    '<div class="tutorial">',
        '<h1 class="tutorial-heading">{{title}}<h1>',
    '</div>'
].join("\n");
// template: '<div ...>\n<h1 ...>{{title}}<h1>\n</div>'

var html = Mustache.render(template, data);
$("body").append(html);