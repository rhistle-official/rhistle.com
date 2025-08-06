import { auth } from "@clerk/nextjs/server";
import { clerkClient } from "@clerk/clerk-sdk-node";

export async function POST(req: Request) {
  try {
    const { userId } = await auth();
    if (!userId) return new Response("Unauthorized", { status: 401 });

    const body = await req.json();
    
    await clerkClient.users.updateUserMetadata(userId, {
      publicMetadata: body.publicMetadata,               
    })

    return new Response(JSON.stringify({ ok: true }));
  } catch (e) {
    console.error("Metadata update failed:", e);
    return new Response("Internal Server Error", { status: 500 });
  }
}