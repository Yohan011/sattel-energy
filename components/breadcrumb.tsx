import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400 mb-6">
      <Link href="/" className="flex items-center hover:text-gray-900 dark:hover:text-gray-100">
        <Home className="h-4 w-4" />
        <span className="sr-only">Accueil</span>
      </Link>
      <ChevronRight className="h-4 w-4" />
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {item.href ? (
            <Link href={item.href} className="hover:text-gray-900 dark:hover:text-gray-100">
              {item.label}
            </Link>
          ) : (
            <span className="font-medium text-gray-900 dark:text-gray-100">{item.label}</span>
          )}
          {index < items.length - 1 && <ChevronRight className="h-4 w-4 mx-1" />}
        </div>
      ))}
    </nav>
  )
}
