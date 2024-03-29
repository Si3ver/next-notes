import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getAllNotes } from '../lib/redis'
import SidebarNoteList from '@/components/SidebarNoteList'

export default async function Sidebar() {
  const notes = await getAllNotes();
  // console.log('notes', notes);
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
            {/* SideSearchField */}
        </section>
        <nav>
          <SidebarNoteList notes={notes} />
        </nav>
      </section>
    </>
  )
}
