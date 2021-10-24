// this code sucks but is not the purpose of this repository

const setAppTheme = (theme, element) => {
  for (let key in theme) {
    element.style[key] = theme[key]
  }
}

const themeSwitcher = () => {
  const themes = [
    { color: "white", backgroundColor: "black" },
    { color: "black", backgroundColor: "white" },
  ]

  const maxThemeIndex = themes.length - 1
  let currentThemeIndex = 0

  const getNextTheme = () => {
    if (currentThemeIndex >= maxThemeIndex) {
      currentThemeIndex = 0
    } else {
      currentThemeIndex++
    }

    return themes[currentThemeIndex]
  }

  const getCurrentTheme = () => themes[currentThemeIndex]

  return { getNextTheme, currentThemeIndex, getCurrentTheme }
}

;(() => {
  const appWrapper = document.getElementById("app")
  const { getNextTheme, getCurrentTheme } = themeSwitcher()

  setAppTheme(getCurrentTheme(), appWrapper)

  appWrapper.addEventListener("click", () =>
    setAppTheme(getNextTheme(), appWrapper)
  )
})()
