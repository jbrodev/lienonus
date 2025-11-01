import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ReferralEmailRequest {
  patientName: string;
  patientPhone: string;
  patientEmail?: string;
  dateOfInjury: string;
  injuryType: string;
  specialty: string;
  referringName: string;
  referringCompany: string;
  referringPhone: string;
  referringEmail: string;
  notes?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: ReferralEmailRequest = await req.json();

    console.log("Processing referral email for patient:", data.patientName);

    const emailResponse = await resend.emails.send({
      from: "Lien On Us Medical Referrals <onboarding@resend.dev>",
      to: ["referrals@lienonusmedical.com"],
      replyTo: data.referringEmail,
      subject: `New Referral: ${data.patientName} - ${data.injuryType}`,
      html: `
        <h1>New Patient Referral</h1>
        
        <h2>Patient Information</h2>
        <p><strong>Name:</strong> ${data.patientName}</p>
        <p><strong>Phone:</strong> ${data.patientPhone}</p>
        ${data.patientEmail ? `<p><strong>Email:</strong> ${data.patientEmail}</p>` : ''}
        <p><strong>Date of Injury:</strong> ${data.dateOfInjury}</p>
        <p><strong>Type of Injury:</strong> ${data.injuryType}</p>
        <p><strong>Specialty Required:</strong> ${data.specialty}</p>
        
        <h2>Referring Party Information</h2>
        <p><strong>Referring Party:</strong> ${data.referringName}</p>
        <p><strong>Phone:</strong> ${data.referringPhone}</p>
        <p><strong>Email:</strong> ${data.referringEmail}</p>
        
        ${data.notes ? `
        <h2>Additional Notes</h2>
        <p>${data.notes.replace(/\n/g, '<br>')}</p>
        ` : ''}
        
        <hr style="margin: 20px 0;">
        <p style="color: #666; font-size: 12px;">This referral was submitted through the Lien On Us Medical website.</p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-referral-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
