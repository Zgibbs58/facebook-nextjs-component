// src/app/api/facebook/route.js

import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
  const { FB_PAGE_ID, FB_ACCESS_TOKEN } = process.env;
  const url = `https://graph.facebook.com/me?fields=posts.limit(5){created_time,message,id,attachments{media}}&access_token=${FB_ACCESS_TOKEN}`;

  try {
    const response = await axios.get(url);
    // console.log("response", response.data.posts.data);

    return NextResponse.json(response.data.posts.data);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch Facebook posts" }, { status: 500 });
  }
}
