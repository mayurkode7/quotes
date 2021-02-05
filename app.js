const app = () => {
    const nextBtn = document.getElementById('next')
    const quoteText = document.getElementById('quoteText')
    const authorText = document.getElementById('author')
    const body = document.querySelector('body')
    const themes = document.querySelectorAll('.theme span')
    themes.forEach(theme => {
        theme.addEventListener("click", function () {
            body.classList = null
            body.classList.add(this.className)
        })
    })
    async function randomQuote() {
        const response = await fetch('https://api.quotable.io/random')
        const data = await response.json()
        quoteText.textContent = data.content
        authorText.textContent = "- " + data.author
    }
    nextBtn.addEventListener("click", randomQuote)
    randomQuote()
}
app();