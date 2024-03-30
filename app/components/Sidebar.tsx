import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getAllNotes } from '../lib/redis'
import EditButton from '@/components/EditButton'
import SidebarNoteList from '@/components/SidebarNoteList'

export default async function Sidebar() {
  const notes = await getAllNotes();

  return (
    <>
      <section className="col sidebar">
        <Link href={'/'} className="link--unstyled">
          <section className="sidebar-header">
            <Image
              className="logo"
              src="/logo.svg"
              width="22"
              height="20"
              alt=""
              role="presentation"
            />
            <strong>React Notes</strong>
          </section>
        </Link>
        <section className="sidebar-menu" role="menubar">
          <EditButton noteId={null}>New</EditButton>
        </section>
        <nav>
          <SidebarNoteList notes={notes} />
        </nav>
      </section>
    </>
  )
}
