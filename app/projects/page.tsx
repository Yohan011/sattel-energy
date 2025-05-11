import ProjectsShowcase from "@/components/projects/projects-showcase"

export default function ProjectsPage() {
  return (
    <main className="flex-1">
      <section className="bg-gray-50 dark:bg-gray-800/50 py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Nos Projets</h1>
            <p className="text-gray-600 dark:text-gray-300">
              Découvrez nos projets d'énergie solaire en cours et réalisés à travers l'Afrique, démontrant notre
              engagement pour un avenir énergétique durable.
            </p>
          </div>
        </div>
      </section>

      <ProjectsShowcase />
    </main>
  )
}
