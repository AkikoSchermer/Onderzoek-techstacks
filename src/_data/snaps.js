import Fetch from "@11ty/eleventy-fetch";

// De unieke UUID van Anne fleur's
const userUuid = "5e9589a5-ebfa-4a99-87a6-010f2f571444";

export default async function () {
 let snapurl = "https://fdnd-agency.directus.app/items/snappthis_snap?limit=-1"

let json = await Fetch(snapurl, {
    duration: "1d",
    type: "json",
});

console.log("eerste snaps:", json.data[0]);
return json.data;
}