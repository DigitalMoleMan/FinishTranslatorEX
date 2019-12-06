
var rules = [
    { replace: 'g', with: 'k' },
    { replace: 'k', with: 'kk' },
    { replace: 'b', with: 'p' },
    { replace: 'i', with: 'ii' },
    { replace: 'å', with: 'ä' },
    { replace: 'd', with: 't' },
    { replace: 'a', with: 'ai' },
    { replace: 'e', with: 'ei' },
    { replace: 'meit', with: 'saatana' },
    { replace: 'jaikk', with: 'saatana' }
]

var elements = document.body.getElementsByTagName('*');

for (let element of elements) {
    for (let node of element.childNodes) {
        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text;
            for (let rule of rules) {
                replacedText = text.replace(rule.replace, rule.with);
            }


            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}