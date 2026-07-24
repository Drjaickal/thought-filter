import { verifyWebhook } from "@clerk/nextjs/webhooks";
import { NextRequest, NextResponse } from "next/server";
import { syncUserService } from "@/services/auth/sync-user";

export async function POST(request: NextRequest) {
  try {
    const event = await verifyWebhook(request);

    switch (event.type) {
      case "user.created": {
        await syncUserService.handleUserCreated({
          clerkId: event.data.id,
          email: event.data.email_addresses[0]?.email_address ?? "",
          name:
            [event.data.first_name, event.data.last_name]
              .filter(Boolean)
              .join(" ") || null,
        });

        break;
      }

      case "user.updated": {
        await syncUserService.handleUserUpdated({
          clerkId: event.data.id,
          email: event.data.email_addresses[0]?.email_address ?? "",
          name:
            [event.data.first_name, event.data.last_name]
              .filter(Boolean)
              .join(" ") || null,
        });

        break;
      }

      case "user.deleted": {
        if (event.data.id) {
          await syncUserService.handleUserDeleted(event.data.id);
        }

        break;
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Webhook Error:", error);

    return NextResponse.json(
      { error: "Webhook verification failed" },
      { status: 400 }
    );
  }
}