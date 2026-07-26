/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars */
import { Document, Paragraph, TextRun, Packer, HeadingLevel } from "docx";
import * as fs from "fs";
import * as path from "path";
import puppeteer from "puppeteer";
import { portfolioData } from "../src/data/portfolioData";

const PUBLIC_DIR = path.join(__dirname, "../public/cv");

// Assurer que le dossier existe
if (!fs.existsSync(PUBLIC_DIR)) {
  fs.mkdirSync(PUBLIC_DIR, { recursive: true });
}

// Convert image to base64 for embedding in PDF
function getBase64Image(filePath: string) {
  try {
    const imgData = fs.readFileSync(filePath);
    return `data:image/jpeg;base64,${imgData.toString("base64")}`;
  } catch (e) {
    return "";
  }
}

// Helper pour générer le DOCX (Garde un style classique)
async function generateDocx(filename: string, title: string, skillsFilter: (s: any) => string[]) {
  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          new Paragraph({ text: portfolioData.profile.name, heading: HeadingLevel.TITLE }),
          new Paragraph({ text: `${title} - ${portfolioData.profile.tagline}`, heading: HeadingLevel.HEADING_1 }),
          new Paragraph({
            children: [
              new TextRun(`📍 ${portfolioData.profile.location} | `),
              new TextRun(`📞 ${portfolioData.profile.phone} | `),
              new TextRun(`📧 ${portfolioData.profile.email}`),
            ],
          }),
          new Paragraph({ text: "" }),
          new Paragraph({ text: "Profil", heading: HeadingLevel.HEADING_2 }),
          new Paragraph({ text: portfolioData.profile.about }),
          new Paragraph({ text: "" }),
          new Paragraph({ text: "Compétences", heading: HeadingLevel.HEADING_2 }),
          new Paragraph({ text: skillsFilter(portfolioData.skills).join(", ") }),
          new Paragraph({ text: "" }),
          new Paragraph({ text: "Expériences Professionnelles", heading: HeadingLevel.HEADING_2 }),
          ...portfolioData.experiences.flatMap((exp) => [
            new Paragraph({
              children: [
                new TextRun({ text: `${exp.role} - ${exp.company}`, bold: true }),
                new TextRun({ text: ` | ${exp.startDate} - ${exp.endDate}`, italics: true }),
              ],
            }),
            new Paragraph({ text: exp.description }),
            ...exp.achievements.map((ach) => new Paragraph({ text: `• ${ach}` })),
            new Paragraph({ text: "" }),
          ]),
          new Paragraph({ text: "Formation", heading: HeadingLevel.HEADING_2 }),
          ...portfolioData.education.flatMap((edu) => [
            new Paragraph({
              children: [
                new TextRun({ text: `${edu.degree} - ${edu.school}`, bold: true }),
                new TextRun({ text: ` | ${edu.startDate} - ${edu.endDate}`, italics: true }),
              ],
            }),
            new Paragraph({ text: edu.description }),
            new Paragraph({ text: "" }),
          ]),
        ],
      },
    ],
  });

  const buffer = await Packer.toBuffer(doc);
  fs.writeFileSync(path.join(PUBLIC_DIR, filename), buffer);
  console.log(`✅ ${filename} généré avec succès.`);
}

// HTML to PDF Helper via Puppeteer (Premium Design)
async function generatePdf(filename: string, title: string, skillsFilter: (s: any) => string[], projectCategory: string) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  const base64Photo = getBase64Image(path.join(__dirname, "../public/profile.jpg"));
  const skills = skillsFilter(portfolioData.skills);
  const relevantProjects = portfolioData.projects.filter(p => p.category.includes(projectCategory)).slice(0, 3);
  
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="fr">
      <head>
        <meta charset="UTF-8">
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
        <style>
          body { font-family: 'Inter', sans-serif; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .page { width: 210mm; min-height: 297mm; display: flex; background: #fff; overflow: hidden; }
          .sidebar { width: 33%; background-color: #0f172a; color: #f1f5f9; padding: 30px 20px; }
          .main-content { width: 67%; padding: 30px; background-color: #ffffff; }
          
          h1 { font-weight: 800; font-size: 26px; color: #0f172a; line-height: 1.1; margin-bottom: 4px; }
          .title-role { font-weight: 600; font-size: 16px; color: #2563eb; margin-bottom: 15px; }
          
          .section-title-main { font-weight: 700; font-size: 16px; color: #0f172a; text-transform: uppercase; border-bottom: 2px solid #e2e8f0; padding-bottom: 4px; margin-bottom: 12px; margin-top: 20px; }
          .section-title-side { font-weight: 700; font-size: 14px; color: #38bdf8; text-transform: uppercase; border-bottom: 1px solid #334155; padding-bottom: 4px; margin-bottom: 12px; margin-top: 24px; }
          
          .contact-item { font-size: 11px; margin-bottom: 8px; display: flex; align-items: center; gap: 8px; }
          
          .exp-item { margin-bottom: 14px; }
          .exp-role { font-weight: 700; font-size: 13px; color: #0f172a; }
          .exp-meta { font-size: 11px; color: #64748b; font-weight: 500; margin-bottom: 4px; }
          .exp-desc { font-size: 11px; color: #334155; line-height: 1.4; margin-bottom: 4px; }
          .exp-bullets { font-size: 11px; color: #475569; padding-left: 14px; margin: 0; line-height: 1.4; }
          
          .skill-pill { background: #1e293b; color: #e2e8f0; font-size: 10px; padding: 3px 8px; border-radius: 4px; margin-right: 4px; margin-bottom: 6px; display: inline-block; font-weight: 500; border: 1px solid #334155; }
          .lang-item { font-size: 11px; margin-bottom: 4px; display: flex; justify-content: space-between; }
        </style>
      </head>
      <body>
        <div class="page">
          <!-- SIDEBAR -->
          <div class="sidebar">
            <div style="text-align: center; margin-bottom: 24px;">
              ${base64Photo ? `<img src="${base64Photo}" style="width: 130px; height: 130px; border-radius: 50%; object-fit: cover; border: 3px solid #38bdf8; margin: 0 auto; box-shadow: 0 4px 10px rgba(0,0,0,0.3);" />` : ''}
            </div>
            
            <div class="section-title-side">Contact</div>
            <div class="contact-item">📍 ${portfolioData.profile.location}</div>
            <div class="contact-item">📞 ${portfolioData.profile.phone}</div>
            <div class="contact-item">📧 ${portfolioData.profile.email}</div>
            <div class="contact-item">🔗 ${portfolioData.profile.linkedin.replace('https://', '')}</div>
            <div class="contact-item">💻 ${portfolioData.profile.github.replace('https://', '')}</div>

            <div class="section-title-side">Compétences</div>
            <div style="margin-bottom: -6px;">
              ${skills.map(s => `<span class="skill-pill">${s}</span>`).join('')}
            </div>
            
            <div class="section-title-side">Outils & Méthodes</div>
            <div style="margin-bottom: -6px;">
              ${[...portfolioData.skills.devopsTools, ...portfolioData.skills.projectManagement].map(s => `<span class="skill-pill">${s}</span>`).join('')}
            </div>

            <div class="section-title-side">Langues</div>
            ${portfolioData.profile.languages.map(l => `
              <div class="lang-item">
                <span style="font-weight: 600;">${l.name}</span>
                <span style="color: #94a3b8;">${l.level}</span>
              </div>
            `).join('')}
          </div>

          <!-- MAIN CONTENT -->
          <div class="main-content">
            <h1>${portfolioData.profile.name.toUpperCase()}</h1>
            <div class="title-role">${title.toUpperCase()}</div>
            
            <p style="font-size: 12px; color: #334155; line-height: 1.5; text-align: justify; margin-bottom: 10px;">
              ${portfolioData.profile.about}
            </p>

            <div class="section-title-main">Expériences Professionnelles</div>
            ${portfolioData.experiences.map(exp => `
              <div class="exp-item">
                <div class="exp-role">${exp.role} — <span style="color: #2563eb;">${exp.company}</span></div>
                <div class="exp-meta">${exp.startDate} - ${exp.endDate} | ${exp.location}</div>
                <div class="exp-desc">${exp.description}</div>
                <ul class="exp-bullets">
                  ${exp.achievements.map(a => `<li>${a}</li>`).join('')}
                </ul>
              </div>
            `).join('')}

            <div class="section-title-main">Projets Pertinents</div>
            ${relevantProjects.map(proj => `
              <div class="exp-item" style="margin-bottom: 10px;">
                <div class="exp-role">${proj.title} <span style="font-weight: normal; color: #64748b; font-size: 11px;">(${proj.technologies.join(', ')})</span></div>
                <div class="exp-desc" style="margin-top: 2px;">${proj.problem} ${proj.solution}</div>
              </div>
            `).join('')}

            <div class="section-title-main" style="margin-top: 15px;">Formation</div>
            ${portfolioData.education.map(edu => `
              <div class="exp-item" style="margin-bottom: 10px;">
                <div class="exp-role">${edu.degree}</div>
                <div class="exp-meta">${edu.startDate} - ${edu.endDate} | ${edu.school}, ${edu.location}</div>
                <div class="exp-desc">${edu.description}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </body>
    </html>
  `;

  await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
  await page.pdf({ 
    path: path.join(PUBLIC_DIR, filename), 
    format: 'A4',
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' }
  });
  await browser.close();
  console.log(`✅ ${filename} généré avec succès (Premium Design).`);
}

async function run() {
  console.log("Génération des CVs en cours...");
  
  // Dev Full-Stack CV
  await generateDocx("CV_Patrick_Jovani_Developpeur_FullStack.docx", "Développeur Web Full-Stack", (s) => s.development);
  await generatePdf("CV_Patrick_Jovani_Developpeur_FullStack.pdf", "Développeur Web Full-Stack", (s) => s.development, "Développement");

  // Data IA CV
  await generateDocx("CV_Patrick_Jovani_Data_IA.docx", "Data Analyst & IA", (s) => s.dataAI);
  await generatePdf("CV_Patrick_Jovani_Data_IA.pdf", "Data Analyst & IA", (s) => s.dataAI, "Data");

  console.log("Génération terminée ! 🎉");
}

run().catch(console.error);
