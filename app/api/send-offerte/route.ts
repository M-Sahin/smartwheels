import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  // Data parsen
  const formData = await req.formData();
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const service = formData.get("service") as string;
  const otherService = formData.get("otherService") as string;
  const aantal = formData.get("aantal") as string;
  const maat = formData.get("maat") as string;
  const merk = formData.get("merk") as string;
  const description = formData.get("description") as string;

  // Bestanden ophalen
  const attachments: any[] = [];
  for (const entry of formData.entries()) {
    const [key, value] = entry;
    if (key === "photos" && value instanceof File) {
      const buffer = Buffer.from(await value.arrayBuffer());
      attachments.push({
        filename: value.name,
        content: buffer,
        contentType: value.type,
      });
    }
  }

  // Dit nog aanpassen voor klant
  const transporter = nodemailer.createTransport({
    service: "Outlook365",
    auth: {
      user: "smartwheels1@outlook.com",
      pass: process.env.OUTLOOK_APP_PASSWORD, // Zet dit in .env.local
    },
  });

  const mailOptions = {
    from: email,
    to: "smartwheels1@outlook.com",
    subject: `Nieuwe offerte aanvraag van ${name}`,
    html: `
      <h2>Nieuwe offerte aanvraag</h2>
      <p><strong>Naam:</strong> ${name}</p>
      <p><strong>E-mail:</strong> ${email}</p>
      <p><strong>Telefoon:</strong> ${phone}</p>
      <p><strong>Dienst(en):</strong> ${service}${otherService ? `, ${otherService}` : ""}</p>
      <p><strong>Aantal velgen:</strong> ${aantal}</p>
      <p><strong>Velgmaat:</strong> ${maat}</p>
      <p><strong>Merk/type:</strong> ${merk}</p>
      <p><strong>Omschrijving:</strong> ${description}</p>
      <p><strong>Foto's:</strong> ${attachments.length > 0 ? `${attachments.length} bijlage(n)` : "Geen"}</p>
    `,
    attachments,
  };

  // Bevestigingsmail naar gebruiker
  const bevestigingOptions = {
    from: "smartwheels1@outlook.com",
    to: email,
    subject: "Bevestiging van uw offerte-aanvraag bij SmartWheels",
    html: `
      <h2>Bevestiging van uw offerte-aanvraag</h2>
      <p>Beste ${name},</p>
      <p>Bedankt voor uw offerte-aanvraag bij SmartWheels! We hebben uw aanvraag goed ontvangen en nemen zo snel mogelijk contact met u op.</p>
      <h3>Overzicht van uw aanvraag:</h3>
      <ul>
        <li><strong>Naam:</strong> ${name}</li>
        <li><strong>E-mail:</strong> ${email}</li>
        <li><strong>Telefoon:</strong> ${phone}</li>
        <li><strong>Dienst(en):</strong> ${service}${otherService ? `, ${otherService}` : ""}</li>
        <li><strong>Aantal velgen:</strong> ${aantal}</li>
        <li><strong>Velgmaat:</strong> ${maat}</li>
        <li><strong>Merk/type:</strong> ${merk}</li>
        <li><strong>Omschrijving:</strong> ${description}</li>
      </ul>
      <p>Heeft u vragen? U kunt altijd reageren op deze e-mail.</p>
      <p>Met vriendelijke groet,<br/>SmartWheels</p>
    `,
    attachments,
  };

  try {
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(bevestigingOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    const err = error as Error;
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
