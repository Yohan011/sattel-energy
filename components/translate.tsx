"use client"

import { useLanguage } from "@/lib/i18n/language-context"
import { getTranslation, type TranslationKey } from "@/lib/i18n/translations"

interface TranslateProps {
  text: TranslationKey
}

export function Translate({ text }: TranslateProps) {
  const { language } = useLanguage()

  try {
    return <>{getTranslation(text, language)}</>
  } catch (error) {
    console.error(`Translation missing for key: ${text}`)
    // Return the key as fallback to make missing translations obvious
    return <span className="text-red-500">{text}</span>
  }
}

// Also export as default for flexibility
export default Translate
