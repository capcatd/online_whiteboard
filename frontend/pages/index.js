import Board from '../components/Board'
import Toolbar from '../components/Toolbar'
import {Notification} from '../components/Notification'
import {Modal} from '../components/Modal'
import Head from 'next/head';

export default function Home() {
  return (
    <>
    <Head>
        <title>Online Whiteboard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Notification />
      <Modal />
      <Toolbar />
      <Board />
    </>
  )
}
