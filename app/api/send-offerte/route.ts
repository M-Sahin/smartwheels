import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
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

    // Validatie
    if (!name || !email || !phone) {
      return NextResponse.json(
        { success: false, error: "Naam, email en telefoon zijn verplicht" },
        { status: 400 }
      );
    }

    // Check environment variables
    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY environment variable");
      return NextResponse.json(
        { success: false, error: "Server configuratie fout. Probeer later opnieuw." },
        { status: 500 }
      );
    }

    // Bestanden ophalen
    const attachments: Array<{ filename: string; content: Buffer; contentType: string }> = [];
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

    console.log("Sending emails via Resend...");

    // Mail naar SmartWheels (admin)
    const adminEmailHtml = `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <h2 style="color: #ea580c;">Nieuwe offerte aanvraag</h2>
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr style="background-color: #f5f5f5;">
            <td style="padding: 10px; font-weight: bold;">Naam:</td>
            <td style="padding: 10px;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold;">E-mail:</td>
            <td style="padding: 10px;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr style="background-color: #f5f5f5;">
            <td style="padding: 10px; font-weight: bold;">Telefoon:</td>
            <td style="padding: 10px;">${phone}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold;">Dienst(en):</td>
            <td style="padding: 10px;">${service || "Niet opgegeven"}${otherService ? `, ${otherService}` : ""}</td>
          </tr>
          <tr style="background-color: #f5f5f5;">
            <td style="padding: 10px; font-weight: bold;">Aantal velgen:</td>
            <td style="padding: 10px;">${aantal || "Niet opgegeven"}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold;">Velgmaat:</td>
            <td style="padding: 10px;">${maat || "Niet opgegeven"}</td>
          </tr>
          <tr style="background-color: #f5f5f5;">
            <td style="padding: 10px; font-weight: bold;">Merk/type:</td>
            <td style="padding: 10px;">${merk || "Niet opgegeven"}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold;">Bijlagen:</td>
            <td style="padding: 10px;">${attachments.length > 0 ? `${attachments.length} foto('s)` : "Geen"}</td>
          </tr>
        </table>
        ${description ? `<h3>Omschrijving:</h3><p>${description}</p>` : ""}
        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
        <p style="color: #666; font-size: 12px;"><em>Dit is een automatisch gegenereerde e-mail.</em></p>
      </div>
    `;

    const confirmationEmailHtml = `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <h2 style="color: #ea580c;">Bevestiging van uw offerte-aanvraag</h2>
        <p>Beste ${name},</p>
        <p>Bedankt voor uw offerte-aanvraag bij SmartWheels! We hebben uw aanvraag goed ontvangen en nemen zo snel mogelijk contact met u op.</p>
        
        <h3>Overzicht van uw aanvraag:</h3>
        <ul>
          <li><strong>Naam:</strong> ${name}</li>
          <li><strong>E-mail:</strong> ${email}</li>
          <li><strong>Telefoon:</strong> ${phone}</li>
          <li><strong>Dienst(en):</strong> ${service || "Niet opgegeven"}${otherService ? `, ${otherService}` : ""}</li>
          <li><strong>Aantal velgen:</strong> ${aantal || "Niet opgegeven"}</li>
          <li><strong>Velgmaat:</strong> ${maat || "Niet opgegeven"}</li>
          <li><strong>Merk/type:</strong> ${merk || "Niet opgegeven"}</li>
        </ul>

        ${description ? `<h3>Uw opmerking:</h3><p>${description}</p>` : ""}
        
        <h3>Contactgegevens SmartWheels</h3>
        <p>
          <strong>Adres:</strong> Expeditieweg 8F, 6673DV Andelst<br/>
          <strong>Email:</strong> smartwheels1@outlook.com<br/>
          <strong>Telefoon:</strong> Bel of mail ons voor vragen
        </p>

        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
        <p>Met vriendelijke groet,<br/><strong style="color: #ea580c;">SmartWheels</strong></p>
        <p style="color: #666; font-size: 12px;"><em>Dit is een automatische bevestiging. Heeft u vragen? Reageer op deze e-mail.</em></p>
      </div>
    `;

    // Send admin email
    console.log("Sending admin email...");
    await resend.emails.send({
      from: "SmartWheels <onboarding@resend.dev>",
      to: "smartwheels1@outlook.com",
      replyTo: email,
      subject: `Nieuwe offerte aanvraag van ${name}`,
      html: adminEmailHtml,
    });
    console.log("Admin email sent successfully");

    // Send confirmation email to customer
    console.log("Sending confirmation email to customer...");
    await resend.emails.send({
      from: "SmartWheels <smartwheels1@outlook.com>",
      to: email,
      subject: "Bevestiging van uw offerte-aanvraag bij SmartWheels",
      html: confirmationEmailHtml,
    });
    console.log("Confirmation email sent successfully");

    return NextResponse.json({
      success: true,
      message: "Uw offerte-aanvraag is succesvol verzonden!",
    });
  } catch (error) {
    const err = error as Error;
    console.error("Email error details:", {
      message: err.message,
      stack: err.stack,
      name: err.name,
    });

    return NextResponse.json(
      {
        success: false,
        error: err.message || "Er is een fout opgetreden bij het versturen van uw aanvraag. Probeer het later opnieuw of neem rechtstreeks contact met ons op.",
      },
      { status: 500 }
    );
  }
}