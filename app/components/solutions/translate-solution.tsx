"use client"

import { useLanguage } from "@/lib/i18n/language-context"
import { getTranslation, type TranslationKey } from "@/lib/i18n/translations"

interface TranslateSolutionProps {
  text: TranslationKey
  className?: string
}

export function TranslateSolution({ text, className = "" }: TranslateSolutionProps) {
  const { language } = useLanguage()

  try {
    return <span className={className}>{getTranslation(text, language)}</span>
  } catch (error) {
    console.error(`Translation missing for key: ${text}`)
    // Return the key as fallback to make missing translations obvious
    return <span className="text-red-500">{text}</span>
  }
}
