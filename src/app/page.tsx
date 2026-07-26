import { portfolioData } from "@/data/portfolioData";
import Link from "next/link";
import { Download, Mail, ExternalLink, Github, Calendar, MapPin, Briefcase } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      
      {/* HEADER / NAVIGATION */}
      <header className="w-full fixed top-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">Patrick J.K.</div>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
            <Link href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">À propos</Link>
            <Link href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Compétences</Link>
            <Link href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projets</Link>
            <Link href="#experience" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Parcours</Link>
            <Link href="#cv" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">CV</Link>
          </nav>
          <Link href="#contact" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors">
            Me contacter
          </Link>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="hero" className="w-full max-w-6xl mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-32 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight">
            Créateur d&apos;applications <span className="text-blue-600">Web</span> & Solutions <span className="text-purple-500">IA</span>.
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl">
            {portfolioData.profile.about}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="#projects" className="px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold rounded-lg text-center hover:opacity-90 transition-opacity">
              Voir mes réalisations
            </Link>
            <Link href="#cv" className="px-6 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold rounded-lg text-center border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center justify-center gap-2">
              <Download size={18} /> Télécharger mon CV
            </Link>
          </div>
          <div className="flex gap-4 pt-2 text-slate-500 dark:text-slate-400">
            <Link href={portfolioData.profile.github} target="_blank" className="font-bold hover:text-slate-900 dark:hover:text-white transition-colors">GitHub</Link>
            <Link href={portfolioData.profile.linkedin} target="_blank" className="font-bold hover:text-slate-900 dark:hover:text-white transition-colors">LinkedIn</Link>
            <Link href={`mailto:${portfolioData.profile.email}`} className="hover:text-slate-900 dark:hover:text-white transition-colors"><Mail size={24} /></Link>
          </div>
        </div>
        <div className="w-64 h-64 md:w-80 md:h-80 shrink-0 relative">
          <div className="absolute inset-0 bg-blue-600/20 dark:bg-blue-500/20 rounded-full blur-3xl"></div>
          <Image src="/profile.jpg" alt="Patrick" fill className="object-cover rounded-full border-4 border-white dark:border-slate-800 shadow-xl" />
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="w-full bg-slate-50 dark:bg-slate-900 py-20 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">Compétences Techniques</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
              <h3 className="font-semibold text-lg mb-4 text-blue-600 dark:text-blue-400">Développement Web</h3>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.development.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-md">{skill}</span>
                ))}
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
              <h3 className="font-semibold text-lg mb-4 text-purple-600 dark:text-purple-400">Data & IA</h3>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.dataAI.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-md">{skill}</span>
                ))}
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
              <h3 className="font-semibold text-lg mb-4 text-emerald-600 dark:text-emerald-400">Outils & DevOps</h3>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.devopsTools.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-md">{skill}</span>
                ))}
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
              <h3 className="font-semibold text-lg mb-4 text-orange-600 dark:text-orange-400">Méthodologie</h3>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.projectManagement.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-md">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="w-full max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">Mes Projets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map(project => (
            <div key={project.id} className="group relative bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <div className="h-48 w-full relative bg-slate-100 dark:bg-slate-700 overflow-hidden">
                <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-colors z-10"></div>
                {/* Fallback pattern if image is missing */}
                <div className="absolute inset-0 opacity-10 pattern-dots text-slate-900 dark:text-white"></div>
                <div className="absolute bottom-3 left-3 z-20">
                  <span className="px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-xs font-semibold rounded-full text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                  {project.problem}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map(tech => (
                    <span key={tech} className="text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700/50 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700/50 px-2 py-1 rounded">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-4 border-t border-slate-100 dark:border-slate-700 pt-4">
                  {project.github && (
                    <Link href={project.github} target="_blank" className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
                      <Github size={16} /> Code
                    </Link>
                  )}
                  {project.demo && (
                    <Link href={project.demo} target="_blank" className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
                      <ExternalLink size={16} /> Live Demo
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE & EDUCATION SECTION */}
      <section id="experience" className="w-full bg-slate-50 dark:bg-slate-900 py-20 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          {/* Experience Timeline */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-10 flex items-center gap-3">
              <Briefcase className="text-blue-600" /> Expériences
            </h2>
            <div className="relative border-l-2 border-slate-200 dark:border-slate-700 ml-4 space-y-12">
              {portfolioData.experiences.map((exp) => (
                <div key={exp.id} className="relative pl-8">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 bg-white dark:bg-slate-900 border-4 border-blue-600 rounded-full"></div>
                  <div className="mb-1 flex flex-wrap items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1"><Calendar size={14} /> {exp.startDate} - {exp.endDate}</span>
                    <span className="hidden sm:block">•</span>
                    <span className="flex items-center gap-1"><MapPin size={14} /> {exp.location}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                  <div className="text-blue-600 dark:text-blue-400 font-medium mb-3">{exp.company}</div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">{exp.description}</p>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2">
                        <span className="text-blue-500 mt-1">•</span> {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-10 flex items-center gap-3">
              <span className="text-purple-600 text-2xl font-serif">🎓</span> Formation
            </h2>
            <div className="relative border-l-2 border-slate-200 dark:border-slate-700 ml-4 space-y-12">
              {portfolioData.education.map((edu) => (
                <div key={edu.id} className="relative pl-8">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 bg-white dark:bg-slate-900 border-4 border-purple-600 rounded-full"></div>
                  <div className="mb-1 flex flex-wrap items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1"><Calendar size={14} /> {edu.startDate} - {edu.endDate}</span>
                    <span className="hidden sm:block">•</span>
                    <span className="flex items-center gap-1"><MapPin size={14} /> {edu.location}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{edu.degree}</h3>
                  <div className="text-purple-600 dark:text-purple-400 font-medium mb-3">{edu.school}</div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CV SECTION */}
      <section id="cv" className="w-full max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 text-center">Télécharger mes CV</h2>
        <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
          Je possède une double compétence qui se décline en deux profils distincts. Téléchargez le CV qui correspond le mieux à vos besoins pour mon alternance de 24 mois.
        </p>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* CV Dev */}
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-blue-100 dark:border-blue-900/50 shadow-lg shadow-blue-50 dark:shadow-none relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full"></div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Développeur Full-Stack</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 min-h-16">
              Mise en avant de React, Node.js, PHP, Java, la création d&apos;API et mes projets de développement web.
            </p>
            <div className="flex flex-col gap-3">
              <a href="/cv/CV_Patrick_Jovani_Developpeur_FullStack.pdf" download className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2">
                <Download size={18} /> Télécharger en PDF
              </a>
              <a href="/cv/CV_Patrick_Jovani_Developpeur_FullStack.docx" download className="w-full px-4 py-3 bg-white dark:bg-slate-700 hover:bg-slate-50 dark:hover:bg-slate-600 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-slate-600 font-medium rounded-lg transition-colors flex items-center justify-center gap-2">
                <Download size={18} /> Télécharger en DOCX
              </a>
            </div>
          </div>
          
          {/* CV Data/IA */}
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-purple-100 dark:border-purple-900/50 shadow-lg shadow-purple-50 dark:shadow-none relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-bl-full"></div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Data Analyst / IA</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 min-h-16">
              Mise en avant de Python, SQL, Power BI, le nettoyage de données et l&apos;implémentation de modèles (RAG).
            </p>
            <div className="flex flex-col gap-3">
              <a href="/cv/CV_Patrick_Jovani_Data_IA.pdf" download className="w-full px-4 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2">
                <Download size={18} /> Télécharger en PDF
              </a>
              <a href="/cv/CV_Patrick_Jovani_Data_IA.docx" download className="w-full px-4 py-3 bg-white dark:bg-slate-700 hover:bg-slate-50 dark:hover:bg-slate-600 text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-slate-600 font-medium rounded-lg transition-colors flex items-center justify-center gap-2">
                <Download size={18} /> Télécharger en DOCX
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-slate-900 text-slate-400 py-8 text-center mt-auto">
        <p>© 2026 {portfolioData.profile.name}. Tous droits réservés.</p>
        <p className="text-sm mt-2">Design optimisé pour l&apos;accessibilité et la performance (Next.js).</p>
      </footer>
    </main>
  );
}
