const postfix = "_content_li";
const goTo = function(seqno) {
    window.open("https://cafe.naver.com/destinychild/" + seqno);
}

let sheet = null;
const head = document.head || document.getElementsByTagName('head')[0];
const contentsBody = document.getElementById("contentsBody");

const writeData = function(contents) {

    if (sheet != null) head.removeChild(sheet);

    sheet = document.createElement('style');

    const classified = Object.keys(contents);

    const contentsBodyElements = [];

    for (let i in classified) {

        const keyword = classified[i];
        if (keyword == 'isFirst') continue;

        const sheet_str = "h2." + keyword + " { background: url('images/" + keyword + ".png') no-repeat;" +
            "    background-size: contain;" +
            "    padding-left: 40px; }";
        sheet.type='text/css';
        sheet.appendChild(document.createTextNode(sheet_str));
        head.appendChild(sheet);

        contentsBodyElements.push("<section class='section_", keyword, "'>");
        contentsBodyElements.push("<div class='title'>");
        contentsBodyElements.push("<h2 class='", keyword, "'> ", contents[keyword].label, "</h2>");
        contentsBodyElements.push("</div>");
        contentsBodyElements.push("<div class='content'>");
        contentsBodyElements.push("<ul id='", keyword, postfix, "'>");

        const elements = contents[keyword].contents;
        for (let i in elements) {
            const element = elements[i];
            // liElements.push("<li onclick='goTo(" + element.seqno + ")'>[" + element.category + "] " + element.summary + "(" + element.title + " by." + element.author+ ") - " + element.registered + "</li>")
            contentsBodyElements.push("<li><span onclick='goTo(" + element.seqno + ")'>[" + categories[element.category].label + "] " + element.title + " - by." + element.author+ " - " + element.registered + "</span></li>")
        }

        contentsBodyElements.push("</ul>");
        contentsBodyElements.push("</div>");
        contentsBodyElements.push("</section>");

    }

    contentsBody.innerHTML = contentsBodyElements.join('');

};

const writeDataByLevel = function() {

    if (levels.isFirst === true) {
        levels.isFirst = false;
        for (let i in contents) {
            const content = contents[i];
            levels[content.level].contents.push(content);
        }
    }

    writeData(levels);
};
writeDataByLevel();

const writeDataByCategory = function() {

    if (categories.isFirst === true) {
        categories.isFirst = false;
        for (let i in contents) {
            const content = contents[i];
            categories[content.category].contents.push(content);
        }
    }

    writeData(categories);
};