import { fetchCurrentSeasons } from "@/utils/currentSeasonScrape";
import { NextResponse } from "next/server";

export async function POST(req) {
    const { teamNames } = await req.json();
    console.log('teamnames in route',teamNames)
   
    const data = await fetchCurrentSeasons(teamNames);
    return NextResponse.json({data}, { status: 200 });
}