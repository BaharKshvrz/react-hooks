import useTranslation from './useTranslation'

const TranslationComponent = () => {
  const { language, setLanguage, t } = useTranslation()

  return (
    <>
       <div> {language} </div>
       <div> {t("hi")} </div>
       <div> {t("bye")} </div>
       <div> {t("nested.value")} </div>
       <button onClick={() => setLanguage("sp")}>Change to Spanish</button>
       <button onClick={() => setLanguage("en")}>Change to English</button>
    </>
  )
}

export default TranslationComponent
