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

// Helper pour générer le DOCX
async function generateDocx(filename: string, title: string, skillsFilter: (s: any) => string[]) {
  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          new Paragraph({
            text: portfolioData.profile.name,
            heading: HeadingLevel.TITLE,
          }),
          new Paragraph({
            text: `${title} - ${portfolioData.profile.tagline}`,
            heading: HeadingLevel.HEADING_1,
          }),
          new Paragraph({
            children: [
              new TextRun(`📍 ${portfolioData.profile.location} | `),
              new TextRun(`📞 ${portfolioData.profile.phone} | `),
              new TextRun(`📧 ${portfolioData.profile.email}`),
            ],
          }),
          new Paragraph({
            text: "",
          }),
          new Paragraph({
            text: "Profil",
            heading: HeadingLevel.HEADING_2,
          }),
          new Paragraph({
            text: portfolioData.profile.about,
          }),
          new Paragraph({
            text: "",
          }),
          new Paragraph({
            text: "Expériences Professionnelles",
            heading: HeadingLevel.HEADING_2,
          }),
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
          new Paragraph({
            text: "Formation",
            heading: HeadingLevel.HEADING_2,
          }),
          ...portfolioData.education.flatMap((edu) => [
            new Paragraph({
              children: [
                new TextRun({ text: `${edu.degree} - ${edu.school}`, bold: true }),
                new TextRun({ text: ` | ${edu.startDate} - ${edu.endDate}`, italics: true }),
              ],
            }),
          ]),
        ],
      },
    ],
  });

  const buffer = await Packer.toBuffer(doc);
  fs.writeFileSync(path.join(PUBLIC_DIR, filename), buffer);
  console.log(`✅ ${filename} généré avec succès.`);
}

// HTML to PDF Helper via Puppeteer
async function generatePdf(filename: string, title: string) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // HTML basique pour le CV
  const htmlContent = `
    <html>
      <head>
        <style>
          body { font-family: 'Helvetica', sans-serif; font-size: 12px; line-height: 1.5; padding: 40px; color: #1e293b; }
          h1 { font-size: 24px; color: #0f172a; margin-bottom: 5px; }
          h2 { font-size: 16px; color: #3b82f6; border-bottom: 1px solid #cbd5e1; padding-bottom: 5px; margin-top: 20px; }
          .contact { font-size: 11px; color: #64748b; margin-bottom: 20px; }
          .exp-title { font-weight: bold; font-size: 13px; }
          .exp-date { font-style: italic; color: #64748b; font-size: 11px; }
          ul { margin: 5px 0; padding-left: 20px; }
        </style>
      </head>
      <body>
        <h1>${portfolioData.profile.name}</h1>
        <div class="contact">
          📍 ${portfolioData.profile.location} | 📞 ${portfolioData.profile.phone} | 📧 ${portfolioData.profile.email} <br/>
          <strong>${title} - ${portfolioData.profile.tagline}</strong>
        </div>
        <h2>Profil</h2>
        <p>${portfolioData.profile.about}</p>
        
        <h2>Expériences Professionnelles</h2>
        ${portfolioData.experiences.map(exp => `
          <div>
            <span class="exp-title">${exp.role} - ${exp.company}</span>
            <span class="exp-date">(${exp.startDate} - ${exp.endDate})</span>
            <p style="margin: 3px 0;">${exp.description}</p>
            <ul>${exp.achievements.map(a => `<li>${a}</li>`).join('')}</ul>
          </div>
        `).join('')}

        <h2>Formation</h2>
        ${portfolioData.education.map(edu => `
          <div>
            <span class="exp-title">${edu.degree} - ${edu.school}</span>
            <span class="exp-date">(${edu.startDate} - ${edu.endDate})</span>
          </div>
        `).join('')}
      </body>
    </html>
  `;

  await page.setContent(htmlContent);
  await page.pdf({ path: path.join(PUBLIC_DIR, filename), format: 'A4' });
  await browser.close();
  console.log(`✅ ${filename} généré avec succès.`);
}

async function run() {
  console.log("Génération des CVs en cours...");
  
  // Dev Full-Stack CV
  await generateDocx("CV_Patrick_Jovani_Developpeur_FullStack.docx", "Développeur Web Full-Stack", (s) => s.development);
  await generatePdf("CV_Patrick_Jovani_Developpeur_FullStack.pdf", "Développeur Web Full-Stack");

  // Data IA CV
  await generateDocx("CV_Patrick_Jovani_Data_IA.docx", "Data Analyst & IA", (s) => s.dataAI);
  await generatePdf("CV_Patrick_Jovani_Data_IA.pdf", "Data Analyst & IA");

  console.log("Génération terminée ! 🎉");
}

run().catch(console.error);
