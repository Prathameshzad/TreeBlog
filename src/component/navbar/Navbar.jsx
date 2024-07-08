import React from 'react'
import styles from "./navbar.module.css"
import Image from "next/image"
import Link from "next/link"
import ThemeToggle from "../themeToggle/ThemeToggle"
import AuthLinks from "../authLinks/AuthLinks"

const Navbar = () => {
  return (
    <div className={styles.container}>
        <div  className={styles.social}>
          <Image src="/facebook.png" alt='facebook' width={24} height={24}></Image>
          <Image src="/instagram.png" alt='instagram' width={24} height={24}></Image>
          <Image src="/youtube.png" alt='youtube' width={24} height={24}></Image>
        </div>
        <div  className={styles.logo}>TreeBlog</div>
        <div  className={styles.links}>
          <ThemeToggle></ThemeToggle>
          <Link href="/">Homepage</Link>
          <Link href="/">Contact</Link>
          <Link href="/">About</Link>
          <AuthLinks></AuthLinks>
        </div>
    </div>
  )
}

export default Navbar
