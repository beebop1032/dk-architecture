'use server'
import { markAsRead } from '@/lib/db'
import { revalidatePath } from 'next/cache'

export async function toggleReadAction(id: number, lu: boolean) {
  await markAsRead(id, lu)
  revalidatePath('/admin')
}
