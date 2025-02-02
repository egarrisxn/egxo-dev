import styles from './socials.module.css'
import {SocialButton} from '../social-button'
import {LinkedIn, GitHub, XIcon, Instagram, Discord, Spotify1, BlueSky} from '../icons/social'

export default function Socials(props) {
  return (
    <div className={styles.socials} {...props}>
      <SocialButton
        href='https://github.com/egarrisxn'
        icon={<GitHub strokeWidth={2} />}
        tooltip='GitHub'
      />
      <SocialButton
        href='https://linkedin.com/in/ethan-gx'
        icon={<LinkedIn strokeWidth={2} />}
        tooltip='LinkedIn'
      />
      <SocialButton
        href='https://instagram.com/eg___xo'
        icon={<Instagram strokeWidth={2} />}
        tooltip='Instagram'
      />
      <SocialButton href='https://x.com/eg__xo' icon={<XIcon strokeWidth={2} />} tooltip='X' />
      <SocialButton
        href='https://bsky.app/profile/egxo.bsky.social'
        icon={<BlueSky strokeWidth={2} />}
        tooltip='BlueSky'
      />
      <SocialButton
        href='https://open.spotify.com/user/egarrisxn'
        icon={<Spotify1 strokeWidth={2} />}
        tooltip='Spotify'
      />
      <SocialButton
        href='https://discord.com/users/eg___xo'
        icon={<Discord strokeWidth={2} />}
        tooltip='Discord'
      />
    </div>
  )
}
