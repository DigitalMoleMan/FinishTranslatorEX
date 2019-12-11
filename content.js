
const rules = [
    { replace: /g/gi, with: 'k' },
    { replace: /k/gi, with: 'kk' },
    { replace: /b/gi, with: 'p' },
    { replace: /i/gi, with: 'ii' },
    { replace: /å/gi, with: 'ä' },
    { replace: /d/gi, with: 't' },
    { replace: /a/gi, with: 'ai' },
    { replace: /e/gi, with: 'ei' },
    { replace: /meit/gi, with: 'saatana' },
    { replace: /jaikk/gi, with: 'saatana' }
]

var elements = document.querySelectorAll('h1, h2, h3, h4, h5, p, b, a, li, td, caption, span, label, button, input');

for (let e of elements) {
    let baseURI = e.baseURI;
    for (let r of rules) {
        e.innerText = e.innerText.replace(r.replace, r.with);
    }
    e.baseURI = baseURI;
}