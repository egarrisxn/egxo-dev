import {
  LinkedIn,
  GitHub,
  XIcon,
  Instagram,
  Discord,
  Spotify1,
  BlueSky,
  Peerlist,
  Threads,
  Mastodon,
} from '../icons/social'
import {SocialButton} from '../social-button'
import styles from './socials.module.css'

export default function Socials(props: Omit<React.HTMLProps<HTMLDivElement>, 'className'>) {
  return (
    <div className={styles.socials} {...props}>
      <SocialButton href='https://github.com/egarrisxn' icon={<GitHub />} tooltip='GitHub' />
      <SocialButton
        href='https://linkedin.com/in/ethan-gx'
        icon={<LinkedIn />}
        tooltip='LinkedIn'
      />
      <SocialButton
        href='https://open.spotify.com/user/egarrisxn'
        icon={<Spotify1 />}
        tooltip='Spotify'
      />
      <SocialButton href='https://instagram.com/eg___xo' icon={<Instagram />} tooltip='Instagram' />
      <SocialButton href='https://x.com/eg__xo' icon={<XIcon />} tooltip='X' />
      <SocialButton
        href='https://bsky.app/profile/egxo.bsky.social'
        icon={<BlueSky />}
        tooltip='BlueSky'
      />
      <SocialButton href='https://threads.net/@eg___xo' icon={<Threads />} tooltip='Threads' />
      <SocialButton href='https://discord.com/users/eg___xo' icon={<Discord />} tooltip='Discord' />
      <SocialButton href='https://peerlist.io/eg_xo' icon={<Peerlist />} tooltip='Peerlist' />
      <SocialButton href='https://mastodon.social/@eg_Xo' icon={<Mastodon />} tooltip='Mastodon' />
    </div>
  )
}
