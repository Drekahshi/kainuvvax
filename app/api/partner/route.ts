import { NextResponse } from "next/server";
import { z } from "zod";

const partnerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  organization: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  role: z.enum(["cfa", "producer", "partner", "other"], {
    errorMap: () => ({ message: "Please select your role" }),
  }),
  message: z.string().min(10, "Message must be at least 10 characters"),
  honeypot: z.string().max(0, "Bot submission rejected"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = partnerSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid form submission", details: result.error.format() },
        { status: 400 }
      );
    }

    const { name, organization, email, role, message } = result.data;

    // Log the valid submission securely (email provider stub interface)
    console.log("[PARTNER INQUIRY RECEIVED]:", {
      name,
      organization: organization || "N/A",
      email,
      role,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: "Thank you! Your partnership inquiry has been received." },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
