"use server"
import { neon } from "@neondatabase/serverless"
import "./envConfig.ts"

export async function getData() {
	const sql = neon(process.env.DATABASE_URL)
	//const sql = neon(process.env.NEXT_PUBLIC_DATABASE_URL)
	//const data = await sql`...`
	//return data
}
