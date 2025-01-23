"use server"
import { neon } from "@neondatabase/serverless"
import { env } from "node:process"

export async function getData() {
	const sql = neon(process.env.DATABASE_URL)
	//const data = await sql`...`
	//return data
}
