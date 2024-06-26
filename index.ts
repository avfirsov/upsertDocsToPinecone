import "dotenv/config";
import { upsertDocuments } from "./src/upserters/upsertDoc.js";
import { fileURLToPath } from "url";
import path from "path";
import { upsertSitemap } from "./src/upserters/upsertSitemap";

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(path.dirname(__filename));

await upsertDocuments("docs");
await upsertSitemap("example.com/sitemap.xml", "article");
